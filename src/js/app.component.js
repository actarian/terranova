import { Component, getContext } from 'rxcomp';
import { first } from 'rxjs/operators';
import { Templates } from './api/api.data';
// import { DATA } from './api/api.data';
import { ApiService } from './api/api.service';
import SliderComponent from './slider/slider.component';

export default class AppComponent extends Component {

	onInit() {
		const { node } = getContext(this);
		node.classList.remove('hidden');

		this.showMenu = false;
		this.templates = Templates;

		// this.slides = DATA;
		// this.items = this.collectItems(this.slides);

		this.slides = [];
		this.items = [];

		ApiService.data$().pipe(
			first(),
		).subscribe(data => {
			this.slides = data;
			this.items = this.collectItems(this.slides);
		});

		/*
		this.slides = new Array(4).fill(0).map((_, i) => {
			return {
				id: 1,
				template: Templates.Welcome,
				category: 'Stand - Case study',
				title: 'Keraglass industries Vitrum',
				cta: 'Guarda il case study',
				image: `https://source.unsplash.com/random/1920x1080?i=${i}`
			}
		});
		*/
	}

	collectItems(slides, items = []) {
		slides.forEach(slide => {
			items.push(slide);
			if (slide.items) {
				items = this.collectItems(slide.items, items);
			}
		});
		return items;
	}

	onSliderInit(slider) {
		console.log('AppComponent.onSliderInit', slider);
		this.slider = slider;
	}

	onSliderChange(index) {
		console.log('AppComponent.onSliderChange', index);
		this.showMenu = false;
		this.pushChanges();
	}

	onNextChapter() {
		if (this.slider.hasNext()) {
			this.slider.navTo(this.slider.current + 1);
		}
	}

	onNavToChapter(index) {
		this.slider.navTo(index);
	}

	onMenuNav(nav) {
		console.log('AppComponent.onMenuNav', nav);
		this.slider.navTo(nav.chapterIndex);
	}

	onToggleMenu() {
		this.showMenu = !this.showMenu;
		SliderComponent.disabled = this.showMenu;
		this.pushChanges();
	}

	get currentChapter() {
		if (this.slider) {
			return this.slides[this.slider.current];
		}
	}

	get nextChapter() {
		if (this.slider && this.slider.hasNext()) {
			return this.slides[this.slider.current + 1];
		}
	}
}

AppComponent.meta = {
	selector: '[app-component]',
};
