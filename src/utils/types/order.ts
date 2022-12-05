type TStatus = 'done' | 'pending';

export type TOrder = {
  _id: string;
  ingredients: string[];
  status: TStatus;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};
