import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Visualization = ({ isDarkMode }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Mock data
    const mockData = [
      { date: '2023-01-01', value: 100 },
      { date: '2023-02-01', value: 120 },
      { date: '2023-03-01', value: 110 },
      { date: '2023-04-01', value: 140 },
      { date: '2023-05-01', value: 130 },
      { date: '2023-06-01', value: 160 },
      { date: '2023-07-01', value: 180 },
      { date: '2023-08-01', value: 170 },
      { date: '2023-09-01', value: 200 },
      { date: '2023-10-01', value: 190 },
      { date: '2023-11-01', value: 220 },
      { date: '2023-12-01', value: 240 },
    ];

    createVisualization(mockData);
  }, [isDarkMode]);

  const createVisualization = (data) => {
    const margin = { top: 40, right: 80, bottom: 60, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Parse dates and numbers
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach(d => {
      d.date = parseDate(d.date);
      d.value = +d.value;
    });

    // Set up scales
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    // Create line generator
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .attr("class", isDarkMode ? "text-white" : "text-gray-800");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(y))
      .attr("class", isDarkMode ? "text-white" : "text-gray-800");

    // Add the line path
    const path = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", isDarkMode ? "#4fd1c5" : "#2b6cb0")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Animate the line drawing
    const pathLength = path.node().getTotalLength();
    path
      .attr("stroke-dasharray", pathLength)
      .attr("stroke-dashoffset", pathLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

    // Add dots
    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => x(d.date))
      .attr("cy", d => y(d.value))
      .attr("r", 0)
      .attr("fill", isDarkMode ? "#4fd1c5" : "#2b6cb0")
      .transition()
      .delay((d, i) => i * 50)
      .duration(500)
      .attr("r", 4);

    // Add tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", isDarkMode ? "#4a5568" : "#ffffff")
      .style("border", "1px solid #ddd")
      .style("border-radius", "4px")
      .style("padding", "10px")
      .style("color", isDarkMode ? "#ffffff" : "#000000");

    svg.selectAll(".dot")
      .on("mouseover", (event, d) => {
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        tooltip.html(`Date: ${d3.timeFormat("%Y-%m-%d")(d.date)}<br/>Value: ${d.value}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

    // Add title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .attr("class", `text-2xl font-bold ${isDarkMode ? "fill-white" : "fill-gray-800"}`)
      .text("Financial Data Trends");

    // Add X axis label
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .attr("text-anchor", "middle")
      .attr("class", isDarkMode ? "fill-white" : "fill-gray-800")
      .text("Date");

    // Add Y axis label
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .attr("class", isDarkMode ? "fill-white" : "fill-gray-800")
      .text("Value");
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} className="mx-auto"></svg>
    </div>
  );
};

export default D3Visualization;