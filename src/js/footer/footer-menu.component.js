import { Component, getContext } from 'rxcomp';
import { fromEvent } from 'rxjs';
import { filter, takeUntil, tap, throttleTime } from 'rxjs/operators';
import KeyboardService from '../keyboard/keyboard.service';

export default class FooterMenuComponent extends Component {

	onInit() {
		// console.log('FooterMenuComponent.onInit');
		const { node } = getContext(this);
		node.focus();

		this.current = 0;
		this.slides.forEach(chapter => {
			chapter.current = 0;
		});
		KeyboardService.keys$().pipe(
			filter(_ => this.active),
			takeUntil(this.unsubscribe$),
		).subscribe(keys => {
			if (keys.ArrowRight) {
				this.nextChapter();
			} else if (keys.ArrowLeft) {
				this.previousChapter();
			} else if (keys.ArrowDown) {
				this.nextItem();
			} else if (keys.ArrowUp) {
				this.previousItem();
			} else if (keys.Enter) {
				const currentChapter = this.slides[this.current];
				const currentItem = currentChapter.items ? currentChapter.items[currentChapter.current] : currentChapter;
				this.onSelect(currentItem);
			}
			if (keys.originalEvent) {
				keys.originalEvent.preventDefault();
				keys.originalEvent.stopPropagation();
			}
			// console.log(this.current);
		});
		return this.wheel$(node).pipe(
			filter(_ => this.active),
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	onChanges() {
		this.current = this.chapterIndex;
		const chapter = this.slides[this.current];
		if (chapter) {
			chapter.current = this.itemIndex;
			console.log('FooterMenuComponent.onChanges', this.current, chapter.current);
		}
	}

	wheel$(target) {
		return fromEvent(target, 'wheel', { capture: false, passive: false }).pipe(
			throttleTime(200),
			tap((event) => {
				if (event.deltaY > 0) {
					this.nextItem() || this.nextChapter();
				} else {
					this.previousItem() || this.previousChapter();
				}
			}),
		);
	}

	nextChapter() {
		if (this.current < this.slides.length - 1) {
			this.current++;
			this.pushChanges();
		}
	}

	previousChapter() {
		if (this.current > 0) {
			this.current--;
			this.pushChanges();
		}
	}

	nextItem() {
		const chapter = this.slides[this.current];
		if (chapter.items && chapter.current < chapter.items.length - 1) {
			chapter.current++;
			this.pushChanges();
			return true;
		} else {
			return false;
		}
	}

	previousItem() {
		const chapter = this.slides[this.current];
		if (chapter.items && chapter.current > 0) {
			chapter.current--;
			this.pushChanges();
			return true;
		} else {
			return false;
		}
	}

	onSelect(item) {
		let chapterIndex = 0, index = 0, chapter;
		this.slides.forEach((slide, i) => {
			if (slide === item) {
				chapterIndex = i;
				chapter = slide;
			}
			if (slide.items) {
				slide.items.forEach((subItem, subIndex) => {
					if (subItem === item) {
						chapterIndex = i;
						index = subIndex;
						chapter = slide;
					}
				});
			}
		});
		if (this.current !== chapterIndex || chapter.current !== index) {
			this.current = chapterIndex;
			chapter.current = index;
			this.pushChanges();
			setTimeout(() => {
				// console.log('FooterMenuComponent.onSelect', item, chapterIndex, index);
				this.nav.next({ item, chapterIndex, index });
			}, 500);
		} else {
			// console.log('FooterMenuComponent.onSelect', item, chapterIndex, index);
			this.nav.next({ item, chapterIndex, index });
		}
	}

	navTo(index) {
		this.current = index;
		this.pushChanges();
	}
}

FooterMenuComponent.meta = {
	selector: '[footer-menu]',
	inputs: ['slides', 'active', 'chapterIndex', 'itemIndex'],
	outputs: ['nav'],
	template: /* html */ `
		<div class="circle">
			<img src="img/circle.png" />
		</div>
		<div class="logo">
			<img src="img/logo-lg.png" />
		</div>
		<div class="listing--menu" [style]="{ transform: 'translateX(' + -76 * current + 'rem)' }">
			<div class="listing__item" *for="let chapter of slides; let c = index;">
				<div class="listing--submenu" [style]="{ transform: 'translateY(' + -25 * chapter.current + 'rem)' }" *if="chapter.items && chapter.items.length">
					<div class="listing__item" *for="let item of chapter.items; let i = index;">
						<div class="card--menu" [class]="{ active: c === current && i === chapter.current }" (click)="onSelect(item)">
							<span [innerHTML]="item.name" ></span>
						</div>
					</div>
				</div>
				<div class="card--menu" [class]="{ active: c === current }" (click)="onSelect(chapter)" *if="!chapter.items || !chapter.items.length">
					<span [innerHTML]="chapter.name"></span>
				</div>
			</div>
		</div>
		<div class="slider__bullets">
			<span class="slider__bullet" [class]="{ active: index === current }" *for="let item of slides; let index = index;" (click)="navTo(index)"></span>
		</div>
	`
};
