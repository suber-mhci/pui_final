document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            innerHeight: 500
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, {point.y}.'
            }
        },
        title: {
            text: "Target Age Groups for Streaming"
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
            title: {
                text:"Production Year (Click streaming services below to select/deselect)"
            }
        }, 
        data: {
            csvURL:
              "https://raw.githubusercontent.com/suber-mhci/tutorials/master/age_data.csv"
          }, 
          plotOptions: {
            series: {
                // ...
                events: {
                    click: function () {
                        // Sonify the series when clicked
                        this.sonify({
                            instruments: [{
                                instrument: 'triangleMajor',
                                instrumentMapping: {
                                    volume: 0.8,
                                    duration: 200,
                                    pan: 'x',
                                    frequency: 'y'
                                },
                                // Start at C5 note, end at C6
                                instrumentOptions: {
                                    minFrequency: 520,
                                    maxFrequency: 1050
                                }
                            }]
                        });
                    }
                }
            }
        }
    });
});
  