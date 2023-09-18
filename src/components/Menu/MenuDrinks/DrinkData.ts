import { FoodItem } from '../../../interfaces/FoodItem';

export enum Drinks {
  PEPSI = 'PEPSI',
  MIRINDA = 'MIRINDA',
  SEVENUP = 'SEVENUP',
  MOUNTAIN_DEW = 'MOUNTAIN_DEW',
  SCHWEPPES = 'SCHWEPPES',
  LIPTON = 'LIPTON',
  SOK = 'SOK',
  WODA = 'WODA',
  ROCKSTAR = 'ROCKSTAR',
}

export interface Drink extends FoodItem {}

export type DrinkDataType = {
  [type in Drinks]: Drink;
};

export const DrinkData: DrinkDataType = {
  [Drinks.PEPSI]: {
    name: 'PEPSI 0.5l',
    prices: [9],
    descriptionShort: 'Pepsi / Pepsi Max',
  },
  [Drinks.MIRINDA]: {
    name: 'MIRINDA 0.5l',
    prices: [9],
  },
  [Drinks.SEVENUP]: {
    name: '7UP 0.5l',
    prices: [9],
  },
  [Drinks.MOUNTAIN_DEW]: {
    name: 'MOUNTAIN DEW 0.5l',
    prices: [9],
  },
  [Drinks.SCHWEPPES]: {
    name: 'SCHWEPPES 0.5l',
    prices: [9],
    descriptionShort: 'tonic / citrus mix',
  },
  [Drinks.LIPTON]: {
    name: 'LIPTON 0.5l',
    prices: [9],
    descriptionShort: 'cytrynowy / brzoskwiniowy / zielona herbata',
  },
  [Drinks.SOK]: {
    name: 'SOK 0.33l',
    prices: [9],
    descriptionShort: 'jabłkowy / pomarańczowy / czarna porzeczka',
  },
  [Drinks.WODA]: {
    name: 'WODA 0.5l',
    prices: [6],
    descriptionShort: 'gazowana / niegazowana',
  },
  [Drinks.ROCKSTAR]: {
    name: 'ROCKSTAR 0.25l',
    prices: [8],
    descriptionShort: 'original / blueberry',
  },
};
