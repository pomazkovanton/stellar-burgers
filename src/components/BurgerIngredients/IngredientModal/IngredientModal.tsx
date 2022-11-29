import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import IngredientDetails from '../../BurgerIngredients/IngredientDetails/IngredientDetails';

import { removeDetails } from '../../../store/slices/ingredientDetailsSlice';

const IngredientModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { ingredientDetails, isShowDetails } = useSelector((store) => store.ingredientDetails);

  if (!ingredientDetails) return null;

  const handleCloseModalDetails = () => {
    history.goBack();
    dispatch(removeDetails());
  };

  return (
    <Modal title='Детали ингредиента' isActive={isShowDetails} closeModal={handleCloseModalDetails}>
      <IngredientDetails ingredient={ingredientDetails} />
    </Modal>
  );
};

export default IngredientModal;
