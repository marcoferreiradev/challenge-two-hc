import React from 'react'
import { useAuth } from '../../providers/auth';

function SignUp() {
  const { user, setUser } = useAuth();

  console.log(user)

  return (
    <div>
      SignUp
        <input type="text" onChange={(e) => setUser({name: e.target.value})} />
      <br/>
    </div>
  )
}

export default SignUp;
