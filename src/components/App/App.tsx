import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import AppRouter from '../AppRouter/AppRouter';

import { getCookie } from '../../utils/utils';
import { updateToken } from '../../store/authSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const refreshToken = getCookie('token');

  useEffect(() => {
    if (!token && refreshToken) {
      dispatch(updateToken({ token: refreshToken }));
    }
  }, [dispatch, token, refreshToken]);

  return (
    <>
      <Router>
        <AppHeader />
        <main>
          <AppRouter />
        </main>
      </Router>
    </>
  );
};

export default App;
