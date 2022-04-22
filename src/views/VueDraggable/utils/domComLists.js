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
            name: '文字',
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
        name: '折线坐标轴',
        value: [{
            type: 'chart',
            name: 'line',
        }, {
            type: 'chart',
            name: 'line',
        }]
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