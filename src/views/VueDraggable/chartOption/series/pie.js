let defaultPie = [{
    name: '半径',
    key: 'radius',
    children: [{
            name: '内半径',
            key: '[0]',
            value: 0,
            type: 'slider',
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
            name: '外半径',
            key: '[1]',
            value: 75,
            type: 'slider',
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
},
{
    name:'图形类型',
    key:'roseType',
    value: 'radius',
    type:'select',
    select:[
        {
            name:'圆形',
            value: false
        },
        {
            name: '南丁格尔图-1',
            value:'radius'
        },
        {
            name:'南丁格尔图-2',
            value:'area'
        }
    ]
},
 {
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
        },
        {
            name: '字体大小',
            key: 'fontSize',
            value: 12,
            type: 'input'
        },
        {
            name: '字体粗细',
            key: 'fontWeight',
            value: 'normal',
            type: 'select',
            select: [{
                    name: '正常',
                    value: 'normal'
                },
                {
                    name: '粗',
                    value: 'bold'
                },
                {
                    name: '更粗',
                    value: 'bolder'
                },
                {
                    name: '细',
                    value: 'lighter'
                }
            ]
        },
    ]
}]

export default defaultPie