import React from 'react';
import { IngredientType } from 'src/types/Ingredient';

export const BurgerConstructorContext = React.createContext<IngredientType[]>([]);
