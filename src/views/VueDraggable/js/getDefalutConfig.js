import AllDom from '../DomLists/index.js'
import ChartList from '../chartOption/index.js'
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


function getChartOptions(element) {
    return {
        type: 'chart',
        mode:element.name,
        ..._.cloneDeep({
            style: {
                width: '500px',
                height: '500px',
            },
            chart: ChartList[element.name].chart,
            defineConfig: addAdditionalConfigurationHandler(ChartList[element.name].defineConfig, element.name)
        })
    }
}


function addAdditionalConfigurationHandler(options, name) {
    switch (name) {
        case 'lineSingle':
        case 'barSingle':
            handlerLineBar(options)
            handlerLegend(options)
            return options
        case 'pieSingle':
            return handlerLegend(options)
    }
}


export {
    getDomOptions,
    getChartOptions,
    getTextOptions
}