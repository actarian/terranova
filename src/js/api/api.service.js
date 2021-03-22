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

	static setSlugs(items, parentSlug = '', parentDocumentTitle = '') {
		items.forEach(item => {
			item.slug = parentSlug + '/' + LocationService.toSlug(item.name);
			item.documentTitle = parentDocumentTitle + (parentDocumentTitle !== '' ? ' - ' : '') + item.name;
			if (item.items) {
				this.setSlugs(item.items, item.slug, item.documentTitle);
			}
		});
		return items;
	}

}
