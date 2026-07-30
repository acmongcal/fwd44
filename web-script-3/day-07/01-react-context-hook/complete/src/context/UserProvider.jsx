import { useState } from 'react';
import { UserContext } from './UserContext';


export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const createUser = (newUser) => {
    setUser(newUser);
  };

  const deleteUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}