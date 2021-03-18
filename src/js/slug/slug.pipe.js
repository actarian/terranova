import { Pipe } from 'rxcomp';
import { environment } from '../environment';

export default class SlugPipe extends Pipe {

	static transform(key) {
		const url = environment.url;
		return url[key] || `#${key}`;
	}

}

SlugPipe.meta = {
	name: 'slug',
};
