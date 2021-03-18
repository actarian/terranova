export default class SessionStorageService {

	static delete(name) {
		if (this.isSessionStorageSupported()) {
			window.sessionStorage.removeItem(name);
		}
	}

	static exist(name) {
		if (this.isSessionStorageSupported()) {
			return window.sessionStorage[name] !== undefined;
		}
	}

	static get(name) {
		let value = null;
		if (this.isSessionStorageSupported() && window.sessionStorage[name] !== undefined) {
			try {
				value = JSON.parse(window.sessionStorage[name]);
			} catch (e) {
				console.log('SessionStorageService.get.error parsing', name, e);
			}
		}
		return value;
	}

	static set(name, value) {
		if (this.isSessionStorageSupported()) {
			try {
				const cache = [];
				const json = JSON.stringify(value, function(key, value) {
					if (typeof value === 'object' && value !== null) {
						if (cache.indexOf(value) !== -1) {
							// Circular reference found, discard key
							return;
						}
						cache.push(value);
					}
					return value;
				});
				window.sessionStorage.setItem(name, json);
			} catch (e) {
				console.log('SessionStorageService.set.error serializing', name, value, e);
			}
		}
	}

	static isSessionStorageSupported() {
		if (this.supported) {
			return true;
		}
		let supported = false;
		try {
			supported = 'sessionStorage' in window && window.sessionStorage !== null;
			if (supported) {
				window.sessionStorage.setItem('test', '1');
				window.sessionStorage.removeItem('test');
			} else {
				supported = false;
			}
		} catch (e) {
			supported = false;
		}
		this.supported = supported;
		return supported;
	}
}
