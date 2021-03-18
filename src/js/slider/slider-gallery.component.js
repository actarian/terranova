import SliderComponent from './slider.component';

export default class SliderGalleryComponent extends SliderComponent {

	get current() { return super.getCurrent(); }
	set current(current) { this.setCurrent(current); }

	get wrapperStyle() {
		return { 'transform': 'translate3d(' + -100 * this.current + '%, 0, 0)' };
	}

	get innerStyle() {
		return { 'width': 100 * this.items.length + '%' };
	}

	onInit() {
		super.onInit();
	}

	navTo(current) {
		super.navTo(current);
	}

	doClose() {
		this.close.next();
	}

	toggleMode() {
		this.mode.next();
	}
}

SliderGalleryComponent.meta = {
	selector: '[slider-gallery]',
	inputs: ['items', 'current', 'autoplay'],
	outputs: ['change', 'tween', 'close', 'mode'],
};
