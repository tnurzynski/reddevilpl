import { FoodItem } from '../../../interfaces/FoodItem';

export enum Burgers {
  MALUCH = 'MALUCH',
  ŻARŁOK = 'ŻARŁOK',
  KLASYK = 'KLASYK',
  SANTORINI = 'SANTORINI',
  FRANCUZ = 'FRANCUZ',
  DZIKA_SWINIA = 'DZIKA_SWINIA',
  MISS_PIGGY = 'MISS_PIGGY',
  WUJEK_Z_AMERYKI = 'WUJEK_Z_AMERYKI',
  KOZAK = 'KOZAK',
  RED_DEVIL = 'RED_DEVIL',
  VEGE = 'VEGE',
}

export interface Burger extends FoodItem {}

export type BurgerDataType = {
  [type in Burgers]: Burger;
};

export const BurgerData: BurgerDataType = {
  [Burgers.MALUCH]: {
    name: 'MALUCH',
    prices: [27],
    descriptionLong: 'domowy majonez, ketchup, wołowina, sałata, pomidor, ser cheddar',
  },
  [Burgers.ŻARŁOK]: {
    name: 'ŻARŁOK',
    prices: [48],
    descriptionLong:
      'domowy majonez, 2x wołowina, 2x boczek, 2x ser cheddar, ogórek piklowany, pomidor, karmelizowana cebula',
  },
  [Burgers.KLASYK]: {
    name: 'KLASYK',
    prices: [31],
    descriptionLong: 'sos chrzanowy, wołowina, sałata, pomidor, ogórek piklowany, czerwona cebula, boczek, ser cheddar',
  },
  [Burgers.SANTORINI]: {
    name: 'SANTORINI',
    prices: [34],
    descriptionLong: 'domowy majonez, wołowina, rukola, pomidor, feta, czarne oliwki, czerwona cebula',
  },
  [Burgers.FRANCUZ]: {
    name: 'FRANCUZ',
    prices: [34],
    descriptionLong: 'domowy majonez, wołowina, sałata, pomidor, camembert, karmelizowana cebula',
  },
  [Burgers.DZIKA_SWINIA]: {
    name: 'DZIKA ŚWINIA',
    prices: [36],
    descriptionLong: 'sos chrzanowy, szarpana wieprzowina, ogórek piklowany, colesław, prażona cebula',
  },
  [Burgers.WUJEK_Z_AMERYKI]: {
    name: 'WUJEK Z AMERYKI',
    prices: [37],
    descriptionLong: 'sos BBQ, wołowina, sałata, pomidor, ogórek piklowany, krążki cebulowe, ser cheddar, boczek',
  },
  [Burgers.KOZAK]: {
    name: 'KOZAK',
    prices: [35],
    descriptionLong:
      'sos chipotle mayo, wołowina, sałata, pomidor, pikle z czerwonej cebuli, boczek, ser cheddar, jalapeno, nachosy',
    extraHotLevel: 2,
  },
  [Burgers.RED_DEVIL]: {
    name: 'RED DEVIL',
    prices: [38],
    descriptionLong: (
      <>
        <span className="logo-headline">ostry sos Red Devil</span>, wołowina, rukola, ogórek piklowany, pikle z
        czerwonej cebuli, habanero, ser cheddar, boczek
      </>
    ),
    extraHotLevel: 4,
  },
  [Burgers.VEGE]: {
    name: 'VEGE',
    prices: [34],
    descriptionLong:
      'domowy majonez, rukola, kotlet z czarnej fasoli, pomidor, ogórek piklowany, karmelizowana czerwona cebula',
    isVegan: true,
  },
  [Burgers.MISS_PIGGY]: {
    name: 'MISS PIGGY',
    prices: [36],
    descriptionLong: 'sos BBQ, szarpana wieprzowina, ogórek kiszony, czerwona cebula, sałata, ser cheddar',
  },
};
