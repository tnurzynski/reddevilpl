import { FoodItem } from '../../../interfaces/FoodItem';

export enum Snacks {
  FRYTKI = 'FRYTKI',
  FRYTKI_BATATY = 'FRYTKI_BATATY',
  KRAZKI_CEBULOWE = 'KRAZKI_CEBULOWE',
  // FRYTKI_ZAP_MOZARELLA = 'FRYTKI_ZAP_MOZARELLA',
  // FRYTKI_ZAP_BOCZEK = 'FRYTKI_ZAP_BOCZEK',
  // FRYTKI_ZAP_CHORIZO = 'FRYTKI_ZAP_CHORIZO',
  KREWETKI_PANKO = 'KREWETKI_PANKO',
  POLEDWICZKI_PANKO = 'POLEDWICZKI_PANKO',
}

export interface Snack extends FoodItem {}

export type SnackDataType = {
  [type in Snacks]: Snack;
};

export const SnackData: SnackDataType = {
  [Snacks.FRYTKI]: {
    name: 'FRYTKI STEKOWE',
    prices: [12],
    descriptionShort: '250g',
  },
  [Snacks.FRYTKI_BATATY]: {
    name: 'FRYTKI Z BATATÓW',
    prices: [16],
    descriptionShort: '220g',
  },
  [Snacks.KRAZKI_CEBULOWE]: {
    name: 'KRĄŻKI CEBULOWE',
    prices: [11],
    descriptionShort: '10 szt',
  },
  // [Snacks.FRYTKI_ZAP_MOZARELLA]: {
  //   name: 'FRYTKI ZAPIEKANE Z MOZARELLĄ',
  //   prices: [16],
  //   descriptionShort: 'posypane szczypiorkiem',
  // },
  // [Snacks.FRYTKI_ZAP_BOCZEK]: {
  //   name: 'FRYTKI ZAPIEKANE Z MOZARELLĄ I BOCZKIEM',
  //   prices: [20],
  //   descriptionShort: 'z papryczkami jalapeno, posypane szczypiorkiem',
  // },
  // [Snacks.FRYTKI_ZAP_CHORIZO]: {
  //   name: 'FRYTKI ZAPIEKANE Z SEREM BLUE CHEESE & CHORIZO',
  //   prices: [22],
  //   descriptionShort: 'posypane szczypiorkiem',
  // },
  [Snacks.KREWETKI_PANKO]: {
    name: 'KREWETKI',
    prices: [21],
    descriptionShort: 'w panko z sosem sweet chilli 6 szt',
  },
  [Snacks.POLEDWICZKI_PANKO]: {
    name: 'POLĘDWICZKI Z KURCZAKA',
    prices: [18],
    descriptionShort: 'w panko 3 szt',
  },
};
