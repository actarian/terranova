import { getContext } from 'rxcomp';
import { from, fromEvent } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { RouterService } from '../router/router.service';
import SliderComponent from './slider.component';

export default class SliderVerticalComponent extends SliderComponent {

	get current() { return super.getCurrent(); }
	set current(current) { this.setCurrent(current); }

	get wrapperStyle() {
		const style = { 'transform': `translate3d(0, ${-this.slideHeight * this.current}px, 0)` };
		if (this.immediate) {
			style.transition = 'none';
		}
		// console.log('SliderVerticalComponent', style.transition);
		return style;
	}

	get innerStyle() {
		return { 'height': this.slideHeight * this.items.length + 'px' };
	}

	get slideHeight() {
		const { node } = getContext(this);
		// const slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));
		const slideHeight = node.offsetHeight; // (window.innerHeight < 768 ? node.offsetHeight: (node.offsetHeight / 12 * 10)) + 40;
		return slideHeight;
	}

	onInit() {
		super.onInit();
		// console.log('SliderVerticalComponent.onInit');
		this.resize$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe(() => this.pushChanges());
		this.route$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	route$() {
		const state = RouterService.router.getState();
		return from(RouterService.router).pipe(
			startWith({ route: state }),
			tap(({ route, previousRoute }) => {
				const index = this.items.reduce((p, c, i) => {
					if (p === -1) {
						if (route.path.indexOf(c.path) === 1) {
							return i;
						} else {
							return p;
						}
					} else {
						return p;
					}
				}, -1);
				if (index !== -1) {
					this.current = index;
				}
				// console.log('SliderVerticalComponent.route$', index, route.path);
			}),
		);
	}

	resolveInitialIndex() {
		const state = RouterService.router.getState();
		// console.log('SliderVerticalComponent.resolveInitialIndex', state);
		const index = this.items.reduce((p, c, i) => {
			if (p === -1) {
				if (state.path.indexOf(c.path) === 1) {
					return i;
				} else {
					return p;
				}
			} else {
				return p;
			}
		}, -1);
		let initialIndex = 0;
		if (index !== -1) {
			initialIndex = index;
		}
		return initialIndex;
	}

	resolveInitialIndex_() {
		let initialIndex = 0;
		const hash = window.location.hash;
		if (hash) {
			const index = this.items.reduce((p, c, i) => {
				if (p === -1) {
					if (hash.indexOf(c.slug) === 1) {
						return i;
					} else {
						return p;
					}
				} else {
					return p;
				}
			}, -1);
			if (index !== -1) {
				initialIndex = index;
			}
			// console.log('SliderVerticalComponent.parseLocation.index', hash, initialIndex);
		}
		return initialIndex;
	}

	resize$() {
		return fromEvent(window, 'resize');
	}

	onContentOver() {
		const { node } = getContext(this);
		node.classList.add('content-over');
	}

	onContentOut() {
		const { node } = getContext(this);
		node.classList.remove('content-over');
	}

	navTo(current, immediate) {
		super.navTo(current, immediate);
	}
}

SliderVerticalComponent.meta = {
	selector: '[slider-vertical]',
	inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical', 'disabled'],
	outputs: ['init', 'change'],
};
