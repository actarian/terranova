import { Component, getContext } from 'rxcomp';

export default class ViewTextCenterComponent extends Component {

	onInit() {
		// console.log('ViewTextCenterComponent');
		// [class]="{ 'negative': item.image != null }"
		if (this.item.image) {
			const { node } = getContext(this);
			node.querySelector('.container-fluid').classList.add('negative');
		}
	}

}

ViewTextCenterComponent.meta = {
	selector: '[view-text-center]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background" *if="item.image">
			<img data-loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<!--
		<div class="circle" *if="!item.image">
			<img src="img/circle.png" />
		</div>
		-->
		<div class="container-fluid" appear-stagger>
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="logo" *if="item.logo"><img [src]="item.logo" /></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	`
};
