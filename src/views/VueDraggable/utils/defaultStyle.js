let styleDefalut = {
    width: 0,
    height: 0,
    border: {
        width: 0,
        type: [{
                name: '直线',
                value: 'solid'
            },
            {
                name: '虚线',
                value: 'dashed'
            }
        ],
        color: '#fff'
    },
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
}

let styleDefalut = [{
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
    {
        name: '边框',
        show: false,
        key: 'border',
        value: [{
                name: '宽度',
                key: 'width',
                value: 0,
                type: 'input'
            },
            {
                name: '样式',
                key: 'width',
                value: 'solid',
                type: 'select',
                select: [{
                        name: '直线',
                        value: 'solid'
                    },
                    {
                        name: '虚线',
                        value: 'dashed'
                    }
                ]
            },
            {
                name: '颜色',
                key: 'color',
                value: '#fff',
                type: 'input',
            },
            {
                name: '圆角',
                key: 'radius',
                value: [0, 0, 0, 0],
                type: 'Array',
            }
        ],
        type: 'next'
    },
    {
        name: '外间',
        key: 'margin',
        value: [0, 0, 0, 0],
        type: 'Array'
    },
    {
        name: '内间',
        key: 'padding',
        value: [0, 0, 0, 0],
        type: 'Array'
    },
]