import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3LineChart = ({ data, width, height, margin, isDarkMode }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([0, chartWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([chartHeight, 0]);

    const line = d3.line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value));

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x))
      .attr("color", isDarkMode ? "#e2e8f0" : "#4a5568");

    g.append("g")
      .call(d3.axisLeft(y))
      .attr("color", isDarkMode ? "#e2e8f0" : "#4a5568");

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", isDarkMode ? "#60a5fa" : "#3182ce")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add hover effect
    const focus = g.append("g")
      .attr("class", "focus")
      .style("display", "none");

    focus.append("circle")
      .attr("r", 5)
      .attr("fill", isDarkMode ? "#60a5fa" : "#3182ce");

    focus.append("text")
      .attr("x", 15)
      .attr("dy", ".31em")
      .attr("fill", isDarkMode ? "#e2e8f0" : "#4a5568");

    svg.append("rect")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .attr("width", chartWidth)
      .attr("height", chartHeight)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => focus.style("display", null))
      .on("mouseout", () => focus.style("display", "none"))
      .on("mousemove", mousemove);

    function mousemove(event) {
      const bisect = d3.bisector(d => new Date(d.date)).left;
      const x0 = x.invert(d3.pointer(event)[0]);
      const i = bisect(data, x0, 1);
      const d0 = data[i - 1];
      const d1 = data[i];
      const d = x0 - new Date(d0.date) > new Date(d1.date) - x0 ? d1 : d0;
      focus.attr("transform", `translate(${x(new Date(d.date))},${y(d.value)})`);
      focus.select("text").text(`${d.date}: $${d.value}`);
    }
  }, [data, width, height, margin, isDarkMode]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default D3LineChart;