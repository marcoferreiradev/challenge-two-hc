import React from 'react'
import { useAuth } from '../../providers/auth';

function SignUp() {
  const { user } = useAuth();

  console.log(user)

  return (
    <div>
      SignUp

      <br/>
    </div>
  )
}

export default SignUp;
