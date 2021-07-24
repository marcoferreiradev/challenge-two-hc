import React from 'react'
import { useAuth } from "../../providers/auth";

function Login() {
  const { userLogged, setUserLogged, setUser  } = useAuth();

  const handleClick = () => {
    setUserLogged(true)
  }

  return (
    <div>
      Login

      {userLogged ?
        ( <p> Usuário está logado </p>)
        : ( <p> Usuário não logado </p>)
      }

      <button onClick={handleClick}> Logar usuário </button>
      <hr />
    </div>
  )
}

export default Login
