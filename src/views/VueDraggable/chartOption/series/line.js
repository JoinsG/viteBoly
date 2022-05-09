let defaultLine = [{
        name: '对应X轴',
        key: 'xAxisIndex',
        value: 0,
        type: 'input',
    },
    {
        name: '对应Y轴',
        key: 'yAxisIndex',
        value: 0,
        type: 'input',
    },
    {
        name: '堆叠组名',
        key: 'stack',
        value: '',
        type: 'input',
    },
    {
        name: '平滑程度',
        key: 'smooth',
        value: 0,
        type: 'silder',
        bind: {
            min: 0,
            max: 1,
            step: 0.1,
            showInput: true
        }
    },
    {
        name: '是否梯线',
        key: 'step',
        value: false,
        type: 'select',
        select: [{
                name: '不显示',
                value: false,
            },
            {
                name: '前部',
                value: 'start',
            },
            {
                name: '中部',
                value: 'middle',
            },
            {
                name: '尾部',
                value: 'end',
            },
        ],
    },
    {
        name: '标签',
        key: 'label',
        children: [{
                key: 'show',
                name: '是否显示',
                value: false,
                type: 'switch',
            },
            {
                key: 'color',
                name: '颜色',
                value: '#000',
                type: 'color',
            },
            {
                key: 'fontSize',
                name: '字体大小',
                value: 12,
                type: 'input',
            },
        ],
        type: 'next',
    },
    {
        name: '线条样式',
        key: 'lineStyle',
        children: [{
                key: 'width',
                name: '宽度',
                value: 2,
                type: 'input',
            },
            {
                key: 'color',
                name: '颜色',
                value: '#000',
                type: 'color',
            },
            {
                key: 'type',
                name: '类型',
                value: 'solid',
                type: 'select',
                value: [{
                        name: '直线',
                        value: 'solid',
                    },
                    {
                        name: '虚线',
                        value: 'dashed',
                    }
                ]
            },
        ],
        type: 'next',
    },
]