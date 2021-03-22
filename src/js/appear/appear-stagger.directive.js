import { Directive, getContext } from 'rxcomp';
import { takeUntil } from 'rxjs/operators';
import IntersectionService from '../intersection/intersection.service';

export default class AppearStaggerDirective extends Directive {

	onInit() {
		const { node } = getContext(this);
		node.classList.add('appear-stagger');
	}

	onChanges() {
		const { node } = getContext(this);
		IntersectionService.firstIntersection$(node).pipe(
			takeUntil(this.unsubscribe$),
		).subscribe(_ => {
			node.classList.add('appeared');
		});
	}

}

AppearStaggerDirective.meta = {
	selector: '[appear-stagger]',
};
