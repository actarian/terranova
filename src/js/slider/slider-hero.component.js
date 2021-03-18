import { getContext } from 'rxcomp';
import { animationFrameScheduler, combineLatest, fromEvent, interval } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import SliderComponent from './slider.component';

export default class SliderHeroComponent extends SliderComponent {

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
		this.pagination$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
		this.click$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	set direction(direction) {
		if (this.direction_ !== direction) {
			this.direction_ = direction;
			const { node } = getContext(this);
			const pagination = node.querySelector('.slider__pagination');
			if (direction == 1) {
				pagination.classList.remove('prev');
				pagination.classList.add('next');
			} else {
				pagination.classList.remove('next');
				pagination.classList.add('prev');
			}
		}
	}

	raf$() {
		return interval(0, animationFrameScheduler);
	}

	mouse$() {
		const event = { x:0, y: 0};
		return fromEvent(window, 'mousemove').pipe(
			map(mouseEvent => {
				event.x = mouseEvent.clientX;
				event.y = mouseEvent.clientY;
				return event;
			}),
		);
	}

	pagination$() {
		const { node } = getContext(this);
		const position = { x:0, y: 0};
		const pagination = node.querySelector('.slider__pagination');
		return combineLatest([this.mouse$(), this.raf$()]).pipe(
			tap(datas => {
				const mouse = datas[0];
				position.x += (mouse.x - position.x) / 20;
				position.y += (mouse.y - position.y) / 20;
				// const rect = node.getBoundingClientRect();
				this.direction = mouse.x > window.innerWidth / 2 ? 1 : -1;
				pagination.style.transform = `translateX(${position.x}px) translateY(${position.y}px)`;
			}),
		);
	}

	click$() {
		const { node } = getContext(this);
		return fromEvent(node, 'click').pipe(
			map(event => {
				if (event.clientX > window.innerWidth / 2) {
					// if (this.hasNext()) {
						this.navTo(this.current + 1);
					// }
				} else {
					// if (this.hasPrev()) {
						this.navTo(this.current - 1);
					// }
				}
			}),
		);
	}

	onContentOver() {
		const { node } = getContext(this);
		node.classList.add('content-over');
	}

	onContentOut() {
		const { node } = getContext(this);
		node.classList.remove('content-over');
	}
}

SliderHeroComponent.meta = {
	selector: '[slider-hero]',
	inputs: ['items', 'current', 'autoplay'],
	outputs: ['change', 'tween'],
};
