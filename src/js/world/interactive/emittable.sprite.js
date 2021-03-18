import FreezableSprite from "./freezable.sprite";

export default class EmittableSprite extends FreezableSprite {

	constructor(material) {
		material = material || new THREE.SpriteMaterial({
			color: 0xff00ff,
			// opacity: 1,
			// transparent: true,
		});
		super(material);
		this.events = {};
	}

	on(type, callback) {
		const event = this.events[type] = this.events[type] || [];
		event.push(callback);
		return () => {
			this.events[type] = event.filter(x => x !== callback);
		};
	}

	off(type, callback) {
		const event = this.events[type];
		if (event) {
			this.events[type] = event.filter(x => x !== callback);
		}
	}

	emit(type, data) {
		const event = this.events[type];
		if (event) {
			event.forEach(callback => {
				// callback.call(this, data);
				callback(data);
			});
		}
		const broadcast = this.events.broadcast;
		if (broadcast) {
			broadcast.forEach(callback => {
				callback(type, data);
			});
		}
	}

}
