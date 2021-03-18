import { Component } from 'rxcomp';

export default class ViewTextCenterComponent extends Component {

	onInit() {
		console.log('ViewTextCenterComponent');
	}

}

ViewTextCenterComponent.meta = {
	selector: '[view-text-center]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background" *if="item.image">
			<img loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<div class="circle" *if="!item.image">
			<img src="img/circle.png" />
		</div>
		<div class="container-fluid" [class]="{ 'negative': item.image != null }" >
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	`
};
