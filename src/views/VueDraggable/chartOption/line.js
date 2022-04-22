export let chart = {
    grid: {
        containLabel: true,
        bottom: 60,
        left: "10%",
        right: "10%",
        top: 60,
    },
    xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }
    ],
    yAxis: [{
            type: 'value',
            show: true,
        },
        {
            type: 'value',
            show: true,
        }
    ],
    series: [{
        color: 'red',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',

    }, {
        yAxisIndex: 1,
        color: 'red',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',

    }],
}

export let defineConfig = {
    style: [{
        name: '宽高',
        value: [{
                name: '宽',
                key: 'width',
                value: 0,
                type: 'input'
            },
            {
                name: '高',
                key: 'height',
                value: 0,
                type: 'input'
            },
        ],
        type: 'next'
    }],
    chart: [{
            name: '图标网格',
            key: 'grid',
            value: [{
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
        },
        {
            name: 'Y轴',
            key: 'yAxis',
            value: [{
                    name: 'y1',
                    key: '',
                    value: [{
                        name: '是否显示',
                        value: true,
                        type: 'switch',
                        key: 'show'
                    }],

                },
                {
                    name: 'y2',
                    key: '',
                    value: [{
                        name: '是否显示',
                        value: true,
                        type: 'switch',
                        key: 'show'
                    }]
                }
            ],
            type: 'yAxis'
        },
        {
            name: 'X轴',
            key: 'xAxis',
            value: [{
                    name: 'x1',
                    key: '',
                    value: [{
                        name: '是否显示',
                        value: true,
                        type: 'switch',
                        key: 'show'
                    }],

                },
                {
                    name: 'x2',
                    key: '',
                    value: [{
                        name: '是否显示',
                        value: true,
                        type: 'switch',
                        key: 'show'
                    }]
                }
            ],
            type: 'yAxis'
        }
    ]
}