import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import AppRouter from '../AppRouter/AppRouter';

import { getCookie } from '../../utils/utils';
import { getUser, updateToken } from '../../store/slices/authSlice';
import { fetchIngredients } from '../../store/slices/ingredientsSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const refreshToken = getCookie('token');

  useEffect(() => {
    dispatch(fetchIngredients());
    if (!token && refreshToken) {
      dispatch(updateToken({ token: refreshToken }));
    }
    if (token) {
      dispatch(getUser({ authorization: `Bearer ${token}` }));
    }
  }, [dispatch, token, refreshToken]);

  return (
    <Router>
      <AppHeader />
      <main>
        <AppRouter />
      </main>
    </Router>
  );
};

export default App;
