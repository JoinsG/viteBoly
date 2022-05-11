let opLists = [
    // {
    //     name: '进度条',
    //     class: ['progress'],
    //     style: {
    //         backgroundColor: 'pink',
    //         height: '50px',
    //         width: '100px',
    //         borderRadius: '5px 5px 5px 5px',
    //     },
    //     tasks: [],
    // },
    {
        name: '框架',
        value: [{
            name: 'wrap',
            type: 'wrap',
            class: ['flex-wrap'],
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid pink',
                padding: '10px 10px 10px 10px',
            },
        }, {
            name: 'text',
            type: 'text',
            class: ['flex-wrap'],
            style: {
                width: '100px',
                height: '100px',
                border: '1px solid pink',
                padding: '10px 10px 10px 10px',
                fontSize: '14px'
            },
        }]
    },
    // {
    //     type: 'component',
    //     name: 'car',
    //     data: {
    //         test: 100
    //     }
    // },
    {
        name: '自定义',
        value: [{
            type: 'chart',
            name: 'line',
            info: '自定义折柱'
        }]
    },
    {
        name: '折线',
        value: [{
                type: 'chart',
                name: 'lineSingle',
                info: '折线'
            },
            {
                type: 'chart',
                name: 'line-area',
                info: '折线面积'
            },
        ]
    },
    {
        name: '柱状',
        value: [{
                type: 'chart',
                name: 'barSingle',
                info: '折线'
            },
            {
                type: 'chart',
                name: 'bar-group',
                info: '折线面积'
            },
            {
                type: 'chart',
                name: 'bar-stack',
                info: '折线面积'
            },
        ]
    },
    {
        name: '饼状',
        value: [{
                type: 'chart',
                name: 'pieSingle',
                info: '饼状'
            },
        ]
    }
]
let zhanwei = {
    name: '占位',
    type: 'zw',
    style: {
        width: '100px',
        border: '1px solid red',
        padding: '10px 10px 10px 10px',
    },
    enabled: false,
}
export {
    opLists,
    zhanwei
}