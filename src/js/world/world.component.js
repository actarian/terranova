import { Component, getContext } from 'rxcomp';
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
// import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js';
import { DEBUG } from '../environment';
import { Rect } from '../rect/rect';
import Interactive from './interactive/interactive';

const ORIGIN = new THREE.Vector3();
const USE_SHADOW = false;

export default class WorldComponent extends Component {

	get error() {
		return this.error_;
	}
	set error(error) {
		if (this.error_ !== error) {
			this.error_ = error;
			this.pushChanges();
		}
	}

	get debugging() {
		// return STATIC || DEBUG;
		return DEBUG;
	}

	onInit() {
		// console.log('WorldComponent.onInit');
		this.index = 0;
		this.error_ = null;
		this.loading = null;
		this.waiting = null;
		this.createScene();
		this.addListeners();
		this.animate();
	}

	onDestroy() {
		this.removeListeners();
		const renderer = this.renderer;
		renderer.setAnimationLoop(() => { });
	}

	createScene() {
		const { node } = getContext(this);
		this.size = { left: 0, top: 0, width: 0, height: 0, aspect: 0 };
		this.mouse = new THREE.Vector2();

		const container = this.container = node;
		const worldRect = this.worldRect = Rect.fromNode(container);
		const cameraRect = this.cameraRect = new Rect();

		const cameraGroup = this.cameraGroup = new THREE.Group();
		const camera = this.camera = new THREE.PerspectiveCamera(70, container.offsetWidth / container.offsetHeight, 0.01, 1000);
		camera.position.z = 2;
		camera.lookAt(ORIGIN);
		cameraGroup.add(camera);

		// const orbit = this.orbit = new OrbitService(camera);

		const renderer = this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			premultipliedAlpha: true,
			logarithmicDepthBuffer: true,
			// physicallyCorrectLights: true,
		});
		// renderer.setClearColor(0x7140eb, 1);
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		renderer.xr.enabled = true;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 0.8;
		renderer.outputEncoding = THREE.sRGBEncoding;
		if (USE_SHADOW) {
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFShadowMap; // THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
		}
		if (container.childElementCount > 1) {
			container.insertBefore(renderer.domElement, container.children[1]);
		} else {
			container.appendChild(renderer.domElement);
		}

		const raycaster = this.raycaster = new THREE.Raycaster();
		raycaster.setFromCamera(this.mouse, camera);

		const scene = this.scene = new THREE.Scene();
		scene.add(cameraGroup);

		const objects = this.objects = new THREE.Group();
		objects.name = '[objects]';
		scene.add(objects);

		/*
		const mainLight = new THREE.PointLight(0xffffff);
		mainLight.position.set(-50, 0, -50);
		objects.add(mainLight);

		const light2 = new THREE.DirectionalLight(0xffe699, 5);
		light2.position.set(5, -5, 5);
		light2.target.position.set(0, 0, 0);
		objects.add(light2);

		const light = new THREE.AmbientLight(0x101010);
		objects.add(light);
		*/

		/*
		const composer = this.composer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);
		const luminosityPass = new ShaderPass(LuminosityShader);
		composer.addPass(luminosityPass);
		*/

		this.resize();
	}

	raycasterHitTest() {
		try {
			if (this.renderer.xr.isPresenting) {
				const raycaster = this.updateRaycasterXR(this.controller, this.raycaster);
				if (raycaster) {
					const hit = Interactive.hittest(raycaster, this.controller.userData.isSelecting);
					this.indicator.update();
				}
			}
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	repos(object, rect) {
		const worldRect = this.worldRect;
		const sx = 0.8;
		// const sx = rect.width / worldRect.width;
		// const sy = rect.height / worldRect.height;
		object.scale.set(sx, sx, sx);
		// const tx = ((rect.x + rect.width / 2) - worldRect.width / 2) / worldRect.width * 2.0 * this.camera.aspect; // * cameraRect.width / worldRect.width - cameraRect.width / 2;
		// const ty = ((rect.y + rect.height / 2) - worldRect.height / 2) / worldRect.height * 2.0 * this.camera.aspect; // * cameraRect.height / worldRect.height - cameraRect.height / 2;
		const tx = ((rect.x + rect.width / 2) - worldRect.width / 2) / worldRect.width * 2.0 * this.camera.aspect;
		const ty = ((rect.y + rect.height / 2) - worldRect.height / 2) / worldRect.height * 2.0 * this.camera.aspect;
		// console.log(tx);
		// const position = new THREE.Vector3(tx, ty, 0).unproject(this.camera);
		object.position.set(tx, -ty, 0);
		// console.log(tx, -ty, 0);
	}

	render(delta) {
		try {
			const renderer = this.renderer,
				scene = this.scene,
				camera = this.camera;
			const time = performance.now();
			const tick = this.tick_ ? ++this.tick_ : this.tick_ = 1;
			this.scene.traverse((child) => {
				if (typeof child.userData.render === 'function') {
					child.userData.render(time, tick);
				}
			});
			renderer.render(this.scene, this.camera);
			/*
			const composer = this.composer;
			composer.render();
			*/
			// this.orbit.render();
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	animate() {
		const renderer = this.renderer;
		renderer.setAnimationLoop(this.render);
	}

	resize() {
		try {
			const container = this.container,
				renderer = this.renderer,
				camera = this.camera;
			const size = this.size;
			const rect = container.getBoundingClientRect();
			size.left = Math.floor(rect.left);
			size.top = Math.floor(rect.top);
			size.width = Math.ceil(rect.width);
			size.height = Math.ceil(rect.height);
			size.aspect = size.width / size.height;
			const worldRect = this.worldRect;
			worldRect.setSize(size.width, size.height);
			renderer.setSize(size.width, size.height);
			if (camera) {
				camera.aspect = size.width / size.height;
				const angle = camera.fov * Math.PI / 180;
				const height = Math.abs(camera.position.z * Math.tan(angle / 2) * 2);
				const cameraRect = this.cameraRect;
				cameraRect.width = height * camera.aspect;
				cameraRect.height = height;
				camera.updateProjectionMatrix();
			}
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	updateRaycasterMouse(event) {
		const w2 = this.size.width / 2;
		const h2 = this.size.height / 2;
		this.mouse.x = (event.clientX - this.size.left - w2) / w2;
		this.mouse.y = -(event.clientY - this.size.top - h2) / h2;
		const raycaster = this.raycaster;
		raycaster.setFromCamera(this.mouse, this.camera);
		return raycaster;
	}

	onMouseDown(event) {
		try {
			if (event.button !== 0) {
				return;
			}
			const raycaster = this.updateRaycasterMouse(event);
			const hit = Interactive.hittest(raycaster, true);
			if (this.debugging) {
				if (this.keys.Shift || this.keys.Control) {
				} else {
					if (this.panorama.mesh.intersection) {
						const position = new THREE.Vector3().copy(this.panorama.mesh.intersection.point).normalize();
						console.log(JSON.stringify({ position: position.toArray() }));
					}
				}
			}
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	raycasterDesktopHitTest(event) {
		const raycaster = this.updateRaycasterMouse(event);
		const hit = Interactive.hittest(raycaster);
	}

	onMouseMove(event) {
		try {
			this.raycasterDesktopHitTest(event);
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	onMouseUp(event) {
		try {
			const raycaster = this.updateRaycasterMouse(event);
			const hit = Interactive.hittest(raycaster, false);
		} catch (error) {
			this.error = error;
			// throw (error);
		}
	}

	onMouseWheel(event) {
		/*
		try {
			const deltaY = event.deltaY * (event.wheelDeltaY !== undefined ? 1 : 37);
			const zoom = this.zoom + deltaY * 0.1,
		} catch (error) {
			this.error = error;
			// throw (error);
		}
		*/
	}

	onOrientationDidChange() {
	}

	addListeners() {
		this.resize = this.resize.bind(this);
		this.render = this.render.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseWheel = this.onMouseWheel.bind(this);
		window.addEventListener('resize', this.resize, false);
		this.container.addEventListener('wheel', this.onMouseWheel, false);
		this.container.addEventListener('mousedown', this.onMouseDown, false);
		this.container.addEventListener('mouseup', this.onMouseUp, false);
		document.addEventListener('mousemove', this.onMouseMove, false);
	}

	removeListeners() {
		window.removeEventListener('resize', this.resize, false);
		window.removeEventListener('resize', this.resize, false);
		document.removeEventListener('mousemove', this.onMouseMove, false);
		document.removeEventListener('wheel', this.onMouseWheel, false);
		this.container.removeEventListener('mousedown', this.onMouseDown, false);
		this.container.removeEventListener('mouseup', this.onMouseUp, false);
	}
}

WorldComponent.meta = {
	selector: '[world]',
};
