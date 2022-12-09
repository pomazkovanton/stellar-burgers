import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import { HOME_ROUTE } from '../../utils/constans';
import { privateRoutes, publicRoutes, modalRoutes } from '../../utils/routes';

interface ILocationState {
  background: any;
}

const AppRouter: React.FC = () => {
  const location = useLocation<ILocationState>();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        {publicRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        {privateRoutes.map(({ path, page }) => {
          return (
            <ProtectedRoute key={path} path={path} exact>
              {React.createElement(page)}
            </ProtectedRoute>
          );
        })}
        <Redirect to={HOME_ROUTE} />
      </Switch>
      {modalRoutes.map(({ path, page }) => {
        return background && <Route key={path} path={path} component={page} exact />;
      })}
    </>
  );
};

export default AppRouter;
