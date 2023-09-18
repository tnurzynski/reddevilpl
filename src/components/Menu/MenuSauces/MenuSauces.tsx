import React, { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import { MenuItem } from '../MenuItem';
import { FoodItem } from '../../../interfaces/FoodItem';

interface RedDevilV2Props {
  fontSize: 'text-md' | 'text-lg' | 'text-xl';
}
export const RedDevilV2: React.FC<RedDevilV2Props> = (props) => {
  const { fontSize } = props;
  return (
    <span className="whitespace-nowrap">
      <span className="logo-headline">RED&nbsp;DEVIL&nbsp;V</span>
      <span className={[fontSize, 'inline-block text-red translate-y-0.5 -translate-x-0.5 italic'].join(' ')}>
        2&nbsp;
      </span>
    </span>
  );
};

export const SauceRedDevil: React.FC = () => {
  return <span className="logo-headline">OSTRY SOS RED&nbsp;DEVIL</span>;
};

export const SauceRedDevilV2: React.FC = () => {
  return (
    <>
      <span className="logo-headline">OSTRY SOS </span>
      <RedDevilV2 fontSize="text-lg" />
    </>
  );
};

const saucesData: FoodItem = {
  name: (
    <div className="lowercase text-base">
      <span>
        pomidorowy, ketchup, BBQ, czosnkowy, chipotle&nbsp;mayo, chrzanowy, domowy&nbsp;majonez, kwaśna śmietana,
      </span>
      <span className="logo-headline"> ostry RED&nbsp;DEVIL&nbsp;</span>,
      <RedDevilV2 fontSize="text-xl" />
    </div>
  ),
  prices: [3],
};

export const MenuSauces = () => {
  const { menuSauces } = useContext(LayoutContext);

  return (
    <section ref={menuSauces} id="menu-sosy" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Sosy</h3>
      </div>
      <ul>
        <MenuItem item={saucesData} isFirst={true} />
      </ul>
    </section>
  );
};
