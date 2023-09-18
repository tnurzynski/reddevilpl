import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import useOnScreen from '../../hooks/useOnScreen';
import { Carousel, CarouselOptions } from '../Carousel/Carousel';
import { LinkToSection } from '../UI/LinkToSection';

const carouselOptions: CarouselOptions = {
  slidesPerView: 'auto',
  spaceBetween: 0,
};

type NavItem = {
  name: string;
  target: string;
  isVisible: boolean;
};

const intersectionObserverOptions: IntersectionObserverInit = {
  rootMargin: '-20% 0px -50% 0px',
};

export const Nav: React.FC = React.memo(() => {
  const { menuBurgers, menuQuesadilla, menuPastas, menuPizzas, menuSoups } = useContext(LayoutContext);

  const isActiveItem = {
    pizza: useOnScreen(menuPizzas, intersectionObserverOptions),
    burger: useOnScreen(menuBurgers, intersectionObserverOptions),
    pasta: useOnScreen(menuPastas, intersectionObserverOptions),
    quesadilla: useOnScreen(menuQuesadilla, intersectionObserverOptions),
    soup: useOnScreen(menuSoups, intersectionObserverOptions),
  };

  const items: NavItem[] = [
    {
      name: 'pizza',
      target: '#menu-pizza',
      isVisible: isActiveItem.pizza,
    },
    {
      name: 'burgery',
      target: '#menu-burgery',
      isVisible: isActiveItem.burger,
    },
    {
      name: 'quesadilla',
      target: '#menu-quesadilla',
      isVisible: isActiveItem.quesadilla,
    },
    {
      name: 'makarony',
      target: '#menu-makarony',
      isVisible: isActiveItem.pasta,
    },
    {
      name: 'zupy',
      target: '#menu-zupy',
      isVisible: isActiveItem.soup,
    },
  ];

  const activeItemIndex = items.findIndex((item) => item.isVisible);

  return (
    <ul className="nav_carousel flex md:justify-center">
      <Carousel
        parentClassName={'nav_carousel'}
        carouselOptions={carouselOptions}
        destroyBreakpoint={768}
        wrapperClassName="flex"
        alwaysVisibleItem={activeItemIndex}
      >
        {items.map((item, index) => (
          <li
            key={item.target}
            className={[
              'text-sm uppercase pr-3 border-current whitespace-nowrap',
              index > 0 ? 'pl-3' : '',
              index < items.length - 1 ? 'border-r' : '',
            ].join(' ')}
          >
            <LinkToSection
              href={item.target}
              className={[
                'transition-all',
                index === activeItemIndex ? 'text-red hover:text-red' : 'hover:text-red-tint-40',
              ].join(' ')}
            >
              {item.name}
            </LinkToSection>
          </li>
        ))}
      </Carousel>
    </ul>
  );
});
