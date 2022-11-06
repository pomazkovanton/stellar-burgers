import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/constans';
import { privateRoutes, publickRoutes } from '../../utils/routes';

const AppRouter = () => {
  const { isAuthUser } = useSelector((state) => state.user);

  return isAuthUser ? (
    <Switch>
      {privateRoutes.map(({ path, page }) => {
        return <Route key={path} path={path} component={page} exact />;
      })}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publickRoutes.map(({ path, page }) => {
        return <Route key={path} path={path} component={page} exact />;
      })}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
