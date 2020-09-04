const onStartUp = () =>{
    const d3Canvas = d3.select("#chart")
        .attr("height", 600)
        .attr("width", 500);
    console.log(d3Canvas) ;
//create a group
    const group = d3Canvas.append("g");

//create shapes
    const circle = group.append("circle");
        circle.attr("cx",150)
            .attr("cy", 150)
            .attr("r",50)
            .attr("fill", "cyan");
    const rect = group.append("rect");
        rect.attr("x", 250)
            .attr("y", 250)
            .attr("width", 50)
            .attr("height", 50)
            .attr("fill", "darkgray");
    //create text to overlay shapes 
    const text = d3Canvas.append("text") ;
        text.attr("fill", "darkblue")
            .attr("x", 50)
            .attr("y", 50) 
            .text("Hello D3 SVG world")
            .style("font-family", "Arial")
            .style("font-size", "25px");
}

window.onload = () =>{
    onStartUp()
}
