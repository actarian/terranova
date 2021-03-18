import { Component } from 'rxcomp';

export default class ViewTextMapComponent extends Component {

	onInit() {
		console.log('ViewTextMapComponent');
	}

}

ViewTextMapComponent.meta = {
	selector: '[view-text-map]',
	inputs: ['item'],
	template: /* html */ `
		<div class="circle">
			<img src="img/circle.png" />
		</div>
		<div class="background">
			<img loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<div class="container-fluid">
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	`
};
