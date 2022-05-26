import AllDom from '../DomLists/index.js'
import ChartList from '../chartOption/index.js'
import {colorCol} from "../utils/consts"
import _ from 'lodash'
import {
    handlerLineBar,handlerLegend
} from './addAdditionalConfiguration'
let zhanwei = {
    name: '占位',
    type: 'zw',
    class: ['no-drag'],
    style: {
        width: '100px',
        border: '1px solid red',
        padding: '10px 10px 10px 10px',
    },
}
//容器
function getDomOptions(element) {
    console.log(AllDom[element.name].style);
    return {
        ..._.cloneDeep({
            type: 'wrap',
            tasks: [{
                ...zhanwei
            }],
            style: AllDom[element.name].style,
            defineConfig: AllDom[element.name].defineConfig
        })
    }
}
//文字
function getTextOptions(element) {
    console.log(AllDom[element.name].style);
    return {
        ..._.cloneDeep({
            type: 'text',
            style: AllDom[element.name].style,
            defineConfig: AllDom[element.name].defineConfig,
            data: AllDom[element.name].data,
        })
    }
}

//图表
function getChartOptions(element) {
    return {
        type: 'chart',
        mode:element.name === 'chartLineBar'?'custom':'',
        ..._.cloneDeep({
            style: {
                width: '500px',
                height: '500px',
            },
            chart:{color:colorCol,..._.cloneDeep(ChartList[element.name].chart)},
            // defineConfig: addAdditionalConfigurationHandler(ChartList[element.name].defineConfig, element.name)
            defineConfig: addAdditionalConfigurationHandler(_.cloneDeep(ChartList[element.name].defineConfig), element.name)
        })
    }
}


function addAdditionalConfigurationHandler(options, name) {
    switch (name) {
        case 'chartLineBar':
        case 'lineSingle':
        case 'barSingle':
        case 'barGroup':
        case 'barStack':
            handlerLineBar(options)
            handlerLegend(options)
            return options
        case 'pieSingle':
             handlerLegend(options)
             return options
    }
}


export {
    getDomOptions,
    getChartOptions,
    getTextOptions
}