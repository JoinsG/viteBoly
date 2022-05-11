let defaultPie = [{
    name: '半径',
    key: 'radius',
    children: [{
            name: '外半径',
            key: '[0]',
            value: '0%',
            type: 'silder',
            bind: {
                min: 0,
                max: 100,
                step: 1,
            },
            icon: {
                e: '%'
            }
        },
        {
            name: '内半径',
            key: '[1]',
            value: '0%',
            type: 'silder',
            icon: {
                e: '%'
            },
            bind: {
                min: 0,
                max: 100,
                step: 1,
            }
        }
    ],
}, {
    name: '标签',
    key: 'label',
    children: [{
            name: '是否显示',
            key: 'show',
            value: true,
            type: 'switch'
        },
        {
            name: '颜色',
            key: 'color',
            value: '#000',
            type: 'color'
        },
        {
            name: '位置',
            key: 'position',
            value: 'outside',
            type: 'select',
            select: [{
                    name: '外部',
                    value: 'outside'
                },
                {
                    name: '内部',
                    value: 'inside'
                },
                {
                    name: '中心',
                    value: 'center'
                }
            ]
        }
    ]
}]

export default defaultPie