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
            axisLine: {
                onZero: false,
            }
        },
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                onZero: false,
            }
        }
    ],
    yAxis: [{
            type: 'value',
            show: true,
            axisLine: {
                onZero: false,
            }
        },
        {
            type: 'value',
            show: true,
            axisLine: {
                onZero: false,
            }
        }
    ],
    series: [{
            stack: '测',
            yAxisIndex: 0,
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'bar',
            label: {
                fontSize: 12,
                color: '#000'
            },
        },
        {
            stack: '测',
            yAxisIndex: 0,
            data: [50, 130, 124, 118, 35, 47, 160],
            type: 'bar',
            label: {
                fontSize: 12,
                color: '#000'
            },

        }
    ],
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
            },
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
        },
        {
            name: 'Y轴',
            key: 'yAxis',
            children: [{
                    name: 'Y左',
                    children: [{
                            name: 'y1',
                            value: true,
                            type: 'switch',
                            key: 'show',
                        },
                        {
                            name: '单位',
                            value: '',
                            type: 'input',
                            key: 'name',
                        }
                    ],
                    s: 'yAxis'
                },
                {
                    name: 'Y右',
                    children: [{
                            name: 'y2',
                            value: true,
                            type: 'switch',
                            key: 'show',
                        },
                        {
                            name: '单位',
                            value: '',
                            type: 'input',
                            key: 'name',
                        }
                    ],
                    s: 'yAxis'
                }
            ],
            type: 'yAxis'
        },
        {
            name: 'X轴',
            key: 'xAxis',
            children: [{
                    name: 'X下',
                    children: [{
                        name: 'x1',
                        value: true,
                        type: 'switch',
                        key: 'show',
                    }],
                    s: 'yAxis'
                },
                {
                    name: 'X上',
                    children: [{
                        name: 'x2',
                        value: true,
                        type: 'switch',
                        key: 'show',
                    }],
                    s: 'yAxis'
                }
            ],
            type: 'yAxis'
        }
    ]
}