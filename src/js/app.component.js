import { Component, getContext } from 'rxcomp';
import { from, fromEvent } from 'rxjs';
import { first, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { Templates } from './api/api.data';
// import { DATA } from './api/api.data';
import { ApiService } from './api/api.service';
import KeyboardService from './keyboard/keyboard.service';
import { RouterService } from './router/router.service';
import SliderComponent from './slider/slider.component';

export default class AppComponent extends Component {

	get isSuite() {
		return this.isSuite_;
	}
	set isSuite(isSuite) {
		if (this.isSuite_ !== isSuite) {
			this.isSuite_ = isSuite;
			this.pushChanges();
		}
	}

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
		this.router = null;
		ApiService.data$().pipe(
			first(),
		).subscribe(data => {
			this.slides = data;
			this.items = this.collectItems(this.slides);
			const html = document.querySelector('html');
			html.classList.add('resizing');
			setTimeout(() => {
				html.classList.remove('resizing');
			});
			// console.log(this.slides);
			const router = this.router = RouterService.use$(data);
			this.setRoute(router.getState());
			this.route$().pipe(
				takeUntil(this.unsubscribe$)
			).subscribe();
			/*
			return from(router).pipe(
				tap(({ route, previousRoute }) => {
					console.log('route', route, 'previousRoute', previousRoute);
				}),
				takeUntil(this.unsubscribe$),
			).subscribe(e => {
				console.log(e);
			});
			*/
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
		/*
		LocationService.onPopState((event) => {
			console.log('onPopState', event);
		});
		*/
		// console.log('AppComponent.onInit');
	}

	setRoute(route) {
		const item = this.items.find(item => route.path === `/${item.path}`);
		if (item) {
			document.title = item.documentTitle;
			this.isSuite = item.template === Templates.Suite;
		}
	}

	route$() {
		return from(RouterService.router).pipe(
			tap(({ route, previousRoute }) => this.setRoute(route)),
		);
	}

	updateLocation() {
		let path = '', url = '', title = '', isSuite = false;
		const currentItem = this.currentItem;
		if (currentItem) {
			path = currentItem.path;
			// url = currentItem.slug;
			// title = currentItem.documentTitle;
			// isSuite = currentItem.template === Templates.Suite;
		} else {
			const currentChapter = this.currentChapter;
			if (currentChapter) {
				path = currentChapter.path;
				// url = currentChapter.slug;
				// title = currentChapter.documentTitle;
			}
		}
		// document.title = title;
		// this.isSuite = isSuite;
		// const currentChapter = this.currentChapter;
		// console.log('updateLocation', currentItem.slug, path, currentChapter.slug, currentChapter.current);
		if (this.router) {
			this.router.navigate(path);
			// console.log('router.navigate', path);
		}
		// LocationService.replaceState(null, url);
		// console.log('AppComponent.updateLocation', title, path, url);
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
		this.slider = slider;
		this.chapterIndex = slider.current;
		this.itemIndex = slider.items[slider.current].current;
		// console.log('AppComponent.onSliderInit', slider.items[slider.current].current);
	}

	onSliderChange(index) {
		// console.log('AppComponent.onSliderChange', index);
		this.chapterIndex = index;
		const chapter = this.slides[index];
		if (chapter) {
			this.itemIndex = chapter.current;
		}
		this.showMenu = false;
		this.updateLocation();
		this.pushChanges();
	}

	onSubSliderChange(index) {
		// console.log('AppComponent.onSubSliderChange', index);
		this.itemIndex = index;
		this.showMenu = false;
		this.updateLocation();
		this.pushChanges();
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

	onPreviousChapter() {
		if (this.slider.hasPrev()) {
			this.slider.navTo(this.slider.current - 1);
		}
	}

	onNextChapter() {
		if (this.slider.hasNext()) {
			this.slider.navTo(this.slider.current + 1);
		}
	}

	onNavToChapter(index) {
		this.slider.navTo(index);
	}

	get previousChapter() {
		if (this.slider && this.slider.hasPrev()) {
			return this.slides[this.slider.current - 1];
		}
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

	get currentItem() {
		const currentChapter = this.currentChapter;
		return (currentChapter && currentChapter.items && currentChapter.current != null) ? currentChapter.items[currentChapter.current] : null;
	}
}

AppComponent.meta = {
	selector: '[app-component]',
};
