import { getContext } from 'rxcomp';
import { from, fromEvent } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { RouterService } from '../router/router.service';
import SliderComponent from './slider.component';

export default class SliderMainComponent extends SliderComponent {

	get current() { return super.getCurrent(); }
	set current(current) { this.setCurrent(current); }

	get wrapperStyle() {
		const style = { 'transform': 'translate3d(' + -this.slideWidth * this.current + 'px, 0, 0)' };
		if (this.immediate) {
			style.transition = 'none';
		}
		// console.log('SliderMainComponent', style.transition);
		return style;
	}

	get innerStyle() {
		return { 'width': this.slideWidth * this.items.length + 'px' };
	}

	get slideWidth() {
		const { node } = getContext(this);
		// const slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));
		const slideWidth = node.offsetWidth; // (window.innerWidth < 768 ? node.offsetWidth: (node.offsetWidth / 12 * 10)) + 40;
		return slideWidth;
	}

	get isNegative() {
		const activeIndex = this.items.reduce((p, c, i) => {
			return c.activeIndex === i ? i : p;
		}, -1);
		const currentChapter = this.items[activeIndex];
		// console.log('currentChapter', currentChapter, currentChapter.current, this.current, activeIndex);
		const currentItem = currentChapter.items ? currentChapter.items[currentChapter.current] : null;
		// console.log('SliderMainComponent.isNegative.currentItem', currentItem);
		return currentItem.template === 'tabs' || (currentItem.image != null && currentItem.template !== 'textMap');
		// return currentItem && currentItem.image != null && currentItem.template !== 'textMap';
	}

	onInit() {
		super.onInit();
		// console.log('SliderMainComponent.onInit');
		this.subSlider = null;
		this.resize$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe(() => this.pushChanges());
		this.route$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	onChanges() {
		this.items.forEach(item => item.activeIndex = this.current);
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
				// console.log('SliderMainComponent.route$', index, route.path);
			}),
		);
	}

	resolveInitialIndex() {
		const state = RouterService.router.getState();
		// console.log('SliderMainComponent.resolveInitialIndex', state);
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
			// console.log('SliderMainComponent.parseLocation.index', hash, initialIndex);
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

	onSubSliderInit(subSlider, item) {
		/*
		item.subSlider = subSlider;
		item.current = subSlider.state.current;
		*/
		this.items.forEach(item => {
			if (item.items === subSlider.items) {
				item.subSlider = subSlider;
				item.current = subSlider.state.current;
				// console.log('SliderMainComponent.onSubSliderInit', item.current, subSlider.state.current);
			}
		});
		/*
		const currentChapter = this.items[this.state.current];
		if (currentChapter.items === subSlider.items) {
			currentChapter.current = subSlider.state.current;
			// console.log('SliderMainComponent.onSubSliderInit', currentChapter, currentChapter.current, subSlider.state.current);
		}
		*/
		this.init.next(this);
		// this.pushChanges();
	}

	onSubSliderChange(index) {
		// console.log('SliderMainComponent.onSubSliderChange', index);
		this.subChange.next(index);
		// this.pushChanges();
	}

	onMenuNav(nav) {
		// console.log('AppComponent.onMenuNav', nav);
		super.navTo(nav.chapterIndex, true);
		const item = this.items[nav.chapterIndex];
		if (item.subSlider) {
			item.subSlider.navTo(nav.index, true);
		}
	}
}

SliderMainComponent.meta = {
	selector: '[slider-main]',
	inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical'],
	outputs: ['init', 'change', 'subChange'],
};
