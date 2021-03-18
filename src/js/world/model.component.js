import { Component, getContext } from 'rxcomp';
import Interactive from './interactive/interactive';
// import Ease from './ease/ease';
import WorldComponent from './world.component';

const deg = THREE.Math.degToRad;

const GEOMETRY = new THREE.BoxBufferGeometry(1, 1, 1);
// const GEOMETRY = new THREE.IcosahedronBufferGeometry(0.5, 1);

export default class ModelComponent extends Component {

	set renderOrder(renderOrder) {
		this.group.renderOrder = renderOrder;
	}

	onInit() {
		// console.log('ModelComponent.onInit');
		// console.log('item', this.item, 'host', this.host);
		if (!this.host) {
			throw ('ModelComponent host is undefined');
		}
		this.scale = new THREE.Vector3(1.0, 1.0, 1.0);
		this.position = new THREE.Vector3();
		const group = this.group = new THREE.Group();
		group.name = this.getName();
		group.userData.render = (time, tick) => {
			// if (this.intersection) {
			this.render(this, time, tick);
			// }
		};
		this.getContainer().add(group);
		this.onCreate(
			(mesh, item) => this.onMount(mesh, item),
			(mesh, item) => this.onDismount(mesh, item)
		);
	}

	onDestroy() {
		const group = this.group;
		this.getContainer().remove(group);
		delete group.userData.render;
		this.disposeObject(group);
		this.group = null;
	}

	getContainer() {
		return this.host.objects;
	}

	getName(name) {
		return `${this.constructor.meta.selector}-${this.rxcompId}${name ? `-${name}` : ''}`;
	}

	onCreate(mounth, dismount) {
		const material = new THREE.MeshStandardMaterial({
			color: new THREE.Color('#ffcc00'),
			roughness: 0.4,
			metalness: 0.01,
			flatShading: true,
			transparent: true,
			opacity: 0.9,
		});
		const mesh = new THREE.Mesh(GEOMETRY, material);
		if (typeof mounth === 'function') {
			mounth(mesh);
		}
		return mesh;
	}

	onMount(mesh, item) {
		if (this.mesh) {
			// console.log('ModelComponent.dismount.mesh');
			this.onDismount(this.mesh);
		}
		mesh.name = this.getName('mesh');
		this.mesh = mesh;
		if (item) {
			item.mesh = mesh;
			item.onUpdate = () => {
				this.onUpdate(item, mesh);
			};
			item.onUpdateAsset = () => {
				this.onUpdateAsset(item, mesh);
			};
		}
		this.group.add(mesh);
		// this.host.render(); !!!
		/*
		const node = this.node;
		DomService.scrollIntersection$(node).subscribe(event => {
			this.scroll = event.scroll;
			this.intersection = event.intersection;
			this.calculateScaleAndPosition();
		});
		*/
		// console.log('Model.loaded', mesh);
	}

	onDismount(mesh, item) {
		this.group.remove(mesh);
		if (typeof mesh.dispose === 'function') {
			mesh.dispose();
		}
		this.disposeObject(mesh);
		this.mesh = null;
		if (item) {
			delete item.mesh;
			delete item.onUpdate;
			delete item.onUpdateAsset;
		}
	}

	disposeObject(object) {
		object.traverse(child => {
			if (child.isInteractiveMesh || child.isInteractiveSprite) {
				Interactive.dispose(child);
			}
			if (child.isMesh) {
				if (child.material.map && child.material.map.disposable !== false) {
					child.material.map.dispose();
				}
				child.material.dispose();
				child.geometry.dispose();
			} else if (child.isSprite) {
				if (child.material.map && child.material.map.disposable !== false) {
					child.material.map.dispose();
				}
				child.material.dispose();
			}
		});
		// console.log('ModelComponent.disposeObject', object);
	}

	calculateScaleAndPosition() {
		const { node } = getContext(this);
		this.host.repos(this, node.getBoundingClientRect());
	}

	render(time, tick) {
		/*
		this.calculateScaleAndPosition();
		const group = this.group;
		const scale = this.scale;
		// group.scale.set(scale.x, scale.y, scale.z);
		const position = this.position;
		group.position.set(position.x, 0, 0);
		// const tween = this.tween();
		// group.rotation.x = deg(180) * tween;
		// group.rotation.y = deg(360) * tween;
		*/
	}

	getScroll(offset) {
		const scroll = this.intersection.scroll(offset);
		// console.log(scroll);
		return scroll;
	}

	getTween(offset) {
		let tween = Math.min(0.0, this.intersection.offset(offset)) + 1;
		tween = Math.max(0.0, tween);
		// tween = Ease.Sine.InOut(tween);
		tween -= 1;
		return tween;
	}

	// called by UpdateViewItemComponent
	onUpdate(item, mesh) { }

	// called by UpdateViewItemComponent
	onUpdateAsset(item, mesh) { }

}

ModelComponent.meta = {
	selector: '[model]',
	hosts: { host: WorldComponent },
	inputs: ['item'],
};
