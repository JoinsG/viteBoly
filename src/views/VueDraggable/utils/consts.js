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


// 图片颜色
export const colorCol = [
    '#0060FF',
    '#1EE4DC',
    '#FFD71A',
    '#ff5A18',
    '#362D78',
    '#9270CA',
    '#FF99C3',
    '#8e7738',
    '#269A99',
    '#5B8FF9',
    '#FF99C3',
    '#DB6BCF',
    '#BDD2FD',
    '#5AD8A6',
    '#BDEFDB',
    '#5D7092',
    '#C2C8D5',
    '#F6BD16',
    '#FBE5A2',
    '#E8684A',
    '#F6C3B7',
    '#5B8FF9',
    '#5AD8A6',
    '#025DF4'
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