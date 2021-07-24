import React, { useState, createContext, useContext, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if(userStorage) {
      setUser(JSON.parse(userStorage))
    } else {
      setUser({
        name: '',
        isAuthenticated: false,
      })
    }
  }, [])

  const [userLogged, setUserLogged] = useState();

  return (
    <AuthContext.Provider value={{user, setUser, userLogged, setUserLogged}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);