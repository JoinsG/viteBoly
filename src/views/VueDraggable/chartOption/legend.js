let legend = {
    name: '图例',
    key: 'legend',
    value: [{
            name: '是否显示',
            value: true,
            type: 'switch',
            key: 'show'
        },
        {
            name: '类型',
            key: 'type',
            type: 'select',
            select: [{
                    name: '不滚动',
                    value: 'plain'
                },
                {
                    name: '滚动',
                    value: 'scroll'
                }
            ]
        },
        {
            name: '图例间距',
            type: 'input',
            value: 0,
            key: 'itemGap'
        }
    ],
    type: 'legend',
}