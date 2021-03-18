// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getContext } from 'rxcomp';
import { environment } from '../environment';
import LoaderService from '../loader/loader.service';
import EmittableMesh from './interactive/emittable.mesh';
import FreezableMesh from './interactive/freezable.mesh';
import Interactive from './interactive/interactive';
import InteractiveMesh from './interactive/interactive.mesh';
import ModelComponent from './model.component';
import { Particles } from './particles';
import WorldComponent from './world.component';

const AUTOPLAY = false;
const SCALE = 2;
const deg = (v) => v * Math.PI / 180;

export default class ModelMoreComponent extends ModelComponent {

	get freezed() {
		return this.freezed_;
	}
	set freezed(freezed) {
		if (this.freezed_ !== freezed) {
			this.freezed_ = freezed;
			const mesh = this.mesh;
			if (mesh) {
				mesh.traverse((child) => {
					if (child.isInteractiveMesh) {
						child.freezed = freezed;
					}
				});
			}
		}
	}

	onInit() {
		super.onInit();
		this.z = 0;
		this.progress = null;
		this.addListeners();
		window.animateToIndex = (index, callback) => {
			this.animateToIndex(index, callback);
		};
		const { node } = getContext(this);
		node.classList.add('ready');
	}

	onDestroy() {
		this.removeListeners();
		super.onDestroy();
	}

	onCreate(mount, dismount) {
		this.loadGlb(environment.getPath('/models/'), 'more_logo2.glb', (mesh, animations) => {
			this.onGlbLoaded(mesh, animations, mount, dismount);
		});
	}

	loadGlb(path, file, callback) {
		const renderer = this.host.renderer;
		// const roughnessMipmapper = new RoughnessMipmapper(renderer); // optional
		const progressRef = LoaderService.getRef();
		// console.log('progressRef');
		const loader = new THREE.GLTFLoader().setPath(path);
		// Optional: Provide a DRACOLoader instance to decode compressed mesh data
		const decoderPath = `${environment.assets}js/draco/`;
		// console.log(decoderPath);
		const dracoLoader = new THREE.DRACOLoader();
		dracoLoader.setDecoderPath(decoderPath);
		loader.setDRACOLoader(dracoLoader);
		loader.load(file, (glb) => {
			/*
			glb.scene.traverse((child) => {
				if (child.isMesh) {
					// roughnessMipmapper.generateMipmaps(child.material);
				}
			});
			*/
			if (typeof callback === 'function') {
				callback(glb.scene, glb.animations);
			}
			LoaderService.setProgress(progressRef, 1);
		}, (progressEvent) => {
			LoaderService.setProgress(progressRef, progressEvent.loaded, progressEvent.total);
		});
	}

	parseAnimations(mesh, animations) {
		const actionIndex = this.actionIndex = -1;
		const actions = this.actions = [];
		if (animations && animations.length) {
			const clock = this.clock = new THREE.Clock();
			const mixer = this.mixer = new THREE.AnimationMixer(mesh);
			mixer.timeScale = 1;
			animations.forEach(animation => {
				const action = mixer.clipAction(animation);
				action.enabled = true;
				action.setEffectiveTimeScale(1);
				action.setEffectiveWeight(1);
				// action.setLoop(THREE.LoopPingPong);
				action.setLoop(THREE.LoopRepeat);
				// action.clampWhenFinished = true; // pause on last frame
				actions.push(action);
			});
		}
	}

