import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { MenuItem } from '../MenuItem';
import { Drinks, DrinkData } from './DrinkData';

const startIndex = 53;

export const MenuDrinks = () => {
  const { menuDrinks } = useContext(LayoutContext);

  return (
    <section ref={menuDrinks} id="menu-napoje" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Napoje</h3>
      </div>
      <ul>
        {enumKeys(Drinks).map((Drink, index) => {
          const drinkData = DrinkData[Drink];
          return <MenuItem key={Drink} item={drinkData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
