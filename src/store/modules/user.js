// import { defineComponent, reactive, getCurrentInstance } from 'vue'
// let {proxy} = getCurrentInstance()
export default {
    namespaced: true,
    state: {
        username: 'JoinsG',
    },
    getters: {
        getUserName: (state) => {
            return state.username
        }
    },
    actions: {
        testUser({
            state
        }) {
            console.log(state);
            state.username = 'JoinsG1111111';
        },
        async login({},{data}){
            // let [sucess,error] = proxy.$http({
            //     url: 'violet-api/login',
            //     method: 'post',
            //     data
            // })
        },
        logout({
            state
        }) {
            console.log('logout');
        }
    }
}