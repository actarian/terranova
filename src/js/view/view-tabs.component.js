import { Component } from 'rxcomp';
import { from } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { RouterService } from '../router/router.service';

export default class ViewTabsComponent extends Component {

	onInit() {
		const state = RouterService.router.getState();
		// console.log('ViewTabsComponent.onInit', state);
		this.setRoute(state);
		this.route$().pipe(
			takeUntil(this.unsubscribe$)
		).subscribe();
	}

	setRoute(route) {
		const index = this.item.items.reduce((p, c, i) => {
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
		this.index = index !== -1 ? index : 0;
		this.slide = this.item.items[this.index];
	}

	route$() {
		return from(RouterService.router).pipe(
			tap(({ route, previousRoute }) => this.setRoute(route)),
		);
	}

	setSlide(index) {
		this.index = index;
		this.slide = this.item.items[index];
		RouterService.router.navigate(this.slide.path);
		this.pushChanges();
	}

	onTouch(event) {
		event.preventDefault();
		event.stopPropagation();
	}

}

ViewTabsComponent.meta = {
	selector: '[view-tabs]',
	inputs: ['item'],
	template: /* html */ `
		<ul class="nav--tabs">
			<li *for="let nav of item.items; let navIndex = index;" (mousedown)="onTouch($event)" (touchstart)="onTouch($event)" (click)="setSlide(navIndex)"><span [innerHTML]="nav.name"></span></li>
		</ul>
		<div class="view view--clients" view-clients [item]="slide" *if="slide && !slide.hidden && slide.template == 'clients'"></div>
		<div class="view view--group" view-group [item]="slide" *if="slide && !slide.hidden && slide.template == 'group'"></div>
		<div class="view view--suite" view-suite [item]="slide" *if="slide && !slide.hidden && slide.template == 'suite'"></div>
		<div class="view view--text-center" view-text-center [item]="slide" *if="slide && !slide.hidden && slide.template == 'textCenter'"></div>
		<div class="view view--text-graph" view-text-graph [item]="slide" *if="slide && !slide.hidden && slide.template == 'textGraph'"></div>
		<div class="view view--text-left" view-text-left [item]="slide" *if="slide && !slide.hidden && slide.template == 'textLeft'"></div>
		<div class="view view--text-map" view-text-map [item]="slide" *if="slide && !slide.hidden && slide.template == 'textMap'"></div>
		<div class="view view--text-right" view-text-right [item]="slide" *if="slide && !slide.hidden && slide.template == 'textRight'"></div>
		<div class="view view--text-two-cols" view-text-two-cols [item]="slide" *if="slide && !slide.hidden && slide.template == 'textTwoCols'"></div>
	`
};
