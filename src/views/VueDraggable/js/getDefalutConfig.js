import AllDom from '../DomLists/index.js'
import ChartList from '../chartOption/index.js'
import _ from 'lodash'

let zhanwei = {
    name: '占位',
    type: 'zw',
    class:['no-drag'],
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
            type:'wrap',
            tasks: [{
                ...zhanwei
            }],
            style: AllDom[element.name].style,
            defineConfig:AllDom[element.name].defineConfig
        })
    }
}


function getChartOptions(element) {
    return {
        type: 'chart',
        ..._.cloneDeep({
            style: {
                width: '500px',
                height: '500px',
            },
            chart: ChartList[element.name].chart,
            defineConfig: ChartList[element.name].defineConfig
        })
    }
}

export {
    getDomOptions,
    getChartOptions
}