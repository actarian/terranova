export default class LazyCache {
	static get cache() {
		if (!this.cache_) {
			this.cache_ = {};
		}
		return this.cache_;
	}

	static get(src) {
		return this.cache[src];
	}

	static set(src, blob) {
		this.cache[src] = blob;
		const keys = Object.keys(this.cache);
		if (keys.length > 100) {
			this.remove(keys[0]);
		}
	}

	static remove(src) {
		delete this.cache[src];
	}
}
