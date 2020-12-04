import React, { useEffect, useState } from "react";
import * as d3 from "d3";

function Graph(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    fetch(props.data)
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const canvas = d3.select("#canvas");

  const width = 700;
  const height = 500;

  const margin = { top: 10, left: 80, bottom: 40, right: 10 };
  const iwidth = width - margin.left - margin.right;
  const iheight = height - margin.top - margin.bottom;


  const svg = canvas.append("svg");
  svg.attr("width", width);
  svg.attr("height", height);

  let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

   const y = d3.scaleLinear() 
  .domain([0, 1100])
  .range([iheight, 0]);

const x = d3.scaleBand()
.domain(pokemons.map(d => d.name) ) 
.range([0, iwidth])
.padding(0.1); 

const bars = g.selectAll("rect").data(pokemons);

bars.enter().append("rect")
.attr("class", "bar")
.style("fill", "steelblue")
.attr("x", d => x(d.name))
.attr("y", d => y(d.height))
.attr("height", d => iheight - y(d.height))
.attr("width", x.bandwidth())  

g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div id="canvas"></div>
        </div>
      </div>
    </div>
  );
}
export default Graph;
