import {ACTIONS} from '../globals/globalVariables'
function userReducer(state, action){
    switch (action.type) {
        case ACTIONS.CREATE_USER:
            return {
                ...state,
                user: action.payload.username,
                location: action.payload.location
            }
        case ACTIONS.DELETE_USER:
            return {
                ...state,
                user: null,
                location: null
            }
        default:
            return state;
    }
}

export default userReducer;
