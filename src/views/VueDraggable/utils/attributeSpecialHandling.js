import {
    checkValType,
    checkValNum,
    checkPrototypeVal
} from './utils'
import {
    useUserStore
} from '@/store-pinia/draggable'
import _ from 'lodash'
let axisSpecialhandled = function (valO) {
    let [key, val] = Object.entries(valO)[0]
    if (checkPrototypeVal({
            val,
            type: 'Array'
        })) {
        for (let index = 0; index < val.length; index++) {
            console.log(val[index])
            if (!val[index]) {
                val[index] = {}
            }
        }
    }
}


let radiusSpecialhandled = function (val) {
    const useUserStoreConst = useUserStore()
    _.set(val, 'series', useUserStoreConst.getChartSeries)
}


export {
    axisSpecialhandled,
    radiusSpecialhandled
}