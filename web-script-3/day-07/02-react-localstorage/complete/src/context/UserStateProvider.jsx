import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { appStorageName, initialState } from "../globals/globalVariables";

function UserStateProvider({ children }) {
  const [userState, setUserState] = useState(initialState);

  useEffect(() => {
    const userFromStorage = localStorage.getItem(appStorageName);

    if (userFromStorage) {
      try {
        const parsedUser = JSON.parse(userFromStorage);
        setUserState(parsedUser);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem(appStorageName);
      }
    }
  }, []);

  const createUser = (userData) => {
    const newUser = {
      user: userData.username,
      location: userData.location,
    };

    localStorage.setItem(appStorageName, JSON.stringify(newUser));
    setUserState(newUser);
  };

  const deleteUser = () => {
    localStorage.removeItem(appStorageName);
    setUserState(initialState);
  };

  const value = {
    user: userState,
    createUser,
    deleteUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserStateProvider;