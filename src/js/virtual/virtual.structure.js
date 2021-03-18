import { getContext, Structure } from 'rxcomp';
import { BehaviorSubject, fromEvent, merge } from 'rxjs';
import { auditTime, distinctUntilChanged, map, startWith, takeUntil, tap } from 'rxjs/operators';
import VirtualItem from './virtual.item';

export const VirtualMode = {
	Responsive: 1,
	Grid: 2,
	Centered: 3,
	List: 4
};

export default class VirtualStructure extends Structure {

	onInit() {
		const { module, node } = getContext(this);
		const template = node.firstElementChild;
		const expression = node.getAttribute('*virtual');
		node.removeAttribute('*virtual');
		node.removeChild(template);
		const tokens = (this.tokens = this.getExpressionTokens(expression));
		this.virtualFunction = module.makeFunction(tokens.iterable);
		this.container = node;
		this.template = template;
		this.mode = this.mode || 1;
		this.width = this.width || 250;
		this.gutter = (this.gutter !== undefined) ? this.gutter : 20;
		this.reverse = this.reverse === true ? true : false;
		this.options = {
			width: this.width,
			gutter: this.gutter,
			reverse: this.reverse,
			containerWidth: 0,
			containerHeight: 0,
			top: 0,
			cols: [0],
		};
		this.cachedRects = {};
		this.cachedInstances = [];
		this.cacheNodes = [];
		this.items$ = new BehaviorSubject([]);
		this.update$()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(visibleItems => {
				// console.log(visibleItems.length);
			});
	}

	onChanges(changes) {
		const context = getContext(this);
		const module = context.module;
		// resolve
		const items = module.resolve(this.virtualFunction, context.parentInstance, this) || [];
		this.mode = this.mode || 1;
		this.width = this.width || 250;
		this.gutter = (this.gutter !== undefined) ? this.gutter : 20;
		this.options.width = this.width;
		this.updateView(true);
		this.items$.next(items);
		// console.log('VirtualStructure', 'items.length', items.length);
	}

	update$() {
		return merge(this.scroll$(), this.resize$(), this.items$.pipe(
			distinctUntilChanged(),
		)).pipe(
			map(_ => {
				const visibleItems = this.updateForward();
				return visibleItems;
			})
		);
	}

	updateForward() {
		const options = this.options;
		const items = this.items$.getValue();
		// console.log('VirtualStructure', 'items.length', items.length);
		const total = items.length;
		this.container.position = 'relative';
		let highestHeight = 0;
		const width = this.getWidth();
		const gutter = this.getGutter(width);
		const visibleItems = [];
		for (let i = 0, len = items.length; i < len; i++) {
			const item = items[i];
			let col, height, top, left, bottom;
			let rect = this.cachedRects[i];
			if (rect) {
				col = rect.col;
				height = rect.height;
				left = rect.left;
				// top = rect.top;
				// bottom = rect.bottom;
			} else {
				col = this.getCol();
				height = this.getHeight(width, item);
			}
			top = options.cols[col];
			if (this.intersect(top + options.top, top + height + options.top, options.top, options.top + options.containerHeight)) {
				if (!rect) {
					left = this.getLeft(col, width, gutter);
				}
				const node = this.cachedNode(i, i, item, total);
				node.style.position = 'absolute';
				node.style.top = top + 'px';
				node.style.left = left + 'px';
				node.style.width = width + 'px';
				if (height !== node.offsetHeight) {
					height = node.offsetHeight;
				}
				bottom = top + height + options.gutter;
				highestHeight = Math.max(highestHeight, bottom);
				options.cols[col] = bottom;
				if (!rect) {
					this.cachedRects[i] = { col, width, height, left, top, bottom };
				} else {
					rect.height = height;
					rect.bottom = bottom;
				}
				visibleItems.push(item);
			} else {
				this.removeNode(i);
				bottom = top + height + options.gutter;
				options.cols[col] = bottom;
				highestHeight = Math.max(highestHeight, bottom);
			}
		}
		let removeIndex = items.length;
		while (removeIndex < this.cacheNodes.length) {
			this.removeNode(removeIndex);
			removeIndex++;
		}
		this.cacheNodes.length = items.length;
		const parentContainer = this.container.parentNode;
		if (this.reverse && (highestHeight < parentContainer.offsetHeight - 1)) {
			const diff = parentContainer.offsetHeight - 1 - highestHeight;
			items.forEach((item, i) => {
				if (visibleItems.indexOf(item) !== -1) {
					const rect = this.cachedRects[i];
					const node = this.cachedNode(i, i, item, total);
					node.style.top = (rect.top + diff) + 'px';
				}
			});
			this.container.style.height = `${parentContainer.offsetHeight - 1}px`;
		} else {
			this.container.style.height = `${highestHeight}px`;
		}
		return visibleItems;
	}

