export default {
    namespaced: true,
    state: {
        username: 'test',
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
        logout({
            state
        }) {

        }
    }
}