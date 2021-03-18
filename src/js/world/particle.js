
const ORIGIN = new THREE.Vector3();
const SCALE = 2;
const BULGE_DISTANCE = 0.8;
const FUZZINESS = 0; // 0.1;

const deg = (v) => v * Math.PI / 180;

export class ParticlePoint extends THREE.Vector3 {
	constructor(vector, index, length) {
		super(vector.x, vector.y, vector.z);
		this.index = index;
		this.length = length;
		this.p = new THREE.Vector3();
		this.v = new THREE.Vector3();
		this.t = new THREE.Vector3(vector.x, vector.y, vector.z).multiplyScalar(2 * index / length);
	}

	render(intersection) {
		const i = this.index;
		const positions = this.positions;
		const p = this.p;
		if (FUZZINESS > 0) {
			p.x = Math.random() * FUZZINESS;
			p.y = Math.random() * FUZZINESS;
			p.z = Math.random() * FUZZINESS;
		} else {
			// p.set(0, 0, 0);
			p.lerp(ORIGIN, 0.25);
		}
		if (intersection) {
			const v = this.v;
			v.subVectors(this, intersection);
			// const d = intersection.distanceTo(this);
			const l = v.length();
			let pow = Math.max(0, BULGE_DISTANCE - l);
			if (pow > 0) {
				pow = this.easeQuadOut(pow);
				v.normalize();
				p.add(v.multiplyScalar(pow));
			}
		}
		const t = this.t;
		t.lerp(p, 0.02);
		const x = this.x + t.x;
		const y = this.y + t.y;
		const z = this.z + t.z;
		positions[i * 3] = x;
		positions[i * 3 + 1] = y;
		positions[i * 3 + 2] = z;
	}

	easeQuadOut(t) {
		return -1.0 * t * (t - 2.0);
	}
}
