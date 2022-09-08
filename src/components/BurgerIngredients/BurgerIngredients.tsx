import React, { useState } from 'react';

import styles from './burgeringredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from './IngredientList/IngredientList';
import Modal from 'src/components/Modal/Modal';
import IngredientDetails from './IngredientDetails/IngredientDetails';

import { IngredientType } from '../../types/Ingredient';

interface IBurgerIngredientsProps {
  burger: IngredientType[];
  addToBurger: (ingredient: IngredientType) => void;
  ingredients: IngredientType[];
}

const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({
  ingredients,
  addToBurger,
  burger,
}) => {
  const [current, setCurrent] = useState('buns');
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<IngredientType | null>(null);

  const openModal = (ingredient: IngredientType) => {
    if (!burger.includes(ingredient)) setModalActive(!modalActive);
    setModalContent(ingredient);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.tabs}>
          <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        {current === 'buns' ? (
          <IngredientList
            type='bun'
            title='Булки'
            ingredients={ingredients}
            burger={burger}
            addToBurger={addToBurger}
            openModal={openModal}
          />
        ) : null}
        {current === 'sauces' ? (
          <IngredientList
            type='sauce'
            title='Соусы'
            burger={burger}
            ingredients={ingredients}
            addToBurger={addToBurger}
            openModal={openModal}
          />
        ) : null}
        {current === 'fillings' ? (
          <IngredientList
            type='main'
            title='Начинки'
            burger={burger}
            ingredients={ingredients}
            addToBurger={addToBurger}
            openModal={openModal}
          />
        ) : null}
      </section>
      <Modal title='Детали ингредиента' isActive={modalActive} setActive={setModalActive}>
        <IngredientDetails ingredient={modalContent} />
      </Modal>
    </>
  );
};

export default BurgerIngredients;
