import { useReducer } from 'react';
import AppReducer from './AppReducer';
import { UserContext, initialState } from './UserContext';

// Provider component
function UserProvider({ children }){
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const createUser = (user) => {
        dispatch({
            type: 'CREATE_USER',
            payload: user
        })
    }

    const deleteUser = () => {
        dispatch({
            type: 'DELETE_USER',
            payload: null
        })
    }

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                createUser,
                deleteUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
