import { createContext, useRef } from 'react';

interface ILayoutContext {
  header: React.MutableRefObject<null | HTMLElement>;
  menu: React.MutableRefObject<null | HTMLDivElement>;
  menuBurgers: React.MutableRefObject<null | HTMLElement>;
  menuDrinks: React.MutableRefObject<null | HTMLElement>;
  menuQuesadilla: React.MutableRefObject<null | HTMLElement>;
  menuPastas: React.MutableRefObject<null | HTMLElement>;
  menuPizzas: React.MutableRefObject<null | HTMLElement>;
  menuSauces: React.MutableRefObject<null | HTMLElement>;
  menuSnacks: React.MutableRefObject<null | HTMLElement>;
  menuSoups: React.MutableRefObject<null | HTMLElement>;
}

export const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext);

export const LayoutContextProvider: React.FC = ({ children }) => {
  const header = useRef(null);
  const menu = useRef(null);
  const menuDrinks = useRef(null);
  const menuBurgers = useRef(null);
  const menuQuesadilla = useRef(null);
  const menuPastas = useRef(null);
  const menuPizzas = useRef(null);
  const menuSauces = useRef(null);
  const menuSnacks = useRef(null);
  const menuSoups = useRef(null);

  return (
    <LayoutContext.Provider
      value={{
        header,
        menu,
        menuBurgers,
        menuDrinks,
        menuQuesadilla,
        menuPastas,
        menuPizzas,
        menuSauces,
        menuSnacks,
        menuSoups,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
