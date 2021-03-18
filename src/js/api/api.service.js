import { of } from "rxjs";
import { DATA } from "./api.data";

export class ApiService {

	static data$() {
		return of(DATA);
	}

}
