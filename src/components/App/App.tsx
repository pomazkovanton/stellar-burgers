import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';

import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main>
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
            <Route exact path='/stellar-burgers/forgot-password'>
              <ForgotPasswordPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
