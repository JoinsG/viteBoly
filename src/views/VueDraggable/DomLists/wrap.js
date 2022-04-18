let config = [{
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
                value: [
                    {
                        name: '上左',
                        key: 'top-left',
                        value: '0',
                        type: 'input',
                    },
                    {
                        name: '上右',
                        key: 'top-right',
                        value: '0',
                        type: 'input',
                    },
                    {
                        name: '下左',
                        key: 'bottom-left',
                        value: '0',
                        type: 'input',
                    },
                    {
                        name: '下右',
                        key: 'bottom-right',
                        value: '0',
                        type: 'input',
                    }
                ],
                type: 'Array',
            }
        ],
        type: 'Array'
    },
    {
        name: '外间',
        key: 'margin',
        value: [{
                name: '上',
                key: 'top',
                value: '0',
                type: 'input',
            },
            {
                name: '右',
                key: 'right',
                value: '0',
                type: 'input',
            },
            {
                name: '下',
                key: 'bottom',
                value: '0',
                type: 'input',
            },
            {
                name: '左',
                key: 'left',
                value: '0',
                type: 'input',
            }
        ],
        type: 'Array'
    },
    {
        name: '内间',
        key: 'padding',
        value: [
            {
                name: '上',
                key: 'top',
                value: '0',
                type: 'input',
            },
            {
                name: '右',
                key: 'right',
                value: '0',
                type: 'input',
            },
            {
                name: '下',
                key: 'bottom',
                value: '0',
                type: 'input',
            },
            {
                name: '左',
                key: 'left',
                value: '0',
                type: 'input',
            }
        ],
        type: 'Array'
    },
]

let style = {
    width: '200px',
    height: '200px',
    border: '1px solid pink',
    padding: '10px 10px 10px 10px',
    margin: '0 0 0 0'
}

export {
    config,
    style
}