	onGlbLoaded(mesh, animations, mount, dismount) {
		// animations
		this.parseAnimations(mesh, animations);
		// scale
		const box = new THREE.Box3().setFromObject(mesh);
		const size = box.max.clone().sub(box.min);
		const max = Math.max(size.x, size.y, size.z);
		let scale = SCALE / max;
		mesh.scale.set(scale, scale, scale);
		// repos
		let dummy;
		dummy = new THREE.Group();
		dummy.add(mesh);
		const geometry = new THREE.PlaneGeometry(2, 2, 2, 2);
		const material = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide});
		const plane = this.plane = new THREE.Mesh( geometry, material );
		dummy.add(plane);
		const particles = this.particles = Particles.getParticles(mesh, scale);
		dummy.add(particles);
		this.makeInteractive(plane);
		this.makeAnimation();
		if (typeof mount === 'function') {
			mount(dummy);
		}
	}

	makeAnimation() {
		const animations = this.animations || (this.animations = [
			new THREE.Vector3(-deg(70), deg(20), 0),
			new THREE.Vector3(-deg(70), deg(-20), 0),
			new THREE.Vector3(0, 0, 0),
			new THREE.Vector3(-deg(70), deg(20), deg(45)),
			new THREE.Vector3(-deg(70), deg(-20), deg(-45)),
			new THREE.Vector3(-deg(90), 0, 0),
		]);
		const animationIndex = this.animationIndex != null ? this.animationIndex : (this.animationIndex = 0);
		const a = this.a != null ? this.a : (this.a = new THREE.Vector3());
		a.copy(animations[animationIndex]);
		this.animate();
	}

	animate() {
		if (AUTOPLAY) {
			setTimeout(() => {
				const animations = this.animations;
				const animationIndex = (this.animationIndex + 1) % animations.length;
				this.animationIndex = animationIndex;
				this.animateToIndex(animationIndex, () => {
					this.animate();
				});
			}, 4000);
		}
	}

	animateToIndex(animationIndex, complete) {
		const a = this.a;
		const animations = this.animations;
		const animation = animations[animationIndex];
		gsap.to(a, {
			x: animation.x,
			y: animation.y,
			z: animation.z,
			duration: 1,
			delay: 0.1,
			ease: Power2.easeInOut,
			onComplete: () => {
				if (typeof complete === 'function') {
					complete();
				}
			}
		});
	}

	render(time, tick) {
		const mesh = this.mesh;
		const mixer = this.mixer;
		const clock = this.clock;
		const a = this.a;
		const z = this.z += deg(0.01);
		if (mesh) {
			const overing = this.getOvering();
			const state = this.state || (this.state = new THREE.Vector3(0, 0, 1));
			state.lerp(overing, 0.05);
			mesh.rotation.x = a.x + state.x;
			mesh.rotation.y = a.y + state.y;
			mesh.rotation.z = a.z + z;
			mesh.scale.x = state.z;
			mesh.scale.y = state.z;
			mesh.scale.z = state.z;
			Particles.render(this.particles, this.getIntersection());
		}
		if (mixer) {
			const delta = clock.getDelta();
			mixer.update(delta);
		}
	}

	getIntersection() {
		/*
		if (this.plane.intersection) {
			return this.plane.intersection;
		}
		*/
		let intersection;
		this.mesh.traverse((child) => {
			if (child.isMesh && child.intersection) {
				intersection = child.intersection;
			}
		});
		return intersection;
	}

	getOvering() {
		const mouse = this.mouse || { x: 0, y: 0 };
		const overing = this.overing || new THREE.Vector3(0, 0, 1);
		if (this.over) {
			overing.x = -mouse.y * Math.PI / 180 * 80;
			overing.y = -mouse.x * Math.PI / 180 * 80;
			overing.z = 1.05;
		} else {
			overing.x = 0;
			overing.y = 0;
			overing.z = 1;
		}
		this.overing = overing;
		return overing;
	}

	makeInteractive(mesh) {
		const interactiveDescriptors = ModelMoreComponent.getInteractiveDescriptors();
		mesh.traverse((child) => {
			if (child.isMesh) {
				Object.keys(interactiveDescriptors).forEach(key => {
					if (key !== 'constructor') {
						Object.defineProperty(child, key, interactiveDescriptors[key]);
					}
				});
				child.freezed = false;
				child.events = {};
				child.depthTest = true;
				child.over_ = false;
				child.down_ = false;
				Interactive.items.push(child);
				child.on('over', () => {
					this.over = true;
				});
				child.on('out', () => {
					this.over = false;
				});
				/*
				child.on('down', () => {
					this.onClipToggle();
					console.log('onDown');
				});
				*/
			}
		});
	}

	onMove(event) {
		const mouse = this.mouse || { x: 0, y: 0 };
		if (event instanceof MouseEvent) {
			mouse.x = event.clientX;
			mouse.y = event.clientY;
		} else if (window.TouchEvent && event instanceof TouchEvent) {
			if (event.touches.length > 0) {
				mouse.x = event.touches[0].pageX;
				mouse.y = event.touches[0].pageY;
			}
		}
		const w2 = window.innerWidth / 2;
		const h2 = window.innerWidth / 2;
		mouse.x = (mouse.x - w2) / w2;
		mouse.y = (mouse.y - h2) / h2;
		// console.log(mouse.x, mouse.y);
		this.mouse = mouse;
	}

	onClipToggle() {
		const actions = this.actions;
		if (actions.length === 1) {
			const action = actions[0];
			if (this.actionIndex === -1) {
				this.actionIndex = 0;
				if (action.paused || action.timeScale === 0) {
					action.paused = false;
				} else {
					action.play();
				}
			} else if (this.actionIndex === 0) {
				this.actionIndex = -1;
				action.halt(0.3);
			}
		} else if (actions.length > 1) {
			if (this.actionIndex > -1 && this.actionIndex < actions.length) {
				const previousClip = actions[this.actionIndex];
				previousClip.halt(0.3);
			}
			this.actionIndex++;
			if (this.actionIndex === actions.length) {
				this.actionIndex = -1;
				// nothing
			} else {
				const action = actions[this.actionIndex];
				// console.log(this.actionIndex, action);
				if (action.paused) {
					action.paused = false;
				}
				if (action.timeScale === 0) {
					action.timeScale = 1;
				}
				action.play();
			}
		}
	}

	addListeners() {
		this.onMove = this.onMove.bind(this);
		const target = document.querySelector('.world canvas');
		target.addEventListener('mousemove', this.onMove);
		target.addEventListener('touchmove', this.onMove);
	}

	removeListeners() {
		const target = document.querySelector('.world canvas');
		target.removeEventListener('mousemove', this.onMove);
		target.removeEventListener('touchmove', this.onMove);
	}

	static getInteractiveDescriptors() {
		let descriptors = ModelMoreComponent.interactiveDescriptors;
		if (!descriptors) {
			const freezableDescriptors = Object.getOwnPropertyDescriptors(FreezableMesh.prototype);
			const emittableDescriptors = Object.getOwnPropertyDescriptors(EmittableMesh.prototype);
			const interactiveDescriptors = Object.getOwnPropertyDescriptors(InteractiveMesh.prototype);
			descriptors = Object.assign({}, freezableDescriptors, emittableDescriptors, interactiveDescriptors);
			ModelMoreComponent.interactiveDescriptors = descriptors;
		}
		return descriptors;
	}

}

ModelMoreComponent.ORIGIN = new THREE.Vector3();

ModelMoreComponent.meta = {
	selector: '[model-more]',
	hosts: { host: WorldComponent },
	outputs: ['down'],
};
