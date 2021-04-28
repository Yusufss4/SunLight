function mainChart() {
    var dataPoints = [];
    var chart;
    $.getJSON("https://localhost:44335/api/students", function (data) {
        $.each(data, function (key, value) {
            dataPoints.push({ x: value.id, y: value.ldR1 });
            console.log("DataPoints in first section->")
            console.log(dataPoints);
        });
        chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "LDR1 Table"
            },
            data: [{
                type: "line",
                dataPoints: dataPoints,
            }]
        });
        chart.render();
        updateChart();
    });
    function updateChart() {
        console.log("dataPoints");
        console.log(dataPoints.length);
        $.getJSON("https://localhost:44335/api/students" + "/" + (dataPoints.length), function (value) {

            console.log("DataPoints in updateChart->")
            console.log(dataPoints);



            console.log(value.id);
            console.log(value.ldR1);
            dataPoints.push({
                x: value.id, y: value.ldR1
            });


            chart.render();
            //setTimeout(function () { updateChart() }, 1000);
        });
    }
    setInterval(function () {
        updateChart();
    }, 1000);
}
