let defaultLine = [{
        name: '单位',
        key: 'name',
        value: '',
        type: 'input'
    },
    {
        name: '是否两边留白',
        key: 'boundaryGap',
        value: false,
        type: 'switch'
    },
    {
        name: '最小值',
        key: 'min',
        value: 0,
        type: 'input'
    },
    {
        name: '最大值',
        key: 'max',
        value: 0,
        type: 'input'
    },
    {
        name: '分割段数',
        key: 'splitNumber',
        value: 5,
        type: 'input'
    },
    {
        name: '分割段数',
        key: 'splitNumber',
        value: 5,
        type: 'input',
        info: '只在数值轴或时间轴中（type: value 或time）有效。'
    },
    {
        name: '坐标轴轴线',
        key: 'axisLine',
        children: [{
            name: '是否显示',
            key: 'show',
            type: 'switch',
            value: true,
        }]
    },
    {
        name: '坐标轴刻度',
        key: 'axisTick',
        children: [{
            name: '是否显示',
            key: 'show',
            type: 'switch',
            value: true,
        }]
    },
    {
        name: '坐标轴标签',
        key: 'axisLabel',
        children: [{
                name: '是否显示',
                key: 'show',
                type: 'switch',
                value: true,
            },
            {
                name: '颜色',
                key: 'color',
                type: 'color',
                value: '#000',
            },
            {
                name: '大小',
                key: 'fontSize',
                type: 'input',
                value: 12,
            },
            {
                name: '名字旋转角度',
                key: 'rotate',
                type: 'slider',
                value: 0,
                bind: {
                    step: 1,
                    max: 360,
                    min: 0,
                }
            }
        ]
    }
]


export default defaultLine