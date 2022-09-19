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

  let type = '';
  let title = '';

  switch (current) {
    case 'buns': {
      type = 'bun';
      title = 'Булки';
      break;
    }
    case 'sauces': {
      type = 'sauce';
      title = 'Соусы';
      break;
    }
    case 'fillings': {
      type = 'main';
      title = 'Начинки';
      break;
    }
  }

  return (
    <>
      <section className={styles.container}>
        <Tabs current={current} handleClick={setCurrent} tabs={tabsIngredients} />
        <IngredientList
          type={type}
          title={title}
          ingredients={ingredients}
          burger={burger}
          addToBurger={addToBurger}
          openModal={openModal}
        />
      </section>
      <Modal title='Детали ингредиента' isActive={modalActive} setActive={setModalActive}>
        <IngredientDetails ingredient={modalContent} />
      </Modal>
    </>
  );
};

export default BurgerIngredients;
