import { Directive, getContext } from 'rxcomp';

export default class IdDirective extends Directive {

	onChanges() {
		const { node } = getContext(this);
		node.setAttribute('id', this.id);
	}

}

IdDirective.meta = {
	selector: '[id]',
	inputs: ['id']
};
