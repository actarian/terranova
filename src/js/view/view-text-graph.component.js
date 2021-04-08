import { max, range } from 'd3-array';
import { axisBottom } from 'd3-axis';
// import { interpolateHcl } from 'd3-interpolate';
// import { extent, max, min } from 'd3-array';
// import { ScaleLinear, scaleLinear, ScaleTime, scaleUtc } from 'd3-scale';
// import { mouse, select, Selection } from 'd3-selection';
// import { timeDay, timeDays, timeMonth, timeMonths } from 'd3-time';
import { easeQuadInOut } from 'd3-ease';
import { scaleBand, scaleLinear } from 'd3-scale';
import { create } from 'd3-selection';
import { transition } from 'd3-transition';
import { Component, getContext } from 'rxcomp';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

export default class ViewTextGraphComponent extends Component {

	get isVisible() {
		const { node } = getContext(this);
		const rect = node.getBoundingClientRect();
		return rect.left < window.innerWidth && rect.right > 0 && rect.top < window.innerHeight && rect.bottom > 0;
	}

	onInit() {
		// console.log('ViewTextGraphComponent');
		// data = Object.assign(d3.csvParse(await FileAttachment("alphabet.csv").text(), ({letter, frequency}) => ({name: letter, value: +frequency})).sort((a, b) => d3.descending(a.value, b.value)), {format: "%", y: "↑ Frequency"})
		this.loadChart$().pipe(
			first(),
		).subscribe(data => {
			// console.log(data);
			this.data = data; // this.item.graph.data;
			this.checkChart();
		});
	}

	onChanges() {
		this.checkChart();
	}

	checkChart() {
		if (this.chart) {
			this.chart.remove();
		}
		if (this.to) {
			clearTimeout(this.to);
		}
		this.to = setTimeout(() => {
			if (this.isVisible && this.data) {
				const data = this.data;
				const format = this.item.graph.format;
				const chart = this.chart = this.makeChart(data, format);
				const { node } = getContext(this);
				const graph = node.querySelector('.graph');
				graph.appendChild(chart);
			}
		}, 200);
	}

	loadChart$() {
		return from(fetch(this.item.graph.url).then(x => x.text()).then(csv => {
			const rows = csv.split('\n');
			const keys = rows.shift().split(',').map(x => JSON.parse(x));
			const data = rows.filter(row => row.length > 0).map(row => {
				const item = {};
				const values = row.split(',');
				keys.forEach((key, i) => {
					item[key] = JSON.parse(values[i]);
				});
				return item;
			});
			return data;
		}));
	}

	getTransition() {
		return transition()
			.duration(750)
			.ease(easeQuadInOut);
	}

	makeChart(data, format) {
		// const columns = ['letter', 'frequency'];
		// const format = '%';
		// const y = '↑ Frequency';

		const gap = window.innerWidth / 100 * 1.5;

		const color = '#114895';
		const width = 600;
		const height = 500;
		const margin = { top: gap, right: 0, bottom: gap, left: 0 };

		const x = scaleBand()
			.domain(range(data.length))
			.range([margin.left, width - margin.right])
			.padding(0.1);

		const y = scaleLinear()
			.domain([0, max(data, d => d.value)]).nice()
			.range([height - margin.bottom, margin.top]);

		const xAxis = g => g.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))
			.attr('font-size', '1.8rem')
			.attr('font-weight', '700');

		/*
		const yAxis = g => g.attr('transform', `translate(${margin.left},0)`)
			.call(axisLeft(y).ticks(null, data.format))
			.call(g => g.select('.domain').remove())
			.call(g => g.append('text')
				.attr('x', -margin.left)
				.attr('y', 10)
				.attr('fill', 'currentColor')
				.attr('text-anchor', 'start')
				.text(data.y))
		*/

		const svg = create('svg').attr('viewBox', [0, 0, width, height]);

		svg.append('g')
			.attr('fill', color)
			.selectAll('rect')
			.data(data)
			.join('rect')
			.attr('rx', 4.5)
			.attr('x', (d, i) => x(i))
			.attr('width', x.bandwidth())
			.attr('y', d => y(d.value) + y(0) - y(d.value))
			.transition()
			.duration(450)
			.ease(easeQuadInOut)
			.delay((d, i) => i * 50)
			.attr('y', d => y(d.value))
			.attr('height', d => y(0) - y(d.value))
			;

		svg.append('g')
			.attr('fill', color)
			.selectAll('text')
			.data(data)
			.join('text')
			.attr('dy', '.75em')
			.attr('x', (d, i) => x(i) + x.bandwidth() / 2)
			.attr('y', d => y(d.value) - gap * 2)
			.attr('opacity', '0')
			.attr('text-anchor', 'middle')
			.attr('font-size', '1.8rem')
			.attr('font-weight', '700')
			.text(d => format.replace('%', d.value))
			.transition()
			.duration(350)
			.ease(easeQuadInOut)
			.delay((d, i) => 450 + i * 50)
			.attr('y', d => y(d.value) - gap)
			.attr('opacity', '1')

		svg.append('g')
			.call(xAxis);

		/*
		svg.append('g')
			.call(yAxis);
		*/

		return svg.node();
	}

}

ViewTextGraphComponent.meta = {
	selector: '[view-text-graph]',
	inputs: ['item'],
	template: /* html */ `
		<div class="background" *if="item.image">
			<img data-loading="lazy" [src]="item.image" ondragstart="return false;" />
		</div>
		<!--
		<div class="circle" [class]="{ dimmed: item.image }">
			<img src="img/circle.png" />
		</div>
		-->
		<div class="container-fluid" [class]="{ 'negative': item.image != null }" >
			<div class="row">
				<div class="col-md-6" appear-stagger>
					<div class="title" [innerHTML]="item.title"></div>
					<div class="abstract" *if="item.abstract" [innerHTML]="item.abstract"></div>
					<div class="description" *if="item.description" [innerHTML]="item.description"></div>
				</div>
				<div class="col-md-6">
					<div class="graph"></div>
				</div>
			</div>
		</div>
	`
};
