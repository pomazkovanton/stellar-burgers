import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import CardOrder from '../../components/CardOrder/CardOrder';
import Loader from '../../components/Loader/Loader';

import { disconnect, connect } from '../../store/slices/wsSlice';
import { logout } from '../../store/slices/authSlice';
import { PROFILE_ORDERS_ROUTE, PROFILE_ROUTE, USER_ORDERS_URL } from '../../utils/constans';
import { getCookie } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import styles from './historyorderpage.module.css';

const HistoryOrderPage: React.FC = () => {
  const refreshToken = getCookie('token');

  const dispatch = useAppDispatch();
  const location = useLocation();

  const { data, isConnected } = useAppSelector((state) => state.ws);
  const { token } = useAppSelector((state) => state.auth);

  const handlerLogout = () => {
    if (refreshToken) dispatch(logout({ token: refreshToken }));
  };

  useEffect(() => {
    dispatch(connect(`${USER_ORDERS_URL}?token=${token}`));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      {!isConnected && <Loader />}
      {isConnected && data && (
        <>
          <div className={styles.wrapper}>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  exact
                  to={PROFILE_ROUTE}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  <span className='text text_type_main-medium text_color_inactive'>Профиль</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={PROFILE_ORDERS_ROUTE}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  <span className='text text_type_main-medium text_color_inactive'>
                    История заказов
                  </span>
                </NavLink>
              </li>
              <li>
                <button className={styles.link} onClick={handlerLogout}>
                  <span className='text text_type_main-medium text_color_inactive'>Выход</span>
                </button>
              </li>
            </ul>
            <p className='text text_type_main-default text_color_inactive'>
              В этом разделе вы можете просмотреть свою историю заказов
            </p>
          </div>
          <ul className={styles.list}>
            {data.orders
              .slice(0)
              .reverse()
              .map((order) => {
                return (
                  <Link
                    key={order._id}
                    className={styles.linkCard}
                    to={{
                      pathname: `${PROFILE_ORDERS_ROUTE}/${order._id}`,
                      state: { background: location },
                    }}
                  >
                    <CardOrder order={order} isStatus={true} />
                  </Link>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default HistoryOrderPage;