	/*
	updateForward__() {
		const options = this.options;
		const items = this.items$.getValue();
		// console.log('VirtualStructure', 'items.length', items.length);
		const total = items.length;
		this.container.position = 'relative';
		let highestHeight = 0;
		const width = this.getWidth();
		const gutter = this.getGutter(width);
		const visibleItems = items.filter((item, i) => {
			let col, height, top, left, bottom;
			let rect = this.cachedRects[i];
			if (rect) {
				col = rect.col;
				height = rect.height;
				left = rect.left;
				// top = rect.top;
				// bottom = rect.bottom;
			} else {
				col = this.getCol();
				height = this.getHeight(width, item);
			}
			top = options.cols[col];
			if (this.intersect(top + options.top, top + height + options.top, options.top, options.top + options.containerHeight)) {
				if (!rect) {
					left = this.getLeft(col, width, gutter);
				}
				const node = this.cachedNode(i, i, item, total);
				node.style.position = 'absolute';
				node.style.top = top + 'px';
				node.style.left = left + 'px';
				node.style.width = width + 'px';
				if (height !== node.offsetHeight) {
					height = node.offsetHeight;
				}
				bottom = top + height + options.gutter;
				highestHeight = Math.max(highestHeight, bottom);
				options.cols[col] = bottom;
				if (!rect) {
					this.cachedRects[i] = { col, width, height, left, top, bottom };
				} else {
					rect.height = height;
					rect.bottom = bottom;
				}
				return true;
			} else {
				this.removeNode(i);
				bottom = top + height + options.gutter;
				options.cols[col] = bottom;
				highestHeight = Math.max(highestHeight, bottom);
				return false;
			}
		});
		let removeIndex = items.length;
		while (removeIndex < this.cacheNodes.length) {
			this.removeNode(removeIndex);
			removeIndex++;
		}
		this.cacheNodes.length = items.length;
		this.container.style.height = `${highestHeight}px`;
		return visibleItems;
	}

	updateBackward__() {
		const options = this.options;
		const items = this.items$.getValue();
		// console.log('VirtualStructure', 'items.length', items.length);
		const total = items.length;
		this.container.position = 'relative';
		let lowestHeight = 0;
		const width = this.getWidth();
		const gutter = this.getGutter(width);
		const visibleItems = [];
		for (let i = items.length - 1; i >= 0; i--) {
			const item = items[i];
			let col, height, top, left, bottom;
			let rect = this.cachedRects[i];
			if (rect) {
				col = rect.col;
				height = rect.height;
				left = rect.left;
				// top = rect.top;
				// bottom = rect.bottom;
			} else {
				col = this.getCol();
				height = this.getHeight(width, item);
			}
			bottom = options.cols[col];
			if (this.intersect(bottom - height + options.top, bottom + options.top, options.top, options.top + options.containerHeight)) {
				if (!rect) {
					left = this.getLeft(col, width, gutter);
				}
				const node = this.cachedNode(i, i, item, total);
				node.style.position = 'absolute';
				node.style.top = top + 'px';
				node.style.left = left + 'px';
				node.style.width = width + 'px';
				if (height !== node.offsetHeight) {
					height = node.offsetHeight;
				}
				top = bottom - height - options.gutter;
				lowestHeight = Math.min(lowestHeight, -top);
				options.cols[col] = top;
				if (!rect) {
					this.cachedRects[i] = { col, width, height, left, top, bottom: bottom };
				} else {
					rect.height = height;
					rect.top = top;
				}
				visibleItems.push(item);
			} else {
				this.removeNode(i);
				top = bottom - height - options.gutter;
				options.cols[col] = top;
				lowestHeight = Math.min(lowestHeight, top);
			}
		}
		let removeIndex = items.length;
		while (removeIndex < this.cacheNodes.length) {
			this.removeNode(removeIndex);
			removeIndex++;
		}
		this.cacheNodes.length = items.length;
		this.container.style.height = `${-lowestHeight}px`;
		return visibleItems;
	}
	*/

	getCols() {
		const options = this.options;
		const cols = Math.floor((options.containerWidth + options.gutter) / (options.width + options.gutter)) || 1;
		return new Array(cols).fill(0);
	}

	getCol() {
		const options = this.options;
		let col;
		switch (this.mode) {
			case VirtualMode.Grid:
			case VirtualMode.Centered:
			case VirtualMode.Responsive:
				col = options.cols.reduce((p, c, i, a) => {
					return c < a[p] ? i : p;
				}, 0);
				break;
			case VirtualMode.List:
			default:
				col = 0;
		}
		return col;
	}

	getWidth() {
		const options = this.options;
		let width;
		switch (this.mode) {
			case VirtualMode.Grid:
			case VirtualMode.Centered:
				width = options.width;
				break;
			case VirtualMode.Responsive:
				width = (options.containerWidth - (options.cols.length - 1) * options.gutter) / options.cols.length;
				break;
			case VirtualMode.List:
			default:
				width = options.containerWidth;
		}
		return width;
	}

