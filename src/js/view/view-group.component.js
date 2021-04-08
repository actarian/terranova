import { Component } from 'rxcomp';

export default class ViewGroupComponent extends Component {

	onInit() {
		this.current = 0;
	}

	onSliderChange(index) {
		// console.log('ViewGroupComponent.onSliderChange', index);
		this.current = index;
		this.pushChanges();
		this.change.next(index);
	}

	onSliderInit(slider) {
		this.current = slider.state.current;
		this.item.current = this.current;
		// const currentItem = this.item.items[this.current];
		// console.log('ViewGroupComponent.onSliderInit', this.current, currentItem);
		this.init.next(slider);
	}

	get isNegative() {
		const currentItem = this.item.items[this.current];
		return currentItem.image != null && currentItem.template !== 'textMap';
	}
}

ViewGroupComponent.meta = {
	selector: '[view-group]',
	inputs: ['item'],
	outputs: ['init', 'change'],
	template: /* html */ `
		<div class="slider__container slider--vertical" [class]="{ 'negative': isNegative }" (init)="onSliderInit($event)" (change)="onSliderChange($event)" slider-vertical [vertical]="true" [items]="item.items" *if="item.template == 'group'">
			<div class="slider__wrapper" [style]="wrapperStyle">
				<div class="slider__inner" [style]="innerStyle">
					<div class="slider__slide" *for="let slide of items; let index = index;">
						<div class="view view--clients" view-clients [item]="slide" *if="!slide.hidden && slide.template == 'clients'"></div>
						<div class="view view--group" view-group [item]="slide" *if="!slide.hidden && slide.template == 'group'"></div>
						<div class="view view--suite" view-suite [item]="slide" *if="!slide.hidden && slide.template == 'suite'"></div>
						<div class="view view--tabs" view-tabs [item]="slide" *if="!slide.hidden && slide.template == 'tabs'"></div>
						<div class="view view--text-center" view-text-center [item]="slide" *if="!slide.hidden && slide.template == 'textCenter'"></div>
						<div class="view view--text-graph" view-text-graph [item]="slide" *if="!slide.hidden && slide.template == 'textGraph'"></div>
						<div class="view view--text-left" view-text-left [item]="slide" *if="!slide.hidden && slide.template == 'textLeft'"></div>
						<div class="view view--text-map" view-text-map [item]="slide" *if="!slide.hidden && slide.template == 'textMap'"></div>
						<div class="view view--text-right" view-text-right [item]="slide" *if="!slide.hidden && slide.template == 'textRight'"></div>
						<div class="view view--text-two-cols" view-text-two-cols [item]="slide" *if="!slide.hidden && slide.template == 'textTwoCols'"></div>
					</div>
				</div>
			</div>
			<!--
			<div class="slider__bullets">
				<span class="slider__bullet" [class]="{ active: index === current }" *for="let slide of items; let index = index;" (click)="navTo(index)"></span>
			</div>
			-->
		</div>
	`
};
