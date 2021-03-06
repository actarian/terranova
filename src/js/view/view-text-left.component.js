import { Component } from 'rxcomp';

export default class ViewTextLeftComponent extends Component {

	onInit() {
		// console.log('ViewTextLeftComponent');
	}

}

ViewTextLeftComponent.meta = {
	selector: '[view-text-left]',
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
		<div class="container-fluid" [class]="{ 'negative': item.image != null }" >
			<div class="row">
				<div class="col-md-6" appear-stagger>
					<div class="title" [innerHTML]="item.title"></div>
					<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
					<div class="description" *if="item.description" [innerHTML]="item.description"></div>
				</div>
				<div class="col-md-6">
					<div class="logo" *if="item.logo"><img [src]="item.logo" /></div>
					<ul class="listing--values" appear-stagger *if="item.list && item.list.length">
						<li class="listing__item" *for="let listItem of item.list"><span [innerHTML]="listItem.title"></span></li>
					</ul>
				</div>
			</div>
		</div>
	`
};
