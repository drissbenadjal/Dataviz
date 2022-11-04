// The svg
function affichePays(namePays, pays) {
    d3.selectAll("#my_dataviz g").remove()
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
       
        console.log(pays[namePays].scale) 
    // Map and projection
    var projection = d3.geoMercator()
        .center([pays[namePays].long, pays[namePays].lat])                // GPS of location to zoom on
        .scale(pays[namePays].scale)               // This is like the zoom
        .translate([width / 2, height / 2])

    // Load external data and boot
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function (data) {

        // Filter data
        data.features = data.features.filter(function (d) { return d.properties.name == namePays })
        //console.log(d.properties.name)
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("fill", "#090909")
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            .style("stroke", "none")
    })
}

