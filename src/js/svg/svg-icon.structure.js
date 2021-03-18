import { getContext, Structure } from 'rxcomp';

export default class SvgIconStructure extends Structure {
	onInit() {
		this.update();
	}
	onChanges() {
		this.update();
	}
	update() {
		if (this.name_ !== this.name) {
			this.name_ = this.name;
			const { node } = getContext(this);
			if (node.parentNode) {
				const xmlns = 'http://www.w3.org/2000/svg';
				const element = document.createElementNS(xmlns, `svg`);
				const w = this.width || 24;
				const h = this.height || 24;
				element.setAttribute('class', `icon--${this.name}`);
				// element.setAttributeNS(null, 'width', w);
				// element.setAttributeNS(null, 'height', h);
				element.setAttributeNS(null, 'viewBox', `0 0 ${w} ${h}`);
				element.innerHTML = `<use xlink:href="#${this.name}"></use>`;
				element.rxcompId = node.rxcompId;
				element.classList.add(...node.classList);
				node.parentNode.replaceChild(element, node);
			}
		}
	}
}

SvgIconStructure.meta = {
	selector: 'svg-icon',
	inputs: ['name', 'width', 'height']
};

/*
<svg class="copy" width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#copy"></use></svg>
*/
