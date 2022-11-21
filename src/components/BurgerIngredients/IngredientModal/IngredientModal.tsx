import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import IngredientDetails from '../../BurgerIngredients/IngredientDetails/IngredientDetails';

import { removeDetails } from '../../../store/slices/ingredientDetailsSlice';

const IngredientModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { ingredientDetails, isShowDetails } = useSelector((store) => store.ingredientDetails);

  if (!isShowDetails) {
    history.replace(location.pathname);
  }

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
