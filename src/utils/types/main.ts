type TStatus = 'done' | 'pending' | 'created';

export type TOrder = {
  _id: string;
  ingredients: string[];
  status: TStatus;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TBurger = {
  id: string;
  item: TIngredient;
};

export type TUser = {
  email: string;
  name: string;
};

export type TRegisterData = {
  password: string;
} & TUser;

export type TToken = {
  token: string;
};

export type TForgotData = {
  email: string;
};

export type TResetData = {
  password: string;
  token: string;
};

export type TAuthorization = {
  authorization: string;
};

export type TReject = {
  rejectValue: string;
};

export type TUpdateUserData = {
  user: TRegisterData;
  token: TAuthorization;
};

export type TIdIngredients = {
  ingredients: string[];
};

export type TOrderData = {
  id: TIdIngredients;
  token: TAuthorization;
};

export type TDragItem = {
  ingredient: TIngredient;
};

export enum TDragItemTypes {
  INGREDIENT = 'ingredient',
}

export type TTab = {
  value: string;
  name: string;
};
