import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3BarChart = ({ data, width, height, margin, isDarkMode }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0 || !width || !height) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, chartWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([chartHeight, 0]);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x))
      .attr("color", isDarkMode ? "#e2e8f0" : "#4a5568");

    g.append("g")
      .call(d3.axisLeft(y))
      .attr("color", isDarkMode ? "#e2e8f0" : "#4a5568");

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.category))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => chartHeight - y(d.value))
      .attr("fill", isDarkMode ? "#60a5fa" : "#3182ce");

    // Add hover effect
    g.selectAll(".bar")
      .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", isDarkMode ? "#93c5fd" : "#63b3ed");
        g.append("text")
          .attr("class", "value-text")
          .attr("x", x(d.category) + x.bandwidth() / 2)
          .attr("y", y(d.value) - 5)
          .attr("text-anchor", "middle")
          .text(`$${d.value}`)
          .attr("fill", isDarkMode ? "#e2e8f0" : "#4a5568");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", isDarkMode ? "#60a5fa" : "#3182ce");
        g.select(".value-text").remove();
      });

  }, [data, width, height, margin, isDarkMode]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default D3BarChart;