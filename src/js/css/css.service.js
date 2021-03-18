import { fromEvent } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

export default class CssService {

	static height$() {
		const style = document.documentElement.style;
		return fromEvent(window, 'resize').pipe(
			map(event => window.innerHeight),
			startWith(window.innerHeight),
			tap(height => {
				// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
				let vh = height * 0.01;
				// Then we set the value in the --vh custom property to the root of the document
				style.setProperty('--vh', `${vh}px`);
			})
		);
	}

}
