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
    value: 'bun',
  },
  {
    name: 'Соусы',
    value: 'sauce',
  },
  {
    name: 'Начинки',
    value: 'main',
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
  const [current, setCurrent] = useState('bun');
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<IngredientType | null>(null);

  const openModal = (ingredient: IngredientType) => {
    if (!burger.includes(ingredient)) setModalActive(!modalActive);
    setModalContent(ingredient);
  };

  return (
    <>
      <section className={styles.wrapper}>
        <Tabs current={current} handleClick={setCurrent} tabs={tabsIngredients} />
        <div className={styles.container}>
          {tabsIngredients.map((tab) => {
            return (
              <IngredientList
                key={tab.value}
                type={tab.value}
                title={tab.name}
                ingredients={ingredients}
                burger={burger}
                addToBurger={addToBurger}
                openModal={openModal}
              />
            );
          })}
        </div>
      </section>
      <Modal title='Детали ингредиента' isActive={modalActive} setActive={setModalActive}>
        <IngredientDetails ingredient={modalContent} />
      </Modal>
    </>
  );
};

export default BurgerIngredients;
