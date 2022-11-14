import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import IngredientDetails from '../../BurgerIngredients/IngredientDetails/IngredientDetails';

import { removeDetails } from '../../../store/ingredientDetailsSlice';

const IngredientModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { ingredientDetails, isShowDetails } = useSelector((store) => store.ingredientDetails);

  const handleCloseModalDetails = () => {
    dispatch(removeDetails());
    history.goBack();
  };

  return (
    <Modal title='Детали ингредиента' isActive={isShowDetails} closeModal={handleCloseModalDetails}>
      <IngredientDetails ingredient={ingredientDetails} />
    </Modal>
  );
};

export default IngredientModal;
