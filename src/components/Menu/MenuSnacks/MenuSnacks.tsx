import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { InfoBox } from '../../UI/InfoBox';
import { MenuItem } from '../MenuItem';
import { Snacks, SnackData } from './SnackData';

const startIndex = 46;

export const MenuSnacks = () => {
  const { menuSnacks } = useContext(LayoutContext);

  return (
    <section ref={menuSnacks} id="menu-przekaski" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Przekaski</h3>
      </div>
      <ul>
        {enumKeys(Snacks).map((Snack, index) => {
          const snackData = SnackData[Snack];
          return <MenuItem key={Snack} item={snackData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
