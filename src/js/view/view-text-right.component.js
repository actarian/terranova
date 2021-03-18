import { Component } from 'rxcomp';

export default class ViewTextRightComponent extends Component {

	onInit() {
		console.log('ViewTextRightComponent');
	}

}

ViewTextRightComponent.meta = {
	selector: '[view-text-right]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background" *if="item.image">
			<img loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<!--
		<div class="circle" [class]="{ dimmed: item.image }">
			<img src="img/circle.png" />
		</div>
		-->
		<div class="container-fluid" [class]="{ 'negative': item.image != null }" >
			<div class="row">
				<div class="col-md-6">
					<ul class="listing--values" *if="item.list && item.list.length">
						<li class="listing__item" *for="let listItem of item.list"><span [innerHTML]="listItem.title"></span></li>
					</ul>
				</div>
				<div class="col-md-6">
					<div class="title" [innerHTML]="item.title"></div>
					<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
					<div class="description" *if="item.description" [innerHTML]="item.description"></div>
				</div>
			</div>
		</div>
	`
};
