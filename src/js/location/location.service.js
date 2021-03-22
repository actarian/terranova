export default class LocationService {

	static has(key) {
		const params = new URLSearchParams(window.location.search);
		// console.log('LocationService.has', params);
		return params.has(key);
	}

	static get(key) {
		const params = new URLSearchParams(window.location.search);
		// console.log('LocationService.get', params);
		return params.get(key);
	}

	static set(keyOrValue, value) {
		const params = new URLSearchParams(window.location.search);
		if (typeof keyOrValue === 'string') {
			params.set(keyOrValue, value);
		} else {
			params.set(keyOrValue, '');
		}
		this.pushState(params);
		// console.log('LocationService.set', params, keyOrValue, value);
	}

	static pushState(params, hash) {
		if (window.history && window.history.pushState) {
			const title = document.title;
			const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params.toString() : ''}${hash ? '#' + hash : ''}`;
			const state = params ? params.toString() : (hash ? ({ slug: hash }) : null);
			window.history.pushState(state, title, url);
			console.log('pushState', params, hash, state, title, url);
		}
	}

	static replaceState(params, hash) {
		if (window.history && window.history.replaceState) {
			const title = document.title;
			const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params.toString() : ''}${hash ? '#' + hash : ''}`;
			// console.log(url, hash);
			const state = params ? params.toString() : hash ? { slug: hash } : null;
			window.history.replaceState(state, title, url);
		}
	}

	static deserialize(key) {
		const encoded = this.get('params');
		return this.decode(key, encoded);
	}

	static serialize(keyOrValue, value) {
		const params = this.deserialize();
		const encoded = this.encode(keyOrValue, value, params);
		this.set('params', encoded);
	}

	static decode(key, encoded) {
		let decoded = null;
		if (encoded) {
			const json = window.atob(encoded);
			decoded = JSON.parse(json);
		}
		if (key && decoded) {
			decoded = decoded[key];
		}
		return decoded || null;
	}

	static encode(keyOrValue, value, params) {
		params = params || {};
		let encoded = null;
		if (typeof keyOrValue === 'string') {
			params[keyOrValue] = value;
		} else {
			params = keyOrValue;
		}
		const json = JSON.stringify(params);
		encoded = window.btoa(json);
		return encoded;
	}

	static toSlug(text) {
		return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
	}

	static onPopState(callback) {
		const stopBrowserBack = callback => {
			window.history.pushState(null, '', window.location.href);
			window.onpopstate = () => {
				window.history.pushState(null, '', window.location.href);
				callback();
			};
		};
		return stopBrowserBack(callback);
		const startBrowserBack = () => {
			window.onpopstate = undefined;
			window.history.back();
		};
	}
}
