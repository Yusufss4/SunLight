function mainChart() {
    var dataPointsLDR1 = [];
    var dataPointsLDR2 = [];
    var chart;
    $.getJSON("https://localhost:44335/api/students", function (data) {
        $.each(data, function (key, value) {
            dataPointsLDR1.push({ x: value.id, y: value.ldR1 });
            dataPointsLDR2.push({ x: value.id, y: value.ldR2 });
            console.log("DataPoints in first section->")
            console.log(dataPointsLDR1); console.log(dataPointsLDR2);
        });
        chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "LDR1 - LDR2 Table"
            },
            axisX: {
                //valueFormatString: "DD MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: false
                }
            },
            axisY: {
                title: "LDR Value",
                includeZero: true,
                crosshair: {
                    enabled: true
                }
            },
            toolTip: {
                shared: true
            },  
            legend: {
                cursor: "pointer",
                verticalAlign: "bottom",
                horizontalAlign: "left",
                dockInsidePlotArea: true,
                itemclick: toogleDataSeries
            },
            data: [{
                type: "line",
                showInLegend: true,
                name: "LDR1",
                //markerType: "square",
                color: "#12253f",
                dataPoints: dataPointsLDR1,
            },
                {
                    type: "line",
                    showInLegend: true,
                    name: "LDR2", 
                    lineDashType: "dash",
                    color: "#6666ff",
                    dataPoints: dataPointsLDR2,
                }


            ]
        });
        chart.render();
        updateChart();
    });

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    function updateChart() {
        console.log("dataPoints");
        console.log(dataPointsLDR1.length);
        $.getJSON("https://localhost:44335/api/students" + "/" + (dataPointsLDR1.length), function (value) {

            console.log("DataPoints in updateChart->")
            console.log(dataPointsLDR1);
            console.log(value.id);
            console.log(value.ldR1);
            dataPointsLDR1.push({
                x: value.id, y: value.ldR1
            });
            dataPointsLDR2.push({
                x: value.id, y: value.ldR2
            });

            chart.render();
            //setTimeout(function () { updateChart() }, 1000);
        });
    }
    setInterval(function () {
        updateChart();
    }, 1000);
}
