import * as d3 from 'd3';
export const makeStackedBarChart = (element, data) => {
  const options = {
    format: '',
    negative: '← Answers to "What to fix?"',
    positive: 'Answers to "What was good?" →',
    negatives: [1, 2, 3, 4],
    positives: [5],
    colors: {
      1: '#63171B',
      2: '#F56565',
      3: '#ED8936',
      4: '#ECC94B',
      5: '#48BB78',
    },
  };

  const maxCountOfTypes = data.reduce((result, { name, value }) => {
    result[name] = value + (result[name] ? result[name] : 0);
    return result;
  }, {});
  const maxCountOfAType = Math.max(...Object.values(maxCountOfTypes));

  const width = 800;

  const margin = { top: 50, right: 30, bottom: 0, left: 80 };
  const signs = new Map([
    ...options.negatives.map((d) => [d, -1]),
    ...options.positives.map((d) => [d, +1]),
  ]);
  const series = d3
    .stack()
    .keys([].concat(options.negatives.slice().reverse(), options.positives))
    .value(([, value], category) => signs.get(category) * (value.get(category) || 0))
    .offset(d3.stackOffsetDiverging)(
    d3.rollups(
      data,
      (data) =>
        d3.rollup(
          data,
          ([d]) => d.value,
          (d) => d.category,
        ),
      (d) => d.name,
    ),
  );

  const bias = d3
    .rollups(
      data,
      (v) => d3.sum(v, (d) => d.value * Math.min(0, signs.get(d.category))),
      (d) => d.name,
    )
    .sort(([, a], [, b]) => d3.ascending(a, b));

  const height = bias.length * 33 + margin.top + margin.bottom;

  const getColor = (key) => {
    return options.colors[key];
  };

  const x = d3
    .scaleLinear()
    .domain(d3.extent(series.flat(2)))
    .rangeRound([margin.left, width - margin.right]);

  const y = d3
    .scaleBand()
    .domain(bias.map(([name]) => name))
    .rangeRound([margin.top, height - margin.bottom])
    .padding(2 / 33);

  const formatValue = () => {
    const format = d3.format(options.format || '');
    return (x) => format(Math.abs(x));
  };

  const xAxis = (g) =>
    g
      .attr('transform', `translate(0,${margin.top})`)
      .call(
        d3
          .axisTop(x)
          .ticks(Math.ceil(maxCountOfAType))
          .tickFormat(formatValue())
          .tickSizeOuter(0),
      )
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .append('text')
          .attr('x', x(0) + 20)
          .attr('y', -24)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(options.positive),
      )
      .call((g) =>
        g
          .append('text')
          .attr('x', x(0) - 20)
          .attr('y', -24)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'end')
          .text(options.negative),
      );

  const yAxis = (g) =>
    g
      .call(d3.axisLeft(y).tickSizeOuter(0))
      .call((g) =>
        g
          .selectAll('.tick')
          .data(bias)
          .attr(
            'transform',
            ([name, min]) => `translate(${x(min)},${y(name) + y.bandwidth() / 2})`,
          ),
      )
      .call((g) => g.select('.domain').attr('transform', `translate(${x(0)},0)`));

  const chart = () => {
    const svg = d3.select(element).html('').attr('viewBox', [0, 0, width, height]);
    const emojis = ['😠', '😕', '😐', '😊', '😍'];
    const g = svg
      .append('g')
      .selectAll('g')
      .data(series)
      .join('g')
      .attr('fill', (d) => getColor(d.key))
      .selectAll('rect')
      .data((d) => d.map((v) => Object.assign(v, { key: d.key })))
      .join('g');

    g.append('rect')
      .attr('x', (d) => x(d[0]))
      .attr('y', ({ data: [name] }) => y(name))
      .attr('width', (d) => x(d[1]) - x(d[0]))
      .attr('height', y.bandwidth());

    g.append('text')
      .text(({ key }) => emojis[key - 1])
      .attr('opacity', '0.4')
      .attr('x', (d) => x(d[0]) + 20)
      .attr('y', ({ data: [name] }) => y(name) + 20)
      .attr('width', (d) => x(d[1]) - x(d[0]))
      .attr('height', y.bandwidth());

    svg.append('g').call(xAxis);

    svg.append('g').call(yAxis);
  };

  chart();
};
