import React, { useState, createContext, useContext} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: 'Marco Ferreira',
  })

  const [userLogged, setUserLogged] = useState();

  return (
    <AuthContext.Provider value={{user, setUser, userLogged, setUserLogged}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);