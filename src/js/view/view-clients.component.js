import { Component } from 'rxcomp';

export default class ViewClientsComponent extends Component {

	onInit() {
		// console.log('ViewClientsComponent');
	}

}

ViewClientsComponent.meta = {
	selector: '[view-clients]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background">
			<img data-loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<!--
		<div class="container">
			<div class="title" [innerHTML]="item.title"></div>
			<div class="abstract" [innerHTML]="item.abstract"></div>
		</div>
		-->
		<div class="listing--clients" appear-stagger>
			<div class="listing__item" *for="let client of item.clients">
				<img [src]="client.logo" [title]="client.title" />
			</div>
		</div>
	`
};
