import { Link } from 'gatsby';
import { useMemo } from 'react';

import { useWindowScroll } from '../../hooks/useWindowScroll';
import { Button } from '../UI/Button';
import { LinkToSection } from '../UI/LinkToSection';
import { Nav } from './Nav';

const getHeroLogoPosition: () => number = () => {
  let heroLogoPosition: number = 0;
  const heroLogo = document.querySelector('#hero_logo');
  if (heroLogo) {
    heroLogoPosition = heroLogo.getBoundingClientRect().top;
  }
  return heroLogoPosition;
};

export const Header: React.FC = () => {
  const heroLogoPosition = useWindowScroll<number>(getHeroLogoPosition, 0, 50);

  const shouldBeTransparent = heroLogoPosition === 0 || heroLogoPosition > 60;

  return useMemo(() => {
    return (
      <div
        className={[
          'transition-all fixed w-full z-20 border-b',
          shouldBeTransparent ? 'bg-transparent border-transparent' : 'bg-gray-shade-80 border-current',
        ].join(' ')}
      >
        <header id="header" className="container py-4 w-full flex flex-wrap justify-between items-center">
          <Link to="/">
            <h1
              className={[
                'transition-all overflow-hidden font-logo text-red text-3xl leading-10',
                shouldBeTransparent ? 'h-0 opacity-0' : 'h-10 opacity-1',
              ].join(' ')}
            >
              Red Devil
            </h1>
          </Link>
          <div
            className={[
              'transition-all overflow-hidden w-24 md:order-3',
              shouldBeTransparent ? 'h-0 opacity-0' : 'h-10 opacity-1',
            ].join(' ')}
          >
            <Button
              Element={LinkToSection}
              href="#kontakt"
              buttonType="primary"
              buttonTypeOnHover="tertiary"
              customHeight="h-10"
            >
              Zamów
            </Button>
          </div>
          <nav className="flex-grow w-full pt-3 md:order-2 md:w-auto md:pt-0">
            <Nav />
          </nav>
        </header>
      </div>
    );
  }, [shouldBeTransparent]);
};
