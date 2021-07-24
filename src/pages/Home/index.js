import React from 'react'
import { useAuth } from '../../providers/auth';

function Home() {

  const { user } = useAuth();
  return (
    <div>
      Home <br />

      Nome do usuário : <h1>{user.name}</h1>
      <hr />
    </div>
  )
}

export default Home
