// import DebugService from '../debug.service';

const defaultEvent = {};

export default class Interactive { }

Interactive.items = [];
Interactive.hittest = interactiveHittest.bind(Interactive);
Interactive.dispose = interactiveDispose.bind(Interactive);

export function interactiveHittest(raycaster, down = false, event = defaultEvent) {
	// const debugService = DebugService.getService();
	let dirty = false;
	if (this.down !== down) {
		this.down = down;
		this.lock = false;
		dirty = true;
	}
	const items = this.items.filter(x => !x.freezed);
	const intersections = raycaster.intersectObjects(items);
	let key, hit;
	const hash = {};
	intersections.forEach((intersection, i) => {
		const object = intersection.object;
		key = object.uuid;
		if (i === 0) {
			if (this.lastIntersectedObject !== object || dirty) {
				this.lastIntersectedObject = object;
				hit = object;
				// debugService.setMessage(hit.name || hit.id);
				// haptic feedback
			} else if (
				object.intersection && (
					Math.abs(object.intersection.point.x - intersection.point.x) > 0.01 ||
					Math.abs(object.intersection.point.y - intersection.point.y) > 0.01
				)
			) {
				object.intersection = intersection;
				object.emit('move', object);
			}
		}
		hash[key] = intersection;
	});
	if (intersections.length === 0) {
		this.lastIntersectedObject = null;
	}
	items.forEach(x => {
		x.intersection = hash[x.uuid];
		x.over = (x === this.lastIntersectedObject) || (x.intersection && !x.depthTest && (!this.lastIntersectedObject || this.lastIntersectedObject.depthTest));
		x.down = down && x.over && !this.lock;
		if (x.down) {
			this.lock = true;
		}
	});
	return hit;
}

export function interactiveDispose(object) {
	if (object) {
		const index = this.items.indexOf(object);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}
}
