let opLists = [{
        name: '进度条',
        class:['progress'],
        style: {
            backgroundColor: 'pink',
            height: '50px',
            width: '100px',
            borderRadius: '5px 5px 5px 5px',
        },
        tasks: [],
    },
    {
        name: '容器',
        type: 'wrap',
        class: ['flex-wrap'],
        style: {
            width: '200px',
            height:'200px',
            border: '1px solid pink',
            padding: '10px 10px 10px 10px',
        },
    },
    {
        type: 'component',
        name: 'car',
        data: {
            test: 100
        }
    },
    {
        name: 'chart 3',
        tasks: [],
    },
    {
        type: 'chart',
        name: 'line',
    },
    {
        type: 'chart',
        name: 'area',
    },
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