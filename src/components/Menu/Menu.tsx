import { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { MenuBurgers } from './MenuBurgers/MenuBurgers';
import { MenuDrinks } from './MenuDrinks/MenuDrinks';
import { MenuQuesadilla } from './MenuQuesadilla/MenuQuesadilla';
import { MenuPastas } from './MenuPastas/MenuPastas';
import { MenuPizzas } from './MenuPizzas/MenuPizzas';
import { MenuSnacks } from './MenuSnacks/MenuSnacks';
import { MenuSoups } from './MenuSoups/MenuSoups';
import { MenuSauces } from './MenuSauces/MenuSauces';

export const Menu = () => {
  const { menu } = useContext(LayoutContext);

  return (
    <div ref={menu} id="menu">
      <MenuPizzas />
      <MenuSauces />
      <MenuBurgers />
      <MenuQuesadilla />
      <MenuPastas />
      <MenuSnacks />
      <MenuSoups />
      <MenuDrinks />
    </div>
  );
};
