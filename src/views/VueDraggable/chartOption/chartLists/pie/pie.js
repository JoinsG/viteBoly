export let chart = {
    grid: {
        containLabel: true,
        bottom: 60,
        left: "10%",
        right: "10%",
        top: 60,
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {},
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['0%', '75%'],
        roseType:'radius',
        data: [{
                value: 1048,
                name: 'Search Engine'
            },
            {
                value: 735,
                name: 'Direct'
            },
            {
                value: 580,
                name: 'Email'
            },
            {
                value: 484,
                name: 'Union Ads'
            },
            {
                value: 300,
                name: 'Video Ads'
            }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            show: true,
            color: '#000',
            position: 'outside',
        }
    }]
}

export let defineConfig = {
    style: [{
        name: '宽高',
        children: [{
                name: '宽',
                key: 'width',
                value: 500,
                type: 'input'
            },
            {
                name: '高',
                key: 'height',
                value: 500,
                type: 'input'
            }
        ],
        type: 'next'
    }],
    chart: [{
        name: '图标网格',
        key: 'grid',
        children: [{
                name: '上间',
                key: 'top',
                value: '60',
                type: 'input',
            },
            {
                name: '下间',
                key: 'bottom',
                value: '60',
                type: 'input',
            },
            {
                name: '右间',
                key: 'right',
                value: '10%',
                type: 'input',
            },
            {
                name: '左间',
                key: 'left',
                value: '10%',
                type: 'input',
            }
        ],
    }]
}