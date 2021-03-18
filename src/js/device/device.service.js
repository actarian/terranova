
export const DevicePlatform = {
	Unknown: 'unknown',
	IOS: 'ios',
	Android: 'android',
	WindowsPhone: 'windowsPhone',
	VRHeadset: 'vrHeadset',
};

export class DeviceService {

	static get platform() {
		if (!this.platform_) {
			this.platform_ = this.getDevicePlatform();
		}
		return this.platform_;
	}

	static get isIOS() {
		return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) !== -1
			// iPad on iOS 13 detection
			|| (navigator.userAgent.indexOf('Mac') !== -1 && 'ontouchend' in document);
	}

	static get isVRHeadset() {
		return navigator.userAgent.indexOf('VR') !== -1 || navigator.userAgent.indexOf('Quest') !== -1 || navigator.userAgent.indexOf('Oculus') !== -1;
	}

	static getDevicePlatform() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		// Windows Phone must come first because its UA also contains 'Android'
		if (/windows phone/i.test(userAgent)) {
			return DevicePlatform.WindowsPhone;
		}
		if (/android/i.test(userAgent)) {
			return DevicePlatform.Android;
		}
		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		// if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		if (this.isIOS) {
			return DevicePlatform.IOS;
		}
		if (this.isVRHeadset) {
			return DevicePlatform.VRHeadset;
		}
		return DevicePlatform.Unknown;
	}

}
