import { getContext } from 'rxcomp';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

	onInit() {
		super.onInit();
		this.resize$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe(() => this.pushChanges());
		this.subSlider = null;
	}

	resolveInitialIndex() {
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
			console.log('SliderMainComponent.parseLocation.index', hash, initialIndex);
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
		// console.log('SliderMainComponent.onSubSliderInit', subSlider);
		item.subSlider = subSlider;
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
