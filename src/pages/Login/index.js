import React, { useState } from 'react'
import { useAuth } from "../../providers/auth";

function Login() {
  const [input, setInput] = useState({
    name: '',
  });
  const { user, setUser  } = useAuth();

  const handleLogin = () => {
    const loginData = {...input, isAuthenticated: true};
    localStorage.setItem('user', JSON.stringify(loginData));
    setUser(loginData);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({
      name: "",
      isAuthenticated: false
    })
  }

  return (
    <div>
      Login

      {user.isAuthenticated ?
        ( <p> Usuário está logado </p>)
        : ( <p> Usuário não logado </p>)
      }
      <input type="text" onChange={(e) => setInput({name: e.target.value})} />
      <button onClick={handleLogin}> Login </button>
      <button onClick={handleLogout}> Logout </button>
      <hr />
    </div>
  )
}

export default Login
