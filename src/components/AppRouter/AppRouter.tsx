import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/constans';
import { privateRoutes, publicRoutes, commonRoutes } from '../../utils/routes';

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <>
      <Switch>
        {privateRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        {commonRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        <Redirect to={HOME_ROUTE} />
      </Switch>
    </>
  ) : (
    <>
      <Switch>
        {publicRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        {commonRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        <Redirect to={LOGIN_ROUTE} />
      </Switch>
    </>
  );
};

export default AppRouter;
