document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            innerHeight: 500
        },
        title: {
            text: "Runtime for Streaming Services"
        },
        credits: {
            enabled: false
        },
        colors: ['#F92525', '#25A9F9', '#C225F9', '#28F925'],
        yAxis: {
            title: {
                text: "Minutes"
            }
        },
        tooltip: {
            animation: false,
            backgroundColor: '#FFFF', 
            borderColor: "#000000", 
            borderRadius: 20, 
            followPointer: true,

            /* formatter() {
                let s = `<strong>X value is: </strong> ${this.x}.`;
                this.points.forEach(function(point) {
                    s += `<br>Y value is: ${point.y} - ${point.series.name}`;
                })
                return s;
            }, */

            shared: true
        },

        xAxis: {
            title: {
                text:"Production Year (Click streaming services below to select/deselct)"
            }
        }, 
        data: {
            csvURL:
              "https://raw.githubusercontent.com/suber-mhci/pui_final/master/runtime_data.csv"
          }
    });
});
  