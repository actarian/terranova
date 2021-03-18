import LocomotiveScroll from 'locomotive-scroll';
import { combineLatest, fromEvent, fromEventPattern, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { auditTime, distinctUntilChanged, filter, first, map, shareReplay, startWith } from 'rxjs/operators';
import Rect from '../rect/rect';

let SINGLETON;

const DEFAULT_SCROLL_TARGET = window;

function getScrollTop(node) {
	if (node === document) {
		return getScrollTop(document.scrollingElement || document.documentElement || document.body);
	}
	return node.pageYOffset || node.scrollY || node.scrollTop || 0;
}

function getScrollLeft(node) {
	if (node === document) {
		return getScrollLeft(document.scrollingElement || document.documentElement || document.body);
	}
	return node.pageXOffset || node.scrollX || node.scrollLeft || 0;
}

function tween(from, to, friction) {
	if (from === to || Math.abs(to - from) < 0.02) {
		return to;
	}
	return from + (to - from) / friction;
}

function windowRect$() {
	const windowRect = new Rect({
		width: window.innerWidth,
		height: window.innerHeight
	});
	return fromEvent(window, 'resize').pipe(
		map(originalEvent => {
			windowRect.width = window.innerWidth;
			windowRect.height = window.innerHeight;
			return windowRect;
		}),
		startWith(windowRect)
	);
}

function locomotiveScrollEvent$() {
	const event = {
		speed: 0,
		scrollTop: 0,
		scrollLeft: 0,
		direction: 0,
		originalEvent: null,
	};
	return fromEventPattern((handler) => {
		const locomotiveScroll = new LocomotiveScroll({
			el: document.querySelector('#js-scroll'),
			smooth: true,
			getSpeed: true,
			getDirection: true
		});
		// console.log('locomotiveScroll');
		locomotiveScroll.on('scroll', handler);
	}, (handler) => {
		// !!! locomotiveScroll.removeListener('scroll', handler);
	}).pipe(
		// auditTime(1000 / 60),
		map((instance) => {
			// instance.direction, instance.speed
			// const progress = instance.scroll.y / instance.limit;
			// console.log('progress', progress);
			event.speed = instance.speed;
			event.scrollTop = instance.scroll.y;
			event.direction = instance.direction;
			return event;
		}),
		startWith(event),
		shareReplay()
	);
}

function scrollEvent$() {
	const target = DEFAULT_SCROLL_TARGET;
	let previousTop = getScrollTop(target);
	const event = {
		scrollTop: previousTop,
		scrollLeft: getScrollLeft(target),
		direction: 0,
		originalEvent: null,
	};
	return fromEvent(target, 'scroll').pipe(
		auditTime(16), // 60 fps
		map((originalEvent) => {
			event.scrollTop = getScrollTop(target);
			event.scrollLeft = getScrollLeft(target);
			const diff = event.scrollTop - previousTop;
			event.direction = diff === 0 ? 0 : diff / Math.abs(diff);
			previousTop = event.scrollTop;
			event.originalEvent = originalEvent;
			return event;
		}),
		startWith(event)
	);
}

class Dom {

	static scrollIntersection$(node) {
		return Dom.scrollAndRect$.pipe(
			map(datas => {
				// const scrollTop = datas[0];
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				const response = Dom.scrollIntersection_;
				response.scroll = datas[0];
				response.windowRect = datas[1];
				response.rect = rect;
				response.intersection = intersection;
				return response;
			})
		);
	}

	static appearOnLoad$(node, value = 0.0) { // -0.5
		const isCover = node.hasAttribute('cover');
		return Dom.scrollIntersection$(node).pipe(
			filter(x => (Dom.ready || isCover) && x.intersection.y > value && x.intersection.x > 0),
			first()
		);
	}

	static appear$(node, value = 0.0) { // -0.5
		return Dom.scrollIntersection$(node).pipe(
			filter(x => x.intersection.y > value),
			first()
		);
	}

	static visibility$(node, value = 0.5) {
		return Dom.scrollIntersection$(node).pipe(
			map(x => x.intersection.y > value),
			distinctUntilChanged()
		);
	}

	static firstVisibility$(node, value = 0.5) {
		return Dom.visibility$(node, value).pipe(
			filter(visible => visible),
			first()
		);
	}

	static rafIntersection$(node) {
		return Dom.rafAndRect$.pipe(
			map(datas => {
				// const scrollTop = datas[0];
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				const response = Dom.rafIntersection_;
				response.scroll = datas[0];
				response.windowRect = datas[1];
				response.rect = rect;
				response.intersection = intersection;
				return response;
			})
		);
	}

}

Dom.windowRect$ = windowRect$();

Dom.scrollIntersection_ = {};
Dom.scrollEvent$ = scrollEvent$();
Dom.locomotiveScrollEvent$ = locomotiveScrollEvent$();
Dom.scroll$ = Dom.locomotiveScrollEvent$;
Dom.scrollAndRect$ = combineLatest([Dom.scroll$, Dom.windowRect$]).pipe(shareReplay());

Dom.rafIntersection_ = {};
Dom.raf$ = range(0, Number.POSITIVE_INFINITY, animationFrame);
Dom.rafAndRect$ = combineLatest([Dom.raf$, Dom.windowRect$]).pipe(shareReplay());

export default class DomService extends Dom {

	get ready() {
		return this.ready_;
	}

	set ready(ready) {
		this.ready_ = ready;
	}

	get scrollTop() {
		return getScrollTop(DEFAULT_SCROLL_TARGET);
	}

	get scrollLeft() {
		return getScrollLeft(DEFAULT_SCROLL_TARGET);
	}

	constructor() {
		super();
		const hasPassiveEvents = () => {
			let has = false;
			try {
				const options = Object.defineProperty({}, 'passive', {
					get: function() {
						has = true;
					}
				});
				const noop = function() { };
				window.addEventListener('testPassiveEventSupport', noop, options);
				window.removeEventListener('testPassiveEventSupport', noop, options);
			} catch (e) { }
			return has;
		};
		this.hasPassiveEvents = hasPassiveEvents();
	}

	static factory() {
		return new DomService();
	}

	static getScrollTop(node) {
		return Math.max(0, node.pageYOffset || node.scrollY || node.scrollTop || 0);
	}

	static getScrollLeft(node) {
		return Math.max(0, node.pageXOffset || node.scrollX || node.scrollLeft || 0);
	}

	static detect() {
		const userAgent = navigator.userAgent.toLowerCase();
		const explorer = userAgent.indexOf('msie') > -1;
		const firefox = userAgent.indexOf('firefox') > -1;
		const opera = userAgent.toLowerCase().indexOf('op') > -1;
		let chrome = userAgent.indexOf('chrome') > -1;
		let safari = userAgent.indexOf('safari') > -1;
		if ((chrome) && (safari)) {
			safari = false;
		}
		if ((chrome) && (opera)) {
			chrome = false;
		}
		const android = userAgent.match(/android/i);
		const blackberry = userAgent.match(/blackberry/i);
		const ios = userAgent.match(/iphone|ipad|ipod/i);
		const operamini = userAgent.match(/opera mini/i);
		const iemobile = userAgent.match(/iemobile/i) || navigator.userAgent.match(/wpdesktop/i);
		const mobile = android || blackberry || ios || operamini || iemobile;
		const overscroll = navigator.platform === 'MacIntel' && typeof navigator.getBattery === 'function';
		const agent = this.agent = {
			chrome,
			explorer,
			firefox,
			safari,
			opera,
			android,
			blackberry,
			ios,
			operamini,
			iemobile,
			mobile,
			overscroll,
		};
		// Object.assign(DomService, agent);
		const html = document.querySelector('html');
		Object.keys(agent).forEach(x => {
			if (agent[x]) {
				html.classList.add(x);
			}
		});
		return this.agent;
		/*
		const onTouchStart = () => {
			document.removeEventListener('touchstart', onTouchStart);
			Dom.touch = true;
			html.classList.add('touch');
		};
		document.addEventListener('touchstart', onTouchStart);
		const onMouseDown = () => {
			document.removeEventListener('mousedown', onMouseDown);
			Dom.mouse = true;
			html.classList.add('mouse');
		};
		document.addEventListener('mousedown', onMouseDown);
		const onScroll = () => {
			let now = Utils.now();
			if (Dom.lastScrollTime) {
				const diff = now - Dom.lastScrollTime;
				if (diff < 5) {
					document.removeEventListener('scroll', onScroll);
					Dom.fastscroll = true;
					node.classList.add('fastscroll');
					// console.log('scroll', diff);
				}
			}
			Dom.lastScrollTime = now;
		};
		document.addEventListener('scroll', onScroll);
		*/
	}

	static isDescendantOf(node, target) {
		if (node === document) {
			return false;
		}
		if (node === target) {
			return true;
		} else if (node.parentNode) {
			return this.isDescendantOf(node.parentNode, target);
		}
	}

	static singleton() {
		if (!SINGLETON) {
			SINGLETON = new DomService();
		}
		return SINGLETON;
	}

	raf$() {
		return DomService.raf$;
	}

	windowRect$() {
		return DomService.windowRect$;
	}

	rafAndRect$() {
		return DomService.rafAndRect$;
	}

	scroll$() {
		return DomService.scroll$;
	}

	scrollAndRect$() {
		return DomService.scrollAndRect$;
	}

	rafIntersection$(node) {
		return DomService.rafIntersection$(node);
	}

	scrollIntersection$(node) {
		return DomService.scrollIntersection$(node);
	}

	appearOnLoad$(node, value = 0.0) {
		return DomService.appearOnLoad$(node, value);
	}

	appear$(node, value = 0.0) {
		return DomService.appear$(node, value);
	}

	visibility$(node, value = 0.5) {
		return DomService.visibility$(node, value);
	}

	firstVisibility$(node, value = 0.5) {
		return DomService.firstVisibility$(node, value);
	}

	scrollTo(left, top) {
		DEFAULT_SCROLL_TARGET.scrollTo(0, top);
	}

	scroll(options) {
		DEFAULT_SCROLL_TARGET.scroll(options);
	}

	hasWebglSupport() {
		if (this.isIE()) {
			return false;
		}
		if (!this.hasWebgl()) {
			return false;
		}
		return true;
	}

	isIE() {
		const ua = window.navigator.userAgent;
		const msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		const trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			const rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		const edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		// other browser
		return false;
	}

	hasWebgl() {
		let gl, debugInfo, vendor, renderer, has = false;
		try {
			const canvas = document.createElement('canvas');
			if (!!window.WebGLRenderingContext) {
				gl = canvas.getContext('webgl', {
					failIfMajorPerformanceCaveat: true
				}) ||
					canvas.getContext('experimental-webgl', {
						failIfMajorPerformanceCaveat: true
					});
			}
		} catch (e) {
			console.log('DomService.hasWebgl.error no webgl');
		}
		if (gl) {
			debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
			vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
			renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
			has = true;
		}
		console.log(`DomService.hasWebgl WebGLCapabilities debugInfo: ${debugInfo} vendor: ${vendor} renderer: ${renderer} `);
		return has;
	}

	getOuterHeight(node) {
		let height = node.clientHeight;
		const computedStyle = window.getComputedStyle(node);
		height += parseInt(computedStyle.marginTop, 10);
		height += parseInt(computedStyle.marginBottom, 10);
		height += parseInt(computedStyle.borderTopWidth, 10);
		height += parseInt(computedStyle.borderBottomWidth, 10);
		return height;
	}

	getOuterWidth(node) {
		let width = node.clientWidth;
		const computedStyle = window.getComputedStyle(node);
		width += parseInt(computedStyle.marginLeft, 10);
		width += parseInt(computedStyle.marginRight, 10);
		width += parseInt(computedStyle.borderLeftWidth, 10);
		width += parseInt(computedStyle.borderRightWidth, 10);
		return width;
	}

	smoothScroll$(selector, friction = 6) {
		const target = document.querySelector('.smooth-scroll');
		const node = document.querySelector(selector);
		let down = false;
		let first = true;
		return this.raf$().pipe(
			map(() => {
				// const outerHeight = this.getOuterHeight(node);
				const innerHeight = node.lastElementChild.offsetTop + node.lastElementChild.offsetHeight;
				if (parseInt(target.style.height) !== innerHeight) {
					target.style = `height: ${innerHeight}px`;
				}
				const nodeTop = node.top || 0;
				const top = down ? -this.scrollTop : tween(nodeTop, -this.scrollTop, (first ? 1 : friction));
				const left = (node.parentNode.offsetWidth - node.offsetWidth) / 2;
				if (node.left !== left) {
					node.left = left;
					node.style.left = `${left}px`;
				}
				if (node.top !== top) {
					node.top = top;
					// node.style.transform = `translateX(-50%) translateY(${top}px)`;
					// node.style.top = `${top}px`;
					node.scrollTop = -top;
					first = false;
					return top;
				} else {
					return null;
				}
			}),
			filter(x => x !== null),
			shareReplay()
		);
	}

	getStyleSheet() {
		for (let i = 0; i < document.styleSheets.length; i++) {
			const sheet = document.styleSheets[i];
			return sheet;
		}
	}

	virtualScroll$(selector, friction = 10) {
		const style = this.getStyleSheet();
		const ruleIndex = style.insertRule(`.virtual-scroll:after { content: ''; display:block; width: 100%; height: 1px; }`, style.cssRules.length);
		const rule = style.cssRules[ruleIndex];
		// console.log('rule', style.cssRules.length, rule.cssText);
		let outerHeight_ = 0;
		const node = document.querySelector(selector);
		node.addEventListener('wheel', (event) => {
			// console.log('wheel', event);
			this.scrollTo(0, this.scrollTop + event.deltaY);
		});
		let down = false;
		let first = true;
		return this.raf$().pipe(
			map(() => {
				const outerHeight = this.getOuterHeight(node);
				if (outerHeight_ !== outerHeight) {
					outerHeight_ = outerHeight;
					rule.style.height = `${outerHeight_}px`;
					// console.log(rule.style.height);
				}
				const nodeTop = node.top || 0;
				const top = down ? -this.scrollTop : tween(nodeTop, -this.scrollTop, (first ? 1 : friction));
				if (node.top !== top) {
					node.top = top;
					node.style.transform = `translateX(-50%) translateY(${top}px)`;
					// node.style = `position: fixed; top: 0; transform: translateX(-50%) translateY(${top}px)`;
					first = false;
					return top;
				} else {
					return null;
				}
			}),
			filter(x => x !== null),
			shareReplay()
		);
	}

	addCustomRules() {
		const sheet = this.addCustomSheet();
		const body = document.querySelector('body');
		const node = document.createElement('div');
		node.style.width = '100px';
		node.style.height = '100px';
		node.style.overflow = 'auto';
		node.style.visibility = 'hidden';
		node.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
		const inner = document.createElement('div');
		inner.style.width = 'auto';
		inner.style.height = '200px';
		node.appendChild(inner);
		body.appendChild(node);
		const scrollBarWidth = (node.offsetWidth - inner.offsetWidth);
		body.removeChild(node);
	}

	addCustomSheet() {
		const style = document.createElement('style');
		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);
		return style.sheet;
	}

	isDescendantOf(node, target) {
		return DomService.isDescendantOf(node, target);
	}

	get agent() {
		return DomService.agent || DomService.detect();
	}

}
