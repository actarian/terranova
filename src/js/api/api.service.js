import { of } from "rxjs";
import { map } from "rxjs/operators";
import LocationService from "../location/location.service";
import { DATA } from "./api.data";

export class ApiService {

	static data$() {
		return of(DATA).pipe(
			map(data => this.setSlugs(data))
		);
	}

	static setSlugs(items, parentPath = '', parentSlug = '', parentDocumentTitle = '') {
		items.forEach(item => {
			item.path = (parentPath !== '' ? parentPath + '-' : '') + LocationService.toSlug(item.name);
			item.slug = parentSlug + '/' + item.path;
			item.documentTitle = parentDocumentTitle + (parentDocumentTitle !== '' ? ' - ' : '') + item.name;
			// console.log(item.path);
			if (item.items) {
				this.setSlugs(item.items, item.path, item.slug, item.documentTitle);
			}
		});
		return items;
	}

}
