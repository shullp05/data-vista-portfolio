import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3PieChart = ({ data, width, height, margin, isDarkMode }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2 - margin.top;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.category))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arcs = g.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.category))
      .attr("stroke", isDarkMode ? "#1a202c" : "#fff")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Add labels
    const text = arcs.append("text")
      .attr("transform", d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .attr("dy", ".35em")
      .style("text-anchor", d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? "start" : "end";
      });

    text.append("tspan")
      .text(d => d.data.category)
      .attr("fill", isDarkMode ? "#e2e8f0" : "#4a5568");

    text.append("tspan")
      .text(d => `$${d.data.value}`)
      .attr("x", 0)
      .attr("dy", "1.2em")
      .attr("fill", isDarkMode ? "#e2e8f0" : "#4a5568");

    // Add polylines
    arcs.append("polyline")
      .attr("points", d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      })
      .attr("fill", "none")
      .attr("stroke", isDarkMode ? "#e2e8f0" : "#4a5568");

  }, [data, width, height, margin, isDarkMode]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default D3PieChart;