export interface OrderMenuModel {
  name: string;
  description: string;
  cost: number;
  count: number;

  options: OrderMenuOptionModel[];
}

export interface OrderMenuOptionModel {
  name: string;
  cost: number;
  count: number;
}
