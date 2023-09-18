import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { MenuItem } from '../MenuItem';
import { Pastas, PastaData } from './PastaData';

const startIndex = 42;

export const MenuPastas = () => {
  const { menuPastas } = useContext(LayoutContext);

  return (
    <section ref={menuPastas} id="menu-makarony" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Makarony</h3>
      </div>
      <ul>
        {enumKeys(Pastas).map((Pasta, index) => {
          const pastaData = PastaData[Pasta];
          return <MenuItem key={Pasta} item={pastaData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
