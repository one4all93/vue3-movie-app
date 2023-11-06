export default {
    // module!
    namespaced: true,
    // data!
    state: ()=>({
        movies : [],
    }),
    //copmuted!
    getters: {
        movieIds(state){
            return state.movies.map(m => m.imdbID)
        }
    },
    // methods!
    mutaions: {
        resetMovies(state){
            state.movies = []
        }
    },
    // 비동기
    actions: {
        searchMovies({ state , getters}){
            // context.state
            // context.getters
            // context.commit
        }
    },
}