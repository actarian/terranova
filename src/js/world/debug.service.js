import { BehaviorSubject } from "rxjs";

export const XRStatus = {
	Waiting: 'waiting',
	Enabled: 'enabled',
	Ended: 'ended',
	Started: 'started',
	Disabled: 'disabled',
	NeedsHttps: 'needs-https',
	Unavailable: 'unavailable',
};

export default class DebugService {

	static getService() {
		if (!this.service_) {
			this.service_ = new DebugService();
		}
		return this.service_;
	}

	get message() {
		return this.message$.getValue();
	}

	constructor() {
		if (DebugService.service_) {
			throw ('DebugService is a singleton class!');
		}
		this.message$ = new BehaviorSubject(null);
	}

	setMessage(message) {
		if (this.message !== message) {
			this.message$.next(message);
		}
	}

}
