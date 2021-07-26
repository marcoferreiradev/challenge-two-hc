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

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);