import React  from 'react'
import { useAuth } from '../../providers/auth';

function Home() {

  const { user } = useAuth();

  return (
    <div>
      Home <br />
      { user.isAuthenticated ?
        <>Nome do usuário : <h1>{user.name}</h1></> :
        <> User não logado </>
      }

      <hr />
    </div>
  )
}

export default Home
