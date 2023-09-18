import { FoodItem } from '../../../interfaces/FoodItem';

export enum Soups {
  ŻUREK = 'ŻUREK',
  KREM_Z_POMIDORÓW = 'KREM_Z_POMIDORÓW',
}

export interface Soup extends FoodItem {}

export type SoupDataType = {
  [type in Soups]: Soup;
};

export const SoupData: SoupDataType = {
  [Soups.ŻUREK]: {
    name: 'żurek',
    prices: [19],
    descriptionShort: 'z jajkiem',
  },
  [Soups.KREM_Z_POMIDORÓW]: {
    name: 'krem z pomidorów',
    prices: [14],
  },
};
