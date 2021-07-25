import React  from 'react'
import { useAuth } from '../../providers/auth';

function Home() {

  const { user } = useAuth();
  console.log(user) ;

  return (
    <div>
      Home <br />
      { user.isAuthenticated ?
        <>Nome do usuário : <h1>{user.nome}</h1></> :
        <> User não logado </>
      }

      <hr />
    </div>
  )
}

export default Home
