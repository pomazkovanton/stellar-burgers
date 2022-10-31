import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';

import HomePage from '../../pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Router>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Router>
    </>
  );
};

export default App;
