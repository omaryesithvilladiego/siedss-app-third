import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSession } from '../helper/helper';

const checkAuth = () => {
  return !getSession() ? false : true;
};

const LoginPrivado = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Redirect to={{ pathname: '/inicio', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};


 

export default LoginPrivado;