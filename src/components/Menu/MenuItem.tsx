import { HotBadge } from '../UI/HotBadge';
import { VeganBadge } from '../UI/VeganBadge';
import { TwoPricesContainer } from '../UI/TwoPricesContainer';
import { FoodItem } from '../../interfaces/FoodItem';

interface MenuItemProps {
  item: FoodItem;
  isFirst: boolean;
  index?: number;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { item, isFirst, index } = props;
  return (
    <li className={['border-gray-shade-40 py-2', !isFirst ? 'border-t' : ''].join(' ')}>
      <div className="flex justify-between items-start">
        <div className="lg:flex items-center">
          <div className="flex items-center headline text-lg">
            {index && <div className="pr-2 flex-none">{index}.</div>}
            <div className={[item.extraHotLevel && !item.isVegan ? 'text-red' : ''].join(' ')}>{item.name}</div>
            <div className="flex h-4">
              <VeganBadge isVegan={item.isVegan} />
              <HotBadge extraHotLevel={item.extraHotLevel} />
            </div>
          </div>
          {item.descriptionShort && (
            <div className={['text-xs lg:pl-2', index ? 'pl-2' : ''].join(' ')}>{item.descriptionShort}</div>
          )}
        </div>
        <TwoPricesContainer
          item1={item.prices[0].toString()}
          item2={item.prices[1]?.toString()}
          customJustify={item.customJustify}
        />
      </div>
      {item.descriptionLong && (
        <div className={['text-xs', index ? 'pl-2' : '', item.prices[1] ? 'pr-20' : 'pr-12'].join(' ')}>
          {item.descriptionLong}
        </div>
      )}
    </li>
  );
};
