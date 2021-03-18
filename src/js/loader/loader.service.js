import { BehaviorSubject, combineLatest, of, ReplaySubject } from 'rxjs';
import { map, switchAll } from 'rxjs/operators';

let LOADER_UID = 0;

export default class LoaderService {

	static progress = { value: 0, loaded: 0, total: 0, count: 0, title: '' };

	static items = {};

	// merge(this.statusSubject, this.validatorsSubject)
	static progress$ = new ReplaySubject(1).pipe(
		switchAll(),
		map(() => {
			const items = Object.keys(this.items).map(key => this.items[key]);
			const progress = items.reduce((progress, subject, i, items) => {
				const item = subject.getValue();
				const loaded = item.loaded || 0;
				const total = item.total || 1;
				const value = loaded / total;
				progress.value += value;
				progress.loaded += loaded;
				progress.total += total;
				return progress;
			}, { value: 0, loaded: 0, total: 0 });
			progress.count = items.length;
			if (items.length) {
				progress.value /= progress.count;
			}
			progress.title = `${Math.round(progress.value * 100)}%`;
			this.progress = progress;
			return progress;
		}),
	);

	static switchLoaders() {
		const items = Object.keys(this.items).map(key => this.items[key]);
		const items$ = items.length ? combineLatest(items) : of(items);
		this.progress$.next(items$);
	}

	static getRef() {
		const ref = ++LOADER_UID;
		this.items[ref] = new BehaviorSubject({ loaded: 0, total: 1 });
		this.switchLoaders();
		return ref;
	}

	static setProgress(ref, loaded, total = 1) {
		const item = this.items[ref];
		if (item) {
			item.next({ loaded, total });
		}
		if (loaded >= total) {
			setTimeout(() => {
				delete this.items[ref];
				this.switchLoaders();
			}, 300);
		}
		this.switchLoaders();
	}

}
