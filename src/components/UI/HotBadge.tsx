import { Pizza } from '../Menu/MenuPizzas/PizzaData';

interface HotBadgeProps {
  extraHotLevel: Pizza['extraHotLevel'];
}

const Pepper = () => <img className="h-full ml-2" src="/images/pepper.svg" alt="ostre" />;
const Skull = () => <img className="h-full ml-2" src="/images/skull.svg" alt="bardzo ostre" />;

export const HotBadge: React.FC<HotBadgeProps> = (props) => {
  const { extraHotLevel } = props;
  let badge;

  switch (extraHotLevel) {
    case 1:
      badge = <Pepper />;
      break;
    case 2:
      badge = (
        <>
          <Pepper />
          <Pepper />
        </>
      );
      break;
    case 3:
      badge = (
        <>
          <Pepper />
          <Pepper />
          <Pepper />
        </>
      );
      break;
    case 4:
      badge = <Skull />;
      break;
    case 5:
      badge = (
        <>
          <Skull />
          <Skull />
        </>
      );
      break;
    case 6:
      badge = (
        <>
          <Skull />
          <Skull />
          <Skull />
        </>
      );
      break;
    default:
      badge = null;
  }

  return badge;
};
