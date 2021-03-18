import { Directive, getContext } from 'rxcomp';
import { of, Subject } from 'rxjs';
import { distinctUntilChanged, first, switchMap, takeUntil } from 'rxjs/operators';
import ImageService from '../image/image.service';
import IntersectionService from '../intersection/intersection.service';
import LazyCache from './lazy.cache';

export default class LazyDirective extends Directive {

	onInit() {
		const { node } = getContext(this);
		node.classList.add('lazy');
		this.input$ = new Subject().pipe(
			distinctUntilChanged(),
			switchMap(input => {
				const src = LazyCache.get(input);
				if (src) {
					return of(src);
				}
				node.classList.remove('lazyed');
				return this.lazy$(input);
			}),
			takeUntil(this.unsubscribe$)
		);
		this.input$.subscribe(src => {
			LazyCache.set(this.lazy, src);
			node.setAttribute('src', src);
			node.classList.add('lazyed');
		});
	}

	onChanges() {
		this.input$.next(this.lazy);
	}

	lazy$(input) {
		const { node } = getContext(this);
		return IntersectionService.intersection$(node).pipe(
			// first(),
			switchMap(() => ImageService.load$(input, this.size)),
			first(),
			// takeUntil(this.unsubscribe$),
		);
	}

}

LazyDirective.meta = {
	selector: '[lazy],[[lazy]]',
	inputs: ['lazy', 'size']
};
