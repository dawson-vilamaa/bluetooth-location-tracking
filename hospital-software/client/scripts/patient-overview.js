Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Patient Overview'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },

    series: [{    
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Waiting Room',
            y: 43,
            sliced: true,
            selected: true
        }, {
            name: 'Neurology',
            y: 22
        },  {
            name: 'Cancer Center',
            y: 15
        }, {
            name: 'Dermatology',
            y: 30
        },  {
            name: 'Other',
            y: 10
        }]
    }]
});
