import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => {
  
  // console.log(Component)
  const isAuthenticated = localStorage.getItem("agentLoginStatus")
  console.log(isAuthenticated)
  return (
    
    <Route
      {...rest}
      render={props =>
        (isAuthenticated=='true' ? 
          <Component {...props} />
         : 
          <Redirect to='/agent/signin' />
        
        )}
    />
  )
}

export default AuthRoute
