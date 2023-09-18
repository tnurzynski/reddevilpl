import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { MenuItem } from '../MenuItem';
import { Soups, SoupData } from './SoupData';

const startIndex = 51;

export const MenuSoups = () => {
  const { menuSoups } = useContext(LayoutContext);

  return (
    <section ref={menuSoups} id="menu-zupy" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Zupy</h3>
      </div>
      <ul>
        {enumKeys(Soups).map((Soup, index) => {
          const soupData = SoupData[Soup];
          return <MenuItem key={Soup} item={soupData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
