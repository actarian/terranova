export default class Emittable {

	constructor() {
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

	once(type, callback) {
		const once = (data) => {
			callback(data);
			this.off(type, once);
		};
		this.on(type, once);
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

	has(type) {
		const callbacks = this.events[type];
		return callbacks && callbacks.length;
	}

}
