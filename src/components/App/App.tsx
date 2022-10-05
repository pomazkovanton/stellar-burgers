import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../BurgerIngredients/IngredientDetails/IngredientDetails';
import OrderDetails from '../BurgerConstructor/OrderDetails/OrderDetails';

import { fetchIngredients } from '../../store/ingredientsSlice';
import { removeDetails } from '../../store/ingredientDetailsSlice';
import { removeOrder } from '../../store/orderSlice';

import styles from './app.module.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsStatus, ingredientsError } = useSelector(
    (store) => store.ingredients,
  );
  const { ingredientDetails, isShowDetails } = useSelector((store) => store.ingredientDetails);
  const { order, isShowOrder } = useSelector((store) => store.order);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleCloseModalDetails = () => {
    dispatch(removeDetails());
  };

  const handleCloseModalOrder = () => {
    dispatch(removeOrder());
  };

  return (
    <>
      <AppHeader />
      <main className={styles.container}>
        <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
        <div className={styles.wrapper}>
          {ingredientsStatus === 'loading' && <h2>Загрузка данных...</h2>}
          {ingredientsStatus === 'rejected' && <h2>Ошибка загрузки данных: {ingredientsError}</h2>}
          {ingredientsStatus === 'resolved' && <BurgerIngredients ingredients={ingredients} />}
          <BurgerConstructor />
        </div>
      </main>
      <Modal
        title='Детали ингредиента'
        isActive={isShowDetails}
        closeModal={handleCloseModalDetails}
      >
        <IngredientDetails ingredient={ingredientDetails} />
      </Modal>
      <Modal isActive={isShowOrder} closeModal={handleCloseModalOrder}>
        <OrderDetails numberOrder={order} />
      </Modal>
    </>
  );
};

export default App;
