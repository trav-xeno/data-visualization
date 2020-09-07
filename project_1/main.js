//for now global in future it will be from DB
let count = 1;
document.getElementById("btn").addEventListener("click", () => {
  const data = {
    data1: [{ width: 200, fill: "darkslateblue", value: 2.0 }],
    data2: [{ width: 150, fill: "darkgreen", value: 1.5 }],
    data3: [{ width: 50, fill: "#770e96", value: 0.5 }],
    data4: [{ width: 350, fill: "blue", value: 3.5 }],
  };
  const chartCanvas = d3.select("#clickTest");
  const rect = chartCanvas.select("rect");
  // test and loop trhough data...this is the only way to pass data to one rect
  switch (count) {
    case 1:
      rect
        .data(data.data1)
        .attr("width", (d) => {
          return d.width;
        })
        .attr("fill", (d) => {
          return d.fill;
        });
      count++;
      break;
    case 2:
      rect
        .data(data.data2)
        .attr("width", (d) => {
          return d.width;
        })
        .attr("fill", (d) => {
          return d.fill;
        });
      count++;
      break;
    case 3:
      rect
        .data(data.data3)
        .attr("width", (d) => {
          return d.width;
        })
        .attr("fill", (d) => {
          return d.fill;
        });
      count++;
      break;
    case 4:
      rect
        .data(data.data4)
        .attr("width", (d) => {
          return d.width;
        })
        .attr("fill", (d) => {
          return d.fill;
        });
      count++;
      break;
    default:
      rect.attr("width", 100).attr("height", 50).attr("fill", "darkslateblue");
      count = 1;
      break;
  }
});

const fillStartSvg = () => {
  //used this function just for test reasons
  const startCanvas = d3
    .select("#start")
    .attr("height", 600)
    .attr("width", 500);
  console.log(startCanvas);
  //create a group
  const group = startCanvas.append("g");

  //create shapes
  const circle = group.append("circle");
  circle.attr("cx", 150).attr("cy", 150).attr("r", 50).attr("fill", "cyan");
  const rect = group.append("rect");
  rect
    .attr("x", 250)
    .attr("y", 250)
    .attr("width", 50)
    .attr("height", 50)
    .attr("fill", "darkgray");
  //create text to overlay shapes
  const text = startCanvas.append("text");
  text
    .attr("fill", "darkblue")
    .attr("x", 50)
    .attr("y", 50)
    .text("Hello D3 SVG world")
    .style("font-family", "Arial")
    .style("font-size", "25px");
};

const clickDemo = () => {
  const chartCanvas = d3
    .select("#clickTest")
    .attr("height", 600)
    .attr("width", 500);
  const rect = chartCanvas.select("rect");
  rect.attr("width", 100).attr("height", 50).attr("fill", "darkslateblue");
  const text = chartCanvas.append("text");
  text
    .attr("fill", "darkblue")
    .attr("x", 0)
    .attr("y", 100)
    .text("Change width based on data")
    .style("font-family", "Arial")
    .style("font-size", "25px");
};



const barChart = () => {
      const svg = d3.select("#barChart") ;
      const yScale = d3.scaleLinear().domain([0,1000]).range([0,500]);
      console.log(yScale(500));

    d3.json("barData.json").then( res => {
        const rects =  svg.selectAll("rect").data(res);
        console.log(rects);
        rects.enter().append("rect")
          .attr("width", 25)
          .attr("x", d=>{
            return 50 + d.distance ;
          })
          .attr("y", 0)
          .attr("height", (d) =>{
             return yScale(d.height) ;
          }).attr("fill",(d) => {
             return d.fill;
          }) 
    }); 
   
}


window.onload = () => {
  //  fillStartSvg();
  clickDemo();
  barChart();
};
