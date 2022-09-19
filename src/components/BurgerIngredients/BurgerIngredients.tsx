import React, { useState } from 'react';

import styles from './burgeringredients.module.css';

import IngredientList from './IngredientList/IngredientList';
import Modal from 'src/components/Modal/Modal';
import IngredientDetails from './IngredientDetails/IngredientDetails';

import { IngredientType } from '../../types/Ingredient';
import Tabs from './Tabs/Tabs';

const tabsIngredients = [
  {
    name: 'Булки',
    value: 'buns',
  },
  {
    name: 'Соусы',
    value: 'sauces',
  },
  {
    name: 'Начинки',
    value: 'fillings',
  },
];

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
        <Tabs current={current} handleClick={setCurrent} tabs={tabsIngredients} />
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
