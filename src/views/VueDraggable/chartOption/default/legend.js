let defaultLegend = [{
    name: '图例',
    key: 'legend',
    children: [
        {
            name: '是否显示',
            key: 'show',
            value: false,
            type: 'switch',
        },
        {
            name: '左间距',
            key: 'left',
            value: 'auto',
            type: 'input',
        },
        {
            name: '上间距',
            key: 'top',
            value: 'auto',
            type: 'input',
        },
        {
            name: '图标宽',
            key: 'itemWidth',
            value: 25,
            type: 'input',
        },
        {
            name: '图标高',
            key: 'itemHeight',
            value: 14,
            type: 'input',
        },
        {
            name: '元素间距',
            key: 'itemGap',
            value: 10,
            type: 'input'
        },
        {
            name: '排列布局',
            key: 'orient',
            value: 'horizontal',
            type: 'select',
            select: [{
                    name: '横向',
                    value: 'horizontal',
                },
                {
                    name: '纵向',
                    value: 'vertical',
                }
            ]
        },
        {
            name: '图标类型',
            key: 'icon',
            value: 'circle',
            type: 'select',
            select: [{
                    name: '圆形',
                    value: 'circle',
                },
                {
                    name: '方形',
                    value: 'rect',
                },
                {
                    name: '钝角',
                    value: 'roundRect',
                },
                {
                    name: '三角形',
                    value: 'triangle',
                },
                {
                    name: '钻石',
                    value: 'diamond',
                },
                {
                    name: '箭头',
                    value: 'arrow',
                },
                {
                    name: '无',
                    value: 'none',
                },
            ]
        },
        {
            name: '文字样式',
            key: 'textStyle',
            children: [{
                    name: '大小',
                    key: 'fontSize',
                    type: 'input',
                    value: '12',
                },
                {
                    name: '颜色',
                    key: 'color',
                    type: 'color',
                    value: '#000',
                }
            ]
        }
    ]
}]


export default defaultLegend