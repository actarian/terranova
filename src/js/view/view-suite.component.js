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
	<!--
		<div class="container-fluid" appear-stagger>
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
			<div class="description" *if="item.description" [innerHTML]="item.description"></div>
		</div>
	-->
		<div class="suite" [innerHTML]="item.suite.title"></div>
		<div class="listing--software" appear-stagger>
			<div class="listing__item" [class]="{ left: software.x < 0.5, right: software.x > 0.5 }" [style]="{ left: software.x * 100 + '%', top: software.y * 100 + '%' }" *for="let software of item.suite.items">
				<div class="title" [style]="{ '--color': software.color }" [innerHTML]="software.title"></div>
				<div class="abstract" [innerHTML]="software.abstract" *if="software.abstract"></div>
				<!-- <img [src]="software.logo" [title]="software.title" /> -->
			</div>
		</div>
	`
};
