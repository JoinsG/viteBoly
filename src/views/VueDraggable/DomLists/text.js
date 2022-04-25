let defineConfig = {
    style: [{
            name: '宽高',
            value: [{
                    name: '宽',
                    key: 'width',
                    value: 'auto',
                    type: 'input'
                },
                {
                    name: '高',
                    key: 'height',
                    value: 'auto',
                    type: 'input'
                },
            ],
            type: 'next'
        }, {
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
                    key: 'style',
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
                    type: 'color',
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
            name: '间距',
            value: [{
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
            ],
            type: 'next'
        },
        {
            name: '样式',
            type: 'next',
            value: [{
                name: '颜色',
                key: 'color',
                value: '#fff',
                type: 'color'
            }, {
                name: '粗细',
                key: 'fontWeight',
                value: '400',
                type: 'input'
            }]
        }
    ],
    data: [{
        name: '内容',
        value: [{
            name: '文字',
            key: 'text',
            value: '文字',
            type: 'input'
        }],
        type: 'next'
    }]
}

let style = {
    width: 'auto',
    height: 'auto',
    border: '0px solid #fff',
    padding: '10px 10px 10px 10px',
    margin: '0 0 0 0',
    color: '#fff',
}

let data = {
    text: '文字'
}

export {
    defineConfig,
    style,
    data
}