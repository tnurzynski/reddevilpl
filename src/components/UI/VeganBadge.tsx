import { Pizza } from '../Menu/MenuPizzas/PizzaData';

interface VeganBadgeProps {
  isVegan: Pizza['isVegan'];
}

export const VeganBadge: React.FC<VeganBadgeProps> = (props) => {
  const { isVegan } = props;
  if (isVegan) {
    return <img className="h-full ml-2" src="/images/vegan.svg" alt="wegańskie" />;
  } else {
    return null;
  }
};
