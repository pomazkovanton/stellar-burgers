import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { HOME_ROUTE } from '../../utils/constans';
import { privateRoutes, publicRoutes, modalRoutes } from '../../utils/routes';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const AppRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        {publicRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        {privateRoutes.map(({ path, page }) => {
          return (
            <ProtectedRoute key={path} page={page} children={React.createElement(page)} exact />
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
