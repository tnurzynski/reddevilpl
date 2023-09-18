import React, { useEffect, useState } from 'react';
import { ContactData } from '../../interfaces/Contact';
import { Button } from '../UI/Button';
import { LinkToSection } from '../UI/LinkToSection';
import * as stylesModule from './Hero.module.css';

const styles: any = stylesModule;

export const Hero: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  /*
  useEffect(() => {
    const id = setTimeout(() => {
      setImageIndex(1 - imageIndex);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [imageIndex]);
  */

  const isBackgroundDark = imageIndex === 0;

  const textClasses = isBackgroundDark
    ? 'text-gray-tint-60 text-shadow-white-xl'
    : 'text-gray-shade-60 text-shadow-black-xl';

  return (
    <div className={['relative transition-all', isBackgroundDark ? 'bg-black' : 'bg-gray-tint-50'].join(' ')}>
      <div
        className={[
          'absolute inset-0 transition-all',
          styles.heroImg,
          styles.heroImg1,
          imageIndex === 0 ? 'opacity-30' : 'opacity-0',
        ].join(' ')}
      ></div>
      <div
        className={[
          'absolute inset-0 transition-all',
          styles.heroImg,
          styles.heroImg2,
          imageIndex === 1 ? 'opacity-30' : 'opacity-0',
        ].join(' ')}
      ></div>
      <div className="relative z-10 container flex flex-col justify-around min-h-screen pt-16 pb-4">
        <div
          className={[
            'text-center transition-all',
            isBackgroundDark ? 'text-red text-shadow-red-lg' : 'text-red-shade-20 text-shadow-black-xl',
          ].join(' ')}
        >
          <img
            id="hero_logo"
            className="w-40 h-40 3xl:w-64 3xl:h-64 mx-auto mb-12"
            src="../../images/red-devil.svg"
            alt="Red Devil"
          />
          <h2 className="logo-headline text-3xl pb-4">Piekielnie dobre jedzenie</h2>
        </div>
        <div className={['py-1 transition-all max-w-2xl mx-auto text-center', textClasses].join(' ')}>
          <p className="mb-4">
            Nasza specjalność to <strong>pikantne potrawy</strong> przygotowane według{' '}
            <span className="whitespace-nowrap">
              <strong>autorskich receptur</strong>.
            </span>
          </p>
          <p className="mb-4">
            Nie jesteś koneserem <strong>ostrego jedzenia</strong>?
            <br />
            Nie szkodzi! W naszym <strong>szerokim menu</strong>{' '}
            <span className="whitespace-nowrap">każdy znajdzie coś dla siebie.</span>
          </p>
        </div>
        <div className="flex flex-col items-center pb-8">
          <div className={['text-center', textClasses].join(' ')}>
            <div>
              Zadzwoń i zamów:{' '}
              <a className="text-red" href={`tel:${ContactData.tel}`}>
                {ContactData.telHyphens}
              </a>
            </div>
            <div className="my-2 text-sm">lub</div>
          </div>
          <Button
            Element={LinkToSection}
            href="#menu"
            buttonType="primary"
            buttonTypeOnHover={isBackgroundDark ? 'tertiary' : 'secondary'}
          >
            Zobacz menu
          </Button>
        </div>
      </div>
    </div>
  );
};
