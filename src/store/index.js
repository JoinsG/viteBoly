import { createStore } from "vuex";
// const user = require('./modules/user')
import user from "./modules/user";
import app from "./modules/app";
const store = createStore({
    state:()=>{},
    modules:{
        user,
        app
    }
})

export default store