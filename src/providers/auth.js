import React, { useState, createContext, useContext, useEffect } from 'react';
import Loading from '../components/Loading';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({})
  const [isAuthenticating , setIsAuthenticating] = useState(true)

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
    setTimeout(() => {
      setIsAuthenticating(false);
    }, 1500);
  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {
        isAuthenticating ?
          <Loading /> : props.children
      }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);