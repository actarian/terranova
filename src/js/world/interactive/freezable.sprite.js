
export default class FreezableSprite extends THREE.Sprite {

	get freezed() {
		return this.freezed_;
	}

	set freezed(freezed) {
		// !!! cycle through freezable and not freezable
		this.freezed_ = freezed;
		this.children.filter(x => x.__lookupGetter__('freezed')).forEach(x => x.freezed = freezed);
	}

	constructor(material) {
		material = material || new THREE.SpriteMaterial({
			color: 0xff00ff,
			// opacity: 1,
			// transparent: true,
		});
		super(material);
		this.freezed = false;
	}

	freeze() {
		this.freezed = true;
	}

	unfreeze() {
		this.freezed = false;
	}

}
