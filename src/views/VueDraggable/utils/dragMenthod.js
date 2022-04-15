let dragStart = function (element, s) {
    console.log(element)
    console.log(s)
    return false
}
let dragMove = function (element, s) {
    console.log(element)
    console.log(s)
    let enabled = element.draggedContext.element.enabled ?? true
    console.log(enabled)
    return enabled
}
let dragEnd = function (element, s) {
    console.log(element)
    console.log(s)
    return true
}
let dragClone = function (element, s) {
    console.log(element)
    console.log(s)
    return true
}
let dragAdd = function (element, s) {
    return true
}


export {
    dragStart,
    dragMove,
    dragEnd,
    dragClone,
    dragAdd
}