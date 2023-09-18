import { FoodItem } from '../../../interfaces/FoodItem';

export enum Quesadillas {
  ELDORADO = 'ELDORADO',
  BABY_SPICY = 'BABY_SPICY',
  RED_DEVIL = 'RED_DEVIL',
  DESPERADO = 'DESPERADO',
  BANDITO = 'BANDITO',
  EDEN = 'EDEN',
}

export interface Quesadilla extends FoodItem {}

export type QuesadillaDataType = {
  [type in Quesadillas]: Quesadilla;
};

export const QuesadillaData: QuesadillaDataType = {
  [Quesadillas.ELDORADO]: {
    name: 'ELDORADO',
    prices: [26],
    descriptionLong: 'grillowana pierś w sambalu, kukurydza, czarna fasola, jalapeno, ser cheddar, mozzarella',
    extraHotLevel: 1,
  },
  [Quesadillas.BABY_SPICY]: {
    name: 'BABY SPICY',
    prices: [25],
    descriptionLong: 'boczek, karmelizowana cebula, kukurydza, habanero, ser cheddar, mozzarella',
    extraHotLevel: 4,
  },
  [Quesadillas.RED_DEVIL]: {
    name: 'RED DEVIL',
    prices: [28],
    descriptionLong: 'mielona ostra wołowina, piklowana czerwona cebula, habanero, piri piri, ser cheddar, mozzarella',
    extraHotLevel: 5,
  },
  [Quesadillas.DESPERADO]: {
    name: 'DESPERADO',
    prices: [27],
    descriptionLong: 'boczek, chorizo, czerwona cebula, gorgonzola, ser cheddar, mozzarella ',
  },
  [Quesadillas.BANDITO]: {
    name: 'BANDITO',
    prices: [28],
    descriptionLong: 'szarpana wieprzowina, czerwona papryka, czerwona cebula, ogórek kiszony, ser cheddar, mozzarella',
  },
  [Quesadillas.EDEN]: {
    name: 'EDEN',
    prices: [23],
    descriptionLong:
      'czerwona papryka, czerwona cebula, czarna fasola, kukurydza, jalapeno, kolendra, ser cheddar, mozzarella',
    extraHotLevel: 1,
    isVegan: true,
  },
};
