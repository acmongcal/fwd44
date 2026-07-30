import { useState } from 'react';
import { UserContext } from './UserContext';
import { Children } from 'react';

export function UserProvider({ Children }) {
  const [user, setUser] = useState(null);
  const createUser = (newUser) => {
    setUser(newUser);
  }

  const deleteUser = ( ) =>{
    setUser(null);
  }

  return (
    <UserContext 
      value = {{
        user,
        createUser,
        deleteUser
      }}>
      {Children}
    </UserContext>
  )
}