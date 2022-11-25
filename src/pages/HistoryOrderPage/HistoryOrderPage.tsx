import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { disconnect, connect } from '../../store/slices/wsSlice';
import { logout } from '../../store/slices/authSlice';
import { PROFILE_ORDERS_ROUTE, PROFILE_ROUTE, USER_ORDERS_URL } from '../../utils/constans';
import { getCookie } from '../../utils/utils';
import styles from './historyorderpage.module.css';
import CardOrder from 'src/components/CardOrder/CardOrder';

const HistoryOrderPage = () => {
  const refreshToken = getCookie('token');
  const dispatch = useDispatch();
  const { data, isConnected } = useSelector((state) => state.ws);
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  const handlerLogout = () => {
    dispatch(logout({ token: refreshToken }));
  };

  useEffect(() => {
    dispatch(connect(`${USER_ORDERS_URL}?token=${token}`));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {!isConnected && <h2>Загрузка данных...</h2>}
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
