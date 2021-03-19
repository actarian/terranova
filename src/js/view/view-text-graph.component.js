import { max, range } from 'd3-array';
import { axisBottom } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { create } from 'd3-selection';
import { Component, getContext } from 'rxcomp';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';
// import { interpolateHcl } from 'd3-interpolate';
// import { extent, max, min } from 'd3-array';
// import { ScaleLinear, scaleLinear, ScaleTime, scaleUtc } from 'd3-scale';
// import { mouse, select, Selection } from 'd3-selection';
// import { timeDay, timeDays, timeMonth, timeMonths } from 'd3-time';
// import { transition } from 'd3-transition';

export default class ViewTextGraphComponent extends Component {

	onInit() {
		// console.log('ViewTextGraphComponent');
		// data = Object.assign(d3.csvParse(await FileAttachment("alphabet.csv").text(), ({letter, frequency}) => ({name: letter, value: +frequency})).sort((a, b) => d3.descending(a.value, b.value)), {format: "%", y: "↑ Frequency"})
		this.loadChart$().pipe(
			first(),
		).subscribe(data => {
			// console.log('data', data, this.item.graph.data);
			data = this.item.graph.data;
			const format = this.item.graph.format;
			const chart = this.makeChart(data, format);
			const { node } = getContext(this);
			const graph = node.querySelector('.graph');
			graph.appendChild(chart);
		});
	}

	loadChart$() {
		return from(fetch('data/fatturato.csv').then(x => x.text()).then(csv => {
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

	makeChart(data, format) {
		// const columns = ['letter', 'frequency'];
		// const format = '%';
		// const y = '↑ Frequency';

		const color = '#114895';
		const width = 600;
		const height = 500;
		const margin = { top: 30, right: 0, bottom: 30, left: 40 };

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
			.attr('y', d => y(d.value))
			.attr('height', d => y(0) - y(d.value))
			.attr('width', x.bandwidth());

		svg.append('g')
			.attr('fill', color)
			.selectAll('text')
			.data(data)
			.join('text')
			.attr('dy', '.75em')
			.attr('x', (d, i) => x(i) + x.bandwidth() / 2)
			.attr('y', d => y(d.value) - 20)
			.attr('text-anchor', 'middle')
			.attr('font-size', '1.8rem')
			.attr('font-weight', '700')
			.text(d => format.replace('%', d.value))

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
