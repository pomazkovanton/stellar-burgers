import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LOGIN_ROUTE } from 'src/utils/constans';
import { useAppSelector } from '../../../utils/hooks';

interface IProtectedRouteProps {
  key: string;
  path: string;
  exact: true;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children, ...rest }) => {
  const { isAuth } = useAppSelector((store) => store.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
