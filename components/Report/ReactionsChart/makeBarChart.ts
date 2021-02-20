import * as d3 from 'd3';

export const makeBarChart = (element, data) => {
  let HEIGHT = 300,
    WIDTH = 500,
    margin = { top: 30, right: 0, bottom: 60, left: 30 },
    colors = {
      1: '#63171B',
      2: '#F56565',
      3: '#ED8936',
      4: '#ECC94B',
      5: '#48BB78',
    };

  let x = d3.scaleBand().range([0, WIDTH]).padding(0.2);
  let y = d3.scaleLinear().range([HEIGHT, 0]);

  const svg = d3
    .select(element)
    .html('')
    .attr('width', WIDTH + margin.left + margin.right)
    .attr('height', HEIGHT + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  function createAxisLeft(data) {
    y.domain([
      0,
      d3.max(
        data.map((e) => e.value),
        (d) => Number(d),
      ),
    ]).nice();

    svg.append('g').call(d3.axisLeft(y));
  }

  function formatText(text) {
    //   to change text we need to select it
    text
      .selectAll('text')
      .attr('style', 'font-size: 30px')
      .attr('x', 0)
      .attr('y', 30)
      .attr('dy', '.35em');
  }

  function createAxisBottom(data) {
    x.domain(data.map((e) => e.name));

    const text = svg
      .append('g')
      .attr('transform', `translate(0, ${HEIGHT})`)
      .call(d3.axisBottom(x));

    formatText(text, x);
  }

  function addLabelsToBars(bars) {
    bars
      .append('text')
      .text((d) => d.value)
      .style('opacity', 0)
      .attr('x', (d) => x(d.name) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.value) - 5)
      .attr('text-anchor', 'middle')
      .style('font-family', 'sans-serif')
      .style('font-size', '12')
      // Add animation to the labels
      .transition()
      .duration(500)
      .style('opacity', 1);
  }

  function createBars(data) {
    let bars = svg
      .selectAll('.bars')
      .data(data, (d) => d.name)
      .enter()
      .append('g')
      .attr('class', 'bars')
      .style('opacity', 1);

    // Appending rectangles
    bars
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(0))
      .attr('width', x.bandwidth())
      .attr('height', 0)
      // .style("fill", "steelblue")
      .style('fill', (d) => colors[d.rating])
      // Adding animation to rectangles
      .transition()
      .duration(750)
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => HEIGHT - y(d.value));

    addLabelsToBars(bars);
  }

  createAxisLeft(data);
  createAxisBottom(data);
  createBars(data);
};
