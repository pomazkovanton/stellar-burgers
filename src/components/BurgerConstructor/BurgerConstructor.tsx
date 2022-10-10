import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { fetchOrder } from '../../store/orderSlice';
import { addToBurger, reorderInBurger, removeFromBurger } from '../../store/burgerSlice';
import { BurgerIngredients } from '../../types/burgerIngredients';
import { lOADING_DATA } from '../../utils/constans';

import styles from './burgerconstructor.module.css';

const BurgerConstructor: React.FC = () => {
  const { burger } = useSelector((state) => state.burger);
  const { orderStatus } = useSelector((state) => state.order);

  const bun = burger.find((ingr) => ingr.item.type === 'bun');
  const otherIngredients = burger.filter((ingr) => ingr.item.type !== 'bun');
  const isBunAdded = bun !== undefined;

  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop({ ingredient }) {
      dispatch(addToBurger({ id: uuidv4(), item: ingredient }));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const classContainer = !isHover
    ? styles.container
    : [styles.container, styles.containerHover].join(' ');

  const calculatingPrice = (burger: BurgerIngredients[]): number => {
    return burger.reduce(
      (acc, ingr) => (ingr.item.type !== 'bun' ? acc + ingr.item.price : acc + ingr.item.price * 2),
      0,
    );
  };

  const getIdIngredients = () => {
    return [bun.item._id, ...otherIngredients.map((ingr) => ingr.item._id), bun.item._id];
  };

  const handleOrderClick = () => {
    const idIngredients = { ingredients: getIdIngredients() };
    dispatch(fetchOrder(idIngredients));
  };

  const handleDragIngredient = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    dispatch(reorderInBurger({ startIndex: source.index, endIndex: destination.index }));
  };

  const handleDeleteIngredient = (id: number): void => {
    dispatch(removeFromBurger(id));
  };

  return (
    <section className={classContainer} ref={dropTarget}>
      <ul className={styles.list}>
        {isBunAdded && (
          <li key={uuidv4()} className={styles.margin}>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.item.name} (верх)`}
              price={bun.item.price}
              thumbnail={bun.item.image}
            />
          </li>
        )}
        <DragDropContext onDragEnd={handleDragIngredient}>
          <Droppable droppableId='burgerIngredients'>
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className={styles.wrapper}
              >
                {otherIngredients.map((ingr, index) => {
                  return (
                    <Draggable key={ingr.id} draggableId={ingr.id} index={index}>
                      {(draggableProvided) => (
                        <li
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          className={styles.ingredient}
                        >
                          <DragIcon type='primary' />
                          <ConstructorElement
                            text={ingr.item.name}
                            price={ingr.item.price}
                            thumbnail={ingr.item.image}
                            handleClose={() => handleDeleteIngredient(ingr.id)}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {isBunAdded && (
          <li key={uuidv4()} className={styles.margin}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.item.name} (низ)`}
              price={bun.item.price}
              thumbnail={bun.item.image}
            />
          </li>
        )}
      </ul>
      {burger.length !== 0 && (
        <div className={styles.order}>
          <div className={styles.price}>
            <p className='text text_type_digits-medium'>{calculatingPrice(burger)}</p>
            <CurrencyIcon type='primary' />
          </div>
          <Button type='primary' size='medium' onClick={handleOrderClick} disabled={!isBunAdded}>
            {orderStatus === lOADING_DATA ? 'Оформление...' : 'Оформить заказ'}
          </Button>
        </div>
      )}
    </section>
  );
};

export default BurgerConstructor;
