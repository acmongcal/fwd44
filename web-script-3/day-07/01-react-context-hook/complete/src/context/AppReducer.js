function AppReducer(state, action){
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'DELETE_USER':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export default AppReducer;
