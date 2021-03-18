import { Component } from 'rxcomp';

export default class ViewSuiteComponent extends Component {

	onInit() {
		// console.log('ViewSuiteComponent');
		// [class]="{ 'negative': item.image != null }"
		if (this.item.image) {
			const { node } = getContext(this);
			node.querySelector('.container-fluid').classList.add('negative');
		}
	}

}

ViewSuiteComponent.meta = {
	selector: '[view-suite]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background">
			<img data-loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<div class="container-fluid" appear-stagger>
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	`
};
