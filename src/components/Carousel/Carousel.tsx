import React, { FC, useEffect, useMemo, useState } from 'react';
import Swiper, { SwiperOptions, Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import './Carousel.css';

import { useWindowResize } from '../../hooks/useWindowResize';

import { parseCarouselOptions } from './carouselOptionsAdapter';

export interface CarouselOptions {
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  useNav?: boolean;
  usePag?: boolean;
  navOptions?: {
    prevElSelector?: string;
    nextElSelector?: string;
    disabledClass?: string;
  };
  pagOptions?: {
    elSelector?: string;
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom' | undefined;
  };
  breakpoints?: any;
}

export interface CarouselProps {
  parentClassName: string;
  carouselOptions: CarouselOptions;
  wrapperClassName?: string;
  destroyBreakpoint?: number;
  loadingClass?: string;
  dimSlides?: boolean;
  alwaysVisibleItem?: number;
}

export const Carousel: FC<CarouselProps> = (props) => {
  const {
    children,
    parentClassName,
    wrapperClassName = '',
    carouselOptions,
    destroyBreakpoint = 9000,
    loadingClass = '',
    dimSlides = false,
    alwaysVisibleItem,
  } = props;

  const debouncedWindowWidth = useWindowResize(500);

  const [carouselObject, setCarouselObject] = useState<Swiper>();
  const swiperOptions: SwiperOptions = parseCarouselOptions(carouselOptions);

  useEffect(() => {
    if (alwaysVisibleItem !== undefined && alwaysVisibleItem >= 0 && debouncedWindowWidth < destroyBreakpoint) {
      carouselObject?.slideTo(alwaysVisibleItem, 100);
    }
  }, [alwaysVisibleItem, debouncedWindowWidth, destroyBreakpoint]);

  useEffect(() => {
    //initialize carousel on mobile if it's not initialized
    //destroy carousel on desktop if it is initialized
    if (debouncedWindowWidth === 0) return;

    if ((!carouselObject || carouselObject.destroyed) && debouncedWindowWidth < destroyBreakpoint) {
      if (carouselOptions.useNav) {
        Swiper.use([Navigation]);
      }
      if (carouselOptions.usePag) {
        Swiper.use([Pagination]);
      }
      let swiper = new Swiper(`.${parentClassName}`, swiperOptions);
      setCarouselObject(swiper);
    } else if (carouselObject && !carouselObject.destroyed && debouncedWindowWidth >= destroyBreakpoint) {
      carouselObject.destroy();
    }
  }, [
    debouncedWindowWidth,
    carouselObject,
    parentClassName,
    carouselOptions,
    swiperOptions,
    destroyBreakpoint,
    dimSlides,
  ]);

  const isLoading = debouncedWindowWidth === 0;
  const isCarousel = !isLoading && debouncedWindowWidth < destroyBreakpoint;

  return useMemo(() => {
    return (
      <div
        className={[
          isCarousel ? 'swiper-wrapper' : '',
          wrapperClassName,
          isLoading ? loadingClass : '',
          dimSlides && swiperOptions.slidesPerView === 1 ? 'swiper-dimmed' : '',
        ].join(' ')}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (isLoading) {
              return <div>{child}</div>;
            } else if (isCarousel) {
              return <div className="swiper-slide">{child}</div>;
            } else {
              return child;
            }
          }
        })}
      </div>
    );
  }, [
    children,
    isLoading,
    isCarousel,
    loadingClass,
    destroyBreakpoint,
    dimSlides,
    swiperOptions.slidesPerView,
    wrapperClassName,
  ]);
};
