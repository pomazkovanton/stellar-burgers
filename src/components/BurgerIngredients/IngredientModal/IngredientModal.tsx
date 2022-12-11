import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import IngredientDetails from '../../BurgerIngredients/IngredientDetails/IngredientDetails';

import { removeDetails } from '../../../store/slices/ingredientDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const IngredientModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { ingredientDetails, isShowDetails } = useAppSelector((store) => store.ingredientDetails);

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
