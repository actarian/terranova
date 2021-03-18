import { Component } from 'rxcomp';

export default class ViewTextTwoColsComponent extends Component {

	onInit() {
		console.log('ViewTextTwoColsComponent');
	}

}

ViewTextTwoColsComponent.meta = {
	selector: '[view-text-two-cols]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background" *if="item.image">
			<img loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<div class="circle" *if="!item.image">
			<img src="img/circle.png" />
		</div>
		<div class="container-fluid" [class]="{ 'negative': item.image != null }" >
			<div class="row">
				<div class="col-md-6">
					<div class="title" [innerHTML]="item.title"></div>
					<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
				</div>
				<div class="col-md-6">
					<div class="description" *if="item.description" [innerHTML]="item.description"></div>
				</div>
			</div>
		</div>
	`
};
