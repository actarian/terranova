import { Component } from 'rxcomp';

export default class ViewTabsComponent extends Component {

	onInit() {
		console.log('ViewTabsComponent');
		this.index = 0;
		this.slide = this.item.items[0];
	}

	setSlide(index) {
		this.index = index;
		this.slide = this.item.items[index];
		this.pushChanges();
	}

}

ViewTabsComponent.meta = {
	selector: '[view-tabs]',
	inputs: ['item'],
	template: /* html */ `
		<ul class="nav--tabs">
			<li *for="let nav of item.items; let navIndex = index;" (click)="setSlide(navIndex)"><span [innerHTML]="nav.name"></span></li>
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
