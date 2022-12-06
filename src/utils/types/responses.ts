import { TOrder } from './order';
import { TIngredient } from './Ingredient';

export type TWsResponse = {
  success: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TOrderResponse = {
  name: string;
  order: TOrder;
  success: boolean;
};

export type TIngredientsResponse = {
  success: boolean;
  data: TIngredient[];
};
