import { getContext } from 'rxcomp';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import SliderComponent from './slider.component';

export default class SliderMainComponent extends SliderComponent {

	get current() { return super.getCurrent(); }
	set current(current) { this.setCurrent(current); }

	get wrapperStyle() {
		return { 'transform': 'translate3d(' + -this.slideWidth * this.current + 'px, 0, 0)' };
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

	navTo(current) {
		super.navTo(current);
	}
}

SliderMainComponent.meta = {
	selector: '[slider-main]',
	inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical'],
	outputs: ['change', 'tween', 'init'],
};
