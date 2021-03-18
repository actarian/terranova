import { getContext } from 'rxcomp';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

	navTo(current, immediate) {
		super.navTo(current, immediate);
	}
}

SliderVerticalComponent.meta = {
	selector: '[slider-vertical]',
	inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical', 'disabled'],
	outputs: ['init', 'change'],
};
