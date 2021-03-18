import { Component } from 'rxcomp';

export default class ViewWelcomeComponent extends Component {

	onInit() {
		console.log('ViewWelcomeComponent');
	}

}

ViewWelcomeComponent.meta = {
	selector: '[view-welcome]',
	inputs: ['item'],
	template: /* html */ `
		<div class="circle">
			<img src="img/circle.png" />
		</div>
		<div class="logo">
			<img src="img/logo-lg.png" />
		</div>
	`
};
