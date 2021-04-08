import { Component } from 'rxcomp';

export const PinModes = {
	Always: 'always',
	Over: 'over',
}

export default class ViewTextMapComponent extends Component {

	onInit() {
		// console.log('ViewTextMapComponent');
		this.item.pinMode = this.item.pinMode || PinModes.Always;
	}

	/*
	getStyle(pin) {
		return { left: pin.x + '%', top: pin.y + '%' };
	}
	*/
}

ViewTextMapComponent.meta = {
	selector: '[view-text-map]',
	inputs: ['item'],
	template: /* html */ `
		<!--
		<div class="circle">
			<img src="img/circle.png" />
		</div>
		-->
		<div class="background">
			<div class="map" [class]="{ 'map--over': item.pinMode === 'over', 'map--always': item.pinMode === 'always' }" appear-stagger>
				<img data-loading="lazy" [src]="item.image" ondragstart="return false;" />
				<div class="pin" [style]="{ left: pin.x + '%', top: pin.y + '%' }" *for="let pin of item.pins;">
					<div class="title" *if="pin.title && !pin.logo" [innerHTML]="pin.title"></div>
					<div class="abstract" *if="pin.abstract && !pin.logo" [innerHTML]="pin.abstract"></div>
					<div class="logo" *if="pin.logo"><img [src]="pin.logo" /></div>
				</div>
				<!--
				<div class="pin" [style]="{ left: pin.x + '%', top: pin.y + '%' }" *for="let pin of item.pins;">
					<div class="title" *if="pin.title" [innerHTML]="pin.title"></div>
					<div class="abstract" *if="pin.abstract" [innerHTML]="pin.abstract"></div>
				</div>
				-->
			</div>
		</div>
		<div class="container-fluid" appear-stagger>
			<div class="logo" *if="item.logo"><img [src]="item.logo" /></div>
			<div class="title" *if="item.title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	`
};
