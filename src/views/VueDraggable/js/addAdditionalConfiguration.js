import axis from '../chartOption/default/axis.js'
import legend from '../chartOption/default/legend.js'
import _ from 'lodash'


export function handlerLineBar(option) {
    let axisName = ['Y轴', 'X轴']
    axisName.forEach(itemName => {
        let findItem = option.chart.find(opItem => opItem.name === itemName)
        if (findItem) {
            findItem.children.forEach(childItem => {
                childItem.children.push(..._.cloneDeep(axis))
            })
        }
    })
    
    return option
}


export function handlerLegend(option) {
    option.chart.push(..._.cloneDeep(legend))
    return option
}