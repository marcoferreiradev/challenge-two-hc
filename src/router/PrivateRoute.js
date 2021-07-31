import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from "../providers/auth";

function PrivateRoute({ component: Component, ...rest}) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        user.isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{ pathname :'/login' , state: {from: props.location} }} />
        )
      }
    />
  )
}

export default PrivateRoute
