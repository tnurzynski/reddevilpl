import React from 'react';
import { FoodItem } from '../../../interfaces/FoodItem';
import { SauceRedDevilV2 } from '../MenuSauces/MenuSauces';
import { PizzaIngredients as Ing } from './PizzaIngredientData';

export enum Pizzas {
  CHORIZO = 'CHORIZO',
  MEXICAN = 'MEXICAN',
  NDUJA = 'NDUJA',
  DON_DIABLO = 'DON_DIABLO',
  PIEKIELNA = 'PIEKIELNA',
  WŚCIEKŁY_GRINGO = 'WŚCIEKŁY_GRINGO',
  RED_DEVIL = 'RED_DEVIL',
  CAPRICCIOSA = 'CAPRICCIOSA',
  HAWAJSKA = 'HAWAJSKA',
  NAPOLI = 'NAPOLI',
  SALAMI = 'SALAMI',
  SZARPNIJ_SIĘ = 'SZARPNIJ_SIĘ',
  CARBONARA = 'CARBONARA',
  FARMERSKA = 'FARMERSKA',
  TRUFLOVE = 'TRUFLOVE',
  ROCKY_MOUNTAIN = 'ROCKY_MOUNTAIN',
  GORGON = 'GORGON',
  KURA_BBQ = 'KURA_BBQ',
  MIĘSNA = 'MIĘSNA',
  AMERICAN_DREAM = 'AMERICAN_DREAM',
  MARGHERITA = 'MARGHERITA',
  SEROWE_LOVE = 'SEROWE_LOVE',
  SZPINAKOWE_SZALEŃSTWO = 'SZPINAKOWE_SZALEŃSTWO',
  VEGE = 'VEGE',
  // ZORBA = 'ZORBA',
  // CZTERY_PORY_ROKU = 'CZTERY_PORY_ROKU',
  // PARMA = 'PARMA',
  // MASCARPONE = 'MASCARPONE',
  // WIEJSKA = 'WIEJSKA',
  // POTĘPIONA = 'POTĘPIONA',
  // ZBÓJNICKA = 'ZBÓJNICKA',
  // CALZONE = 'CALZONE',
  // PIZZA_SZEFA = 'PIZZA_SZEFA',
}

type IngAsObject = {
  type: Ing;
  multiplier?: string;
  renderer?: React.FC;
};
export interface Pizza extends FoodItem {
  ingredients: (Ing | IngAsObject)[];
}

export type PizzaDataType = {
  [type in Pizzas]: Pizza;
};

