var defaultData = 'https://raw.githubusercontent.com/pvfrota/pvfrota.github.io/master/vacina-manaus/db/area_count.csv';

function areaCountChart() {
    Highcharts.chart('area-count-chart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Vacinas aplicadas por zona (área) de Manaus'
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },
        data: {
            csvURL: defaultData,
            enablePolling: true,
            dataRefreshRate: 10
        }
    });
}

// Create the chart
areaCountChart();