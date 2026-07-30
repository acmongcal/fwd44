import {  initialState, UserContext } from './UserContext';
import { useReducer } from 'react';
import AppReducer from './AppReducer';

// Provider component
function UserReducerProvider({ children }){
    const [state,dispatch] = useReducer(AppReducer, initialState);
    const createUser = (user) => {
        dispatch({
            type:'CREATE_USER',
            payload:user
        })
    }
    const deleteUser = (user) => {
        dispatch({
            type:'DELETE_USER',
            payload:null
        })
    }

    return (
        <UserContext.Provider>
            value = {{
                user: state.user,
                createUser,
                deleteUser
            }}
        </UserContext.Provider>
    )
}

export { UserReducerProvider }