export const PizzaData: PizzaDataType = {
  [Pizzas.MARGHERITA]: {
    name: 'margherita',
    prices: [24],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.BAZYLIA],
    isVegan: true,
  },
  [Pizzas.CAPRICCIOSA]: {
    name: 'capricciosa',
    prices: [27],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.SZYNKA, Ing.PIECZARKI, Ing.OREGANO],
  },
  [Pizzas.SALAMI]: {
    name: 'double salami',
    prices: [32],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, { type: Ing.SALAMI_NAPOLI, multiplier: 'podwójne' }, Ing.OREGANO],
  },
  [Pizzas.HAWAJSKA]: {
    name: 'hawajska',
    prices: [28],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.SZYNKA, Ing.ANANAS, Ing.OREGANO],
  },
  [Pizzas.FARMERSKA]: {
    name: 'farmerska',
    prices: [33],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.KIEŁBASA_WIEJSKA,
      Ing.BOCZEK,
      Ing.PIECZARKI,
      Ing.PAPRYKA,
      Ing.CEBULA,
    ],
  },
  [Pizzas.KURA_BBQ]: {
    name: 'kura BBQ',
    prices: [33],
    ingredients: [Ing.SOS_BBQ, Ing.MOZZARELLA, Ing.BOCZEK, Ing.KURCZAK, Ing.KUKURYDZA, Ing.CEBULA_CZERWONA],
  },
  [Pizzas.TRUFLOVE]: {
    name: 'truflove',
    prices: [35],
    ingredients: [
      Ing.SOS_ŚMIETANOWY,
      Ing.MOZZARELLA,
      Ing.PASTA_TRUFLOWA,
      Ing.SALAMI_SPIANATA_PICCANTE,
      Ing.MASCARPONE,
      Ing.RUKOLA,
    ],
  },
  [Pizzas.SZPINAKOWE_SZALEŃSTWO]: {
    name: 'szpinakowe szaleństwo',
    prices: [33],
    ingredients: [
      Ing.SOS_ŚMIETANOWY,
      Ing.CZOSNEK,
      Ing.MOZZARELLA,
      Ing.SZPINAK,
      Ing.SER_FETA,
      Ing.POMIDORKI_CHERRY,
      Ing.CEBULA_CZERWONA,
      Ing.BAZYLIA,
    ],
    isVegan: true,
  },
  [Pizzas.SEROWE_LOVE]: {
    name: 'serowelove',
    prices: [36],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.GORGONZOLA, Ing.SER_FETA, Ing.PARMEZAN, Ing.CAMEMBERT],
    isVegan: true,
  },
  [Pizzas.VEGE]: {
    name: 'vege',
    prices: [33],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.PAPRYKA,
      Ing.CEBULA_CZERWONA,
      Ing.OLIWKI,
      Ing.SUSZONE_POMIDORY,
      Ing.RUKOLA,
    ],
    isVegan: true,
  },
  [Pizzas.CARBONARA]: {
    name: 'carbonara',
    prices: [28],
    ingredients: [Ing.SOS_ŚMIETANOWY, Ing.MOZZARELLA, Ing.BOCZEK, Ing.CZOSNEK, Ing.CEBULA, Ing.PIETRUSZKA],
  },
  [Pizzas.SZARPNIJ_SIĘ]: {
    name: 'szarpnij się',
    prices: [35],
    ingredients: [
      Ing.SOS_BBQ,
      Ing.MOZZARELLA,
      Ing.SZARPANA_WIEPRZOWINA,
      Ing.OGÓREK_KISZONY,
      Ing.CEBULA_CZERWONA,
      Ing.CEBULA_PRAŻONA,
    ],
  },
  [Pizzas.NAPOLI]: {
    name: 'napoli',
    prices: [31],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.SALAMI_NAPOLI, Ing.CEBULA_CZERWONA, Ing.OLIWKI, Ing.OREGANO],
  },
  [Pizzas.ROCKY_MOUNTAIN]: {
    name: 'rocky mountain',
    prices: [34],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.BOCZEK, Ing.CAMEMBERT, Ing.CEBULA_KARMELIZOWANA, Ing.RUKOLA],
  },
  [Pizzas.GORGON]: {
    name: 'gorgon',
    prices: [35],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.SALAMI_NAPOLI,
      Ing.GORGONZOLA,
      Ing.SUSZONE_POMIDORY,
      Ing.RUKOLA,
    ],
  },
  [Pizzas.MIĘSNA]: {
    name: 'mięsna',
    prices: [37],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.PEPPERONI,
      Ing.SZYNKA,
      Ing.BOCZEK,
      Ing.SALAMI_NAPOLI,
      Ing.CEBULA_CZERWONA,
    ],
  },
  [Pizzas.NDUJA]: {
    name: 'nduja',
    prices: [35],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.NDUJA, Ing.MASCARPONE, Ing.JALAPENO],
    extraHotLevel: 2,
  },
  [Pizzas.MEXICAN]: {
    name: 'mexican',
    prices: [37],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.CHORIZO,
      Ing.MIELONA_WOŁOWINA,
      Ing.JALAPENO,
      Ing.FASOLA,
      Ing.KUKURYDZA,
      Ing.OLIWKI,
      Ing.KOLENDRA,
    ],
    extraHotLevel: 1,
  },
  [Pizzas.CHORIZO]: {
    name: 'chorizo',
    prices: [34],
    ingredients: [Ing.SOS_POMIDOROWY, Ing.MOZZARELLA, Ing.CHORIZO, Ing.PAPRYKA, Ing.CEBULA_CZERWONA, Ing.JALAPENO],
    extraHotLevel: 1,
  },
  [Pizzas.DON_DIABLO]: {
    name: 'don diablo',
    prices: [33],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.SALAMI_SPIANATA_PICCANTE,
      Ing.CEBULA,
      Ing.TABASCO,
      Ing.JALAPENO,
      Ing.PEPPERONI,
    ],
    extraHotLevel: 2,
  },
  [Pizzas.PIEKIELNA]: {
    name: 'piekielna',
    prices: [38],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.SALAMI_SPIANATA_PICCANTE,
      Ing.NDUJA,
      Ing.CEBULA_CZERWONA,
      Ing.KUKURYDZA,
      Ing.FASOLA,
      Ing.PIRI_PIRI,
      Ing.KOLENDRA,
    ],
    extraHotLevel: 3,
  },
  [Pizzas.WŚCIEKŁY_GRINGO]: {
    name: 'wściekły gringo',
    prices: [38],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.SZARPANA_WIEPRZOWINA,
      Ing.TABASCO,
      Ing.KUKURYDZA,
      Ing.HABANERO,
      Ing.KOLENDRA,
      Ing.FASOLA,
      Ing.CEBULA_PRAŻONA,
      {
        type: Ing.SOS_AUTORSKI_V2,
        renderer: SauceRedDevilV2,
      },
    ],
    extraHotLevel: 4,
  },
  [Pizzas.RED_DEVIL]: {
    name: 'red devil',
    prices: [40],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      Ing.MOZZARELLA,
      Ing.SALAMI_SPIANATA_PICCANTE,
      Ing.MIELONA_WOŁOWINA,
      Ing.TABASCO,
      Ing.JALAPENO,
      Ing.PIRI_PIRI,
      Ing.HABANERO,
      {
        type: Ing.SOS_AUTORSKI_V2,
        renderer: SauceRedDevilV2,
      },
    ],
    extraHotLevel: 5,
  },
  [Pizzas.AMERICAN_DREAM]: {
    name: 'american dream',
    prices: [35],
    ingredients: [
      Ing.SOS_POMIDOROWY,
      { type: Ing.MOZZARELLA, multiplier: 'podwójna' },
      { type: Ing.PEPPERONI, multiplier: 'podwójne' },
    ],
  },
};
