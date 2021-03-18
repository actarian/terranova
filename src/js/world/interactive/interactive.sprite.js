import EmittableSprite from './emittable.sprite';
import Interactive from './interactive';

export default class InteractiveSprite extends EmittableSprite {

	constructor(material) {
		super(material);
		this.depthTest = true;
		this.over_ = false;
		this.down_ = false;
		Interactive.items.push(this);
	}

	get isInteractiveSprite() {
		return true;
	}

	get over() {
		return this.over_;
	}
	set over(over) {
		if (this.over_ != over) {
			this.over_ = over;
			/*
			if (over) {
				this.emit('hit', this);
			}
			*/
			if (over) {
				this.emit('over', this);
			} else {
				this.emit('out', this);
			}
		}
	}

	get down() {
		return this.down_;
	}
	set down(down) {
		down = down && this.over;
		if (this.down_ != down) {
			this.down_ = down;
			if (down) {
				this.emit('down', this);
			} else {
				this.emit('up', this);
			}
		}
	}
}
