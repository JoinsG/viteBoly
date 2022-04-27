let defaultLine = [{
        name: '对应X轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input'
    },
    {
        name: '对应Y轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input'
    },
    {
        name: '堆叠组名',
        key: 'stack',
        value: '',
        type: 'input'
    },
    {
        name: '是否梯线',
        key: 'step',
        value: false,
        type: 'switch'
    },
    {
        name: '标签',
        key: 'label',
        value: [{
                key: 'show',
                name: '是否显示',
                value: true,
                type: 'switch'
            },
            {
                key: 'color',
                name: '颜色',
                value: '#000',
                type: 'color'
            },
            {
                key: 'fontSize',
                name: '字体大小',
                value: 12,
                type: 'input'
            },
        ],
        type: 'next'
    },
    {
        name: '线条样式',
        key: 'lineStyle',
        value: [{
                key: 'width',
                name: '宽度',
                value: 2,
                type: 'input'
            },
            {
                key: 'color',
                name: '颜色',
                value: '#000',
                type: 'color'
            }
        ],
        type: 'next'
    }
]