import React, { useReducer, useEffect } from "react";
import { UserContext } from "./UserContext";
import userReducer from "./AppReducer";
import {
  appStorageName,
  initialState,
  ACTIONS,
} from "../globals/globalVariables";

// Provider component
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const userFromStorage = localStorage.getItem(appStorageName);
    if (userFromStorage) {
      try {
        const user = JSON.parse(userFromStorage);
        dispatch({
          type: ACTIONS.CREATE_USER,
          payload: user,
        });
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem(appStorageName);
      }
    }
  }, []);

  // Actions
  const createUser = (userData) => {
    const userForStorage = JSON.stringify(userData);
    localStorage.setItem(appStorageName, userForStorage);
    dispatch({
      type: ACTIONS.CREATE_USER,
      payload: userData,
    });
  };

  const deleteUser = () => {
    localStorage.removeItem(appStorageName);
    dispatch({ type: ACTIONS.DELETE_USER });
  };

  const value = {
    user: state,
    createUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;