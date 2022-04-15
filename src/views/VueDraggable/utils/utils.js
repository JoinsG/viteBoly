export function checkValType({
    value,
    key
}) {
    let v = parseFloat(value)
    let whiteList = ['width', 'height','left', 'right', 'top', 'bottom']
    if (whiteList.includes(key)) {
        
        if (value === 'auto') {
            return value
        }
        if (isNaN(v)) {
            return 0 + 'px'
        }
        if ((value + '').includes('%')) {
            return value
        } else {
            return value + 'px'
        }
    } else {
        return value
    }
}

export function checkValNum({
    value,
    key
}){
    let v = parseFloat(value)
    if(value === 'auto') {return value}
    if((value + '').includes('%')&&!isNaN(v)){return value}
    return v
}