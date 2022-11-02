import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';

import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path='/stellar-burgers/'>
            <HomePage />
          </Route>
          <Route exact path='/stellar-burgers/login'>
            <LoginPage />
          </Route>
          <Route exact path='/stellar-burgers/register'>
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
