import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import { ParticlePoint } from "./particle";

export class Particles {

	static getParticles(mesh, scale) {
		let target, targetMesh;
		mesh.traverse((child) => {
			if (child.isMesh) {
				child.material = new THREE.MeshBasicMaterial({ visible: false });
				targetMesh = child;
				target = child.geometry;
			}
		});
		const points = [];
		const vertexCount = targetMesh.geometry.getAttribute('position').count * 3;
		const sampler = new MeshSurfaceSampler(targetMesh)
			.setWeightAttribute(null)
			.build();
		// ; 'uv';
		const _position = new THREE.Vector3();
		const _normal = new THREE.Vector3();
		for (let i = 0; i < vertexCount; i++) {
			sampler.sample(_position, _normal);
			// _normal.add( _position );
			const point = new ParticlePoint(_position.clone().multiplyScalar(scale), i, vertexCount);
			points.push(point);
			// dummy.lookAt( _normal );
			// dummy.updateMatrix();
		}
		const amount = points.length;
		const geometry = this.geometry = new THREE.BufferGeometry();
		const positions = this.positions = new Float32Array(amount * 3);
		const colors = new Float32Array(amount * 3);
		const color = new THREE.Color();
		let n = 1, n2 = n / 2; // amount spread in the cube
		points.forEach((p, i) => {
			// positions
			positions[i * 3] = p.x;
			positions[i * 3 + 1] = p.y;
			positions[i * 3 + 2] = p.z;
			// colors
			/*
			const vx = (p.x / n) + 0.5;
			const vy = (p.y / n) + 0.5;
			const vz = (p.z / n) + 0.5;
			color.setRGB(vx, vy, vz);
			*/
			color.setRGB(113 / 255, 64 / 255, 253 / 255);
			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;
			// point
			p.positions = positions;
			p.geometry = geometry;
		});
		this.particlePoints = points;
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		geometry.computeBoundingSphere();
		const texture = new THREE.CanvasTexture(this.getTexture());
		const material = new THREE.PointsMaterial({
			size: 0.01,
			map: texture,
			vertexColors: THREE.VertexColors,
			blending: THREE.NormalBlending, // THREE.NoBlending, // THREE.AdditiveBlending, // THREE.NormalBlending, // THREE.AdditiveBlending,
			depthTest: false,
			transparent: true
		});
		const particles = new THREE.Points(geometry, material);
		return particles;
	}

	static render(particles, intersection) {
		const particlePoints = this.particlePoints;
		if (particles && particlePoints && particlePoints.length) {
			const intersectionPoint = intersection ? particles.worldToLocal(intersection.point) : null;
			particlePoints.forEach(x => x.render(intersectionPoint));
			const point = particlePoints[0];
			const positions = point.positions;
			const geometry = point.geometry;
			geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
			geometry.attributes.position.needsUpdate = true;
			// geometry.computeBoundingSphere();
		}
	}

	static getTexture() {
		let canvas = document.createElement('canvas');
		canvas.width = 64;
		canvas.height = 64;
		let ctx = canvas.getContext('2d');
		let gradient = ctx.createRadialGradient(
			canvas.width / 2,
			canvas.height / 2,
			0,
			canvas.width / 2,
			canvas.height / 2,
			canvas.width / 2
		);
		gradient.addColorStop(0, 'rgba(113,64,235,1)');
		gradient.addColorStop(0.1, 'rgba(113,64,235,1)');
		gradient.addColorStop(0.9, 'rgba(113,64,235,.05)');
		gradient.addColorStop(1, 'rgba(0,0,0,0)');
		ctx.fillStyle = gradient; // "#FFFFFF"; // gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		return canvas;
	}

}
