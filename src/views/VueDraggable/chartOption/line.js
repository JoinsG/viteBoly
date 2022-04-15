export let line = {
    grid: {
        container: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        color: 'red',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
    }, ],
}