	getHeight(width, item) {
		const options = this.options;
		let height;
		switch (this.mode) {
			case VirtualMode.Grid:
			case VirtualMode.Centered:
			case VirtualMode.Responsive:
				height = options.width;
				break;
			case VirtualMode.List:
			default:
				height = 80;
		}
		return height;
	}

	getGutter(width) {
		const options = this.options;
		let gutter;
		switch (this.mode) {
			case VirtualMode.Grid:
			case VirtualMode.Centered:
				gutter = options.gutter;
				break;
			case VirtualMode.Responsive:
				gutter = (options.containerWidth - options.cols.length * width) / (options.cols.length - 1);
				break;
			case VirtualMode.List:
			default:
				gutter = 0;
		}
		return gutter;
	}

	getLeft(index, width, gutter) {
		const options = this.options;
		let left;
		switch (this.mode) {
			case VirtualMode.Grid:
			case VirtualMode.Responsive:
				left = index * (width + gutter);
				break;
			case VirtualMode.Centered:
				left = (options.containerWidth - options.cols.length * (width + gutter) + gutter) / 2 + index * (width + gutter);
				break;
			case VirtualMode.List:
			default:
				left = 0;
		}
		return left;
	}

	cachedNode(index, i, value, total) {
		if (this.cacheNodes[index]) {
			return this.updateNode(index, i, value);
		} else {
			return this.createNode(index, i, value, total);
		}
	}

	createNode(index, i, value, total) {
		const clonedNode = this.template.cloneNode(true);
		delete clonedNode.rxcompId;
		this.container.appendChild(clonedNode);
		this.cacheNodes[index] = clonedNode;
		const context = getContext(this);
		const module = context.module;
		const tokens = this.tokens;
		const args = [tokens.key, i, tokens.value, value, i, total, context.parentInstance];
		const instance = module.makeInstance(clonedNode, VirtualItem, context.selector, context.parentInstance, args);
		const forItemContext = getContext(instance);
		module.compile(clonedNode, forItemContext.instance);
		this.cachedInstances[index] = instance;
		return clonedNode;
	}

	updateNode(index, i, value) {
		const instance = this.cachedInstances[index];
		const tokens = this.tokens;
		if (instance[tokens.key] !== i) {
			instance[tokens.key] = i;
			instance[tokens.value] = value;
			instance.pushChanges();
		}
		// console.log(index, i, value);
		return this.cacheNodes[index];
	}

	removeNode(index) {
		this.cachedInstances[index] = undefined;
		const node = this.cacheNodes[index];
		if (node) {
			const context = getContext(this);
			const module = context.module;
			node.parentNode.removeChild(node);
			module.remove(node);
		}
		this.cacheNodes[index] = undefined;
		return node;
	}

	intersect(top1, bottom1, top2, bottom2) {
		return top2 < bottom1 && bottom2 > top1;
	}

	resize$() {
		return fromEvent(window, 'resize').pipe(
			auditTime(100),
			startWith(null),
			tap(() => this.updateView(true))
		);
	}

	scroll$() {
		const { node } = getContext(this);
		// console.log(node.parentNode, getComputedStyle(node.parentNode).overflowY, node.parentNode.style.overflowY);
		if (node.parentNode && getComputedStyle(node.parentNode).overflowY === 'auto') {
			return fromEvent(node.parentNode, 'scroll').pipe(tap(() => {
				this.updateView();
			}));
		} else {
			return fromEvent(window, 'scroll').pipe(tap(() => this.updateView()));
		}
	}

	updateView(reset) {
		const rect = this.container.getBoundingClientRect();
		const options = this.options;
		options.top = rect.top;
		options.containerWidth = rect.width;
		options.containerHeight = rect.height; // window.innerHeight;
		options.cols = this.getCols();
		if (reset) {
			this.cachedRects = {};
		}
	}

	getExpressionTokens(expression) {
		if (expression === null) {
			throw new Error('invalid virtual');
		}
		if (expression.trim().indexOf('let ') === -1 || expression.trim().indexOf(' of ') === -1) {
			throw new Error('invalid virtual');
		}
		const expressions = expression
			.split(';')
			.map(x => x.trim())
			.filter(x => x !== '');
		const virtualExpressions = expressions[0].split(' of ').map(x => x.trim());
		let value = virtualExpressions[0].replace(/\s*let\s*/, '');
		const iterable = virtualExpressions[1];
		let key = 'index';
		const keyValueMatches = value.match(/\[(.+)\s*,\s*(.+)\]/);
		if (keyValueMatches) {
			key = keyValueMatches[1];
			value = keyValueMatches[2];
		}
		if (expressions.length > 1) {
			const indexExpressions = expressions[1].split(/\s*let\s*|\s*=\s*index/).map(x => x.trim());
			if (indexExpressions.length === 3) {
				key = indexExpressions[1];
			}
		}
		return { key, value, iterable };
	}
}

VirtualStructure.meta = {
	selector: '[*virtual]',
	inputs: ['mode', 'width', 'gutter', 'reverse']
};
