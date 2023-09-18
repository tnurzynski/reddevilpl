import { ReactNode } from 'react';

export interface FoodItem {
  name: ReactNode;
  prices: [number, number?];
  isVegan?: boolean;
  extraHotLevel?: number;
  descriptionShort?: string;
  descriptionLong?: ReactNode;
  customJustify?: string;
  index?: number;
}
