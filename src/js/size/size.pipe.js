import { Pipe } from "rxcomp";

export default class FileSizePipe extends Pipe {

	static transform(value, si = true) {
		value = parseInt(value);
		const unit = si ? 1000 : 1024;
		if (Math.abs(value) < unit) {
			return value + ' B';
		}
		const units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
		let u = -1;
		do {
			value /= unit;
			++u;
		} while (Math.abs(value) >= unit && u < units.length - 1);
		return `${value.toFixed(1)} ${units[u]}`;
	}

}

FileSizePipe.meta = {
	name: 'fileSize',
};
