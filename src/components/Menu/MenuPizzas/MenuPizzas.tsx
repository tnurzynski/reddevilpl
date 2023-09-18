import { useContext, Fragment } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import { TwoPricesContainer } from '../../../components/UI/TwoPricesContainer';
import enumKeys from '../../../util/enumKeys';
import { InfoBox } from '../../UI/InfoBox';
import { MenuItem } from '../MenuItem';
import { Pizzas, PizzaData } from './PizzaData';

const startIndex = 1;

export const MenuPizzas = () => {
  const { menuPizzas } = useContext(LayoutContext);

  return (
    <section ref={menuPizzas} id="menu-pizza" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Pizza</h3>
        <TwoPricesContainer item1="ok. 32cm" containerClassName="text-sm text-red" isPrice={false} />
      </div>
      <ul>
        {enumKeys(Pizzas).map((pizza, index) => {
          const pizzaData = PizzaData[pizza];
          pizzaData.descriptionLong = (
            <>
              {pizzaData.ingredients.map((ingItem, index) => {
                const isObject = typeof ingItem !== 'string';
                const ing = isObject ? ingItem.type : ingItem;
                const ingText = isObject && ingItem.multiplier ? `${ingItem.multiplier} ${ingItem.type}` : ingItem;
                const defaultRenderer: React.FC = () => <>{ingText}</>;
                const IngRenderer = isObject && ingItem.renderer ? ingItem.renderer : defaultRenderer;
                return (
                  <Fragment key={ing}>
                    {index > 0 && ', '}
                    <IngRenderer />
                  </Fragment>
                );
              })}
            </>
          );
          return <MenuItem key={pizza} item={pizzaData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
      <InfoBox>
        <div className="flex justify-between items-center">
          <div>
            <div>RULETKA:</div>
            <div className="pt-0.5">
              <span>jeden kawałek zamówionej pizzy polany zostanie</span>
              <span className="logo-headline ml-2">AUTORSKIM</span>
              <span className="relative top-0.5 text-red text-xl">,</span>
              <span className="logo-headline ml-2">PIEKIELNIE OSTRYM SOSEM&nbsp;!!!</span>
            </div>
          </div>
          <img className="h-20 hidden lg:block" src="/images/ruletka.png" alt="ruletka" />
        </div>
      </InfoBox>
    </section>
  );
};
