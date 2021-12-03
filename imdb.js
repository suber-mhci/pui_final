document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            innerHeight: 500
        },
        title: {
            text: "IMDB Score for Streaming"
        },
        credits: {
            enabled: false
        },
        colors: ['#F92525', '#25A9F9', '#C225F9', '#28F925'],
        yAxis: {
            title: {
                text: "Budget"
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
            categories: ['Apples', 'Bananas', 'Oranges']
            ,title: {
                text:"Production Year"
            }
        }, 
        data: {
            csvURL:
              "https://raw.githubusercontent.com/suber-mhci/tutorials/master/imdb_data.csv"
          }
    });
});
  