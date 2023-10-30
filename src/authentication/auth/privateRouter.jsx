import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSession } from '../helper/helper';

const checkAuth = () => {
  return !getSession() ? false : true;
};

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRouter;