import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { HOME_ROUTE, INGREDIENT_ROUTE, LOGIN_ROUTE } from '../../utils/constans';
import { privateRoutes, publicRoutes, commonRoutes, modalRoutes } from '../../utils/routes';

import IngredientModal from '../BurgerIngredients/IngredientModal/IngredientModal';

const AppRouter = () => {
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        {isAuth
          ? privateRoutes.map(({ path, page }) => {
              return <Route key={path} path={path} component={page} exact />;
            })
          : publicRoutes.map(({ path, page }) => {
              return <Route key={path} path={path} component={page} exact />;
            })}
        {commonRoutes.map(({ path, page }) => {
          return <Route key={path} path={path} component={page} exact />;
        })}
        {isAuth ? <Redirect to={HOME_ROUTE} /> : <Redirect to={LOGIN_ROUTE} />}
      </Switch>
      {modalRoutes.map(({ path, page }) => {
        return background && <Route key={path} path={path} component={page} exact />;
      })}
    </>
  );
};

export default AppRouter;
