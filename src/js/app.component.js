import { Component, getContext } from 'rxcomp';
import { fromEvent } from 'rxjs';
import { first, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { Templates } from './api/api.data';
// import { DATA } from './api/api.data';
import { ApiService } from './api/api.service';
import KeyboardService from './keyboard/keyboard.service';
import SliderComponent from './slider/slider.component';

export default class AppComponent extends Component {

	get showMenu() {
		return this.showMenu_;
	}
	set showMenu(showMenu) {
		this.showMenu_ = showMenu;
		SliderComponent.disabled = showMenu;
	}

	onInit() {
		const { node } = getContext(this);
		node.classList.remove('hidden');

		this.slider = null;
		this.subSlider = null;
		this.chapterIndex = 0;
		this.itemIndex = 0;
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
		KeyboardService.keys$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe(keys => {
			if (keys.Space) {
				this.onToggleMenu();
			}
		});
		this.resize$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	resize$() {
		const html = document.querySelector('html');
		let t;
		return fromEvent(window, 'resize').pipe(
			throttleTime(200),
			tap(_ => {
				html.classList.add('resizing');
				if (t) {
					clearTimeout(t);
				}
				t = setTimeout(() => {
					html.classList.remove('resizing');
				}, 200);
			}),
		)
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
		// console.log('AppComponent.onSliderInit', slider);
		this.slider = slider;
	}

	onSliderChange(index) {
		// console.log('AppComponent.onSliderChange', index);
		this.chapterIndex = index;
		const chapter = this.slides[index];
		if (chapter) {
			this.itemIndex = chapter.current;
		}
		this.showMenu = false;
		this.pushChanges();
	}

	onSubSliderChange(index) {
		// console.log('AppComponent.onSubSliderChange', index);
		this.itemIndex = index;
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

	onToggleMenu() {
		this.showMenu = !this.showMenu;
		this.pushChanges();
	}

	onMenuNav(nav) {
		// console.log('AppComponent.onMenuNav', nav);
		this.slider.onMenuNav(nav);
		this.showMenu = false;
		this.pushChanges();
		// this.slider.navTo(nav.chapterIndex);
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
