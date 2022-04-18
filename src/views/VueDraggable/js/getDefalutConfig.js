import AllDom from '../DomLists/index.js'
import ChartList from '../chartOption/index.js'
import _ from 'lodash'

let zhanwei = {
    name: '占位',
    type: 'zw',
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
            style: AllDom[element.name].style
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
            chart: ChartList[element.name].config
        })
    }
}

export {
    getDomOptions,
    getChartOptions
}