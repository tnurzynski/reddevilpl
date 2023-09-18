import { FoodItem } from '../../../interfaces/FoodItem';

export enum Pastas {
  PENNE_GORGONZOLA = 'PENNE_GORGONZOLA',
  PENNE_KURCZAK = 'PENNE_KURCZAK',
  SPAGHETTI_CARBONARA = 'SPAGHETTI_CARBONARA',
  PENNE_CHORIZO = 'PENNE_CHORIZO',
}

export interface Pasta extends FoodItem {}

export type PastaDataType = {
  [type in Pastas]: Pasta;
};

export const PastaData: PastaDataType = {
  [Pastas.PENNE_GORGONZOLA]: {
    name: 'PENNE GORGONZOLA',
    prices: [32],
    descriptionShort: 'ze szpinakiem',
    isVegan: true,
  },
  [Pastas.PENNE_KURCZAK]: {
    name: 'PENNE Z KURCZAKIEM',
    prices: [32],
    descriptionShort: 'z suszonymi pomidorami w sosie śmietanowym',
  },
  [Pastas.SPAGHETTI_CARBONARA]: {
    name: 'SPAGHETTI CARBONARA',
    prices: [31],
    descriptionShort: '',
  },
  [Pastas.PENNE_CHORIZO]: {
    name: 'PENNE CHORIZO',
    prices: [33],
    descriptionShort: 'z truflami',
  },
};
