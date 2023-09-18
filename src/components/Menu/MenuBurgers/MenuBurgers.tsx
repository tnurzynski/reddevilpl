import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { MenuItem } from '../MenuItem';
import { Burgers, BurgerData } from './BurgerData';

const startIndex = 25;

export const MenuBurgers = () => {
  const { menuBurgers } = useContext(LayoutContext);

  return (
    <section ref={menuBurgers} id="menu-burgery" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Burgery</h3>
      </div>
      <ul>
        {enumKeys(Burgers).map((Burger, index) => {
          const burgerData = BurgerData[Burger];
          return <MenuItem key={Burger} item={burgerData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
