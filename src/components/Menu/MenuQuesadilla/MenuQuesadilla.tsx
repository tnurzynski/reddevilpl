import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';
import enumKeys from '../../../util/enumKeys';
import { InfoBox } from '../../UI/InfoBox';
import { TwoPricesContainer } from '../../UI/TwoPricesContainer';
import { MenuItem } from '../MenuItem';
import { Quesadillas, QuesadillaData } from './QuesadillaData';

const startIndex = 36;

export const MenuQuesadilla = () => {
  const { menuQuesadilla } = useContext(LayoutContext);

  return (
    <section ref={menuQuesadilla} id="menu-quesadilla" className="container py-4">
      <div className="flex justify-between border-red-shade-40 border-b py-2">
        <h3 className="menu__header">Quesadilla</h3>
        <TwoPricesContainer item1="ok. 30cm" containerClassName="text-sm text-red" isPrice={false} />
      </div>
      <InfoBox>
        <p>Limonka i sos do wyboru gratis</p>
      </InfoBox>
      <ul>
        {enumKeys(Quesadillas).map((quesadilla, index) => {
          const mainDishData = QuesadillaData[quesadilla];
          return <MenuItem key={quesadilla} item={mainDishData} isFirst={index === 0} index={startIndex + index} />;
        })}
      </ul>
    </section>
  );
};
