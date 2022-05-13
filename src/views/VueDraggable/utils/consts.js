const labelPosition = [{
        name: '上',
        value: 'top',
    },
    {
        name: '左',
        value: 'left',
    },
    {
        name: '右',
        value: 'right',
    },
    {
        name: '下',
        value: 'bottom',
    },
    {
        name: '内',
        value: 'inside',
    },
    {
        name: '内左',
        value: 'insideLeft',
    },
    {
        name: '内右',
        value: 'insideRight',
    },
    {
        name: '内上',
        value: 'insideTop',
    },
    {
        name: '内下',
        value: 'insideBottom',
    },
    {
        name: '内左上',
        value: 'insideTopLeft',
    },
    {
        name: '内左下',
        value: 'insideBottomLeft',
    },
    {
        name: '内右上',
        value: 'insideTopRight',
    },
    {
        name: '内右下',
        value: 'insideBottomRight',
    }
]

// true:数值型的，false：非数值型
function myIsNaN(value) {
    var regPos = /^[0-9]+\.?[0-9]*$/; //判断是否是数字。
    return regPos.test(value)
}

export {
    labelPosition,
    myIsNaN
}