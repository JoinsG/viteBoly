export let areaStyle = {
    name: '面积样式',
    key: 'areaStyle',
    value: [{
            name: '颜色',
            key: 'color',
            value: '#000',

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