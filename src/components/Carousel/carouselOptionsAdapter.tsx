import { SwiperOptions } from 'swiper';
import { CarouselOptions } from './Carousel';

export const parseCarouselOptions = (incomingCarouselOptions: CarouselOptions): SwiperOptions => {
  const defaultCarouselOptions: CarouselOptions = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    useNav: false,
    usePag: false,
    navOptions: {
      prevElSelector: '.carousel-nav-prev',
      nextElSelector: '.carousel-nav-next',
      disabledClass: 'carousel-nav-disabled',
    },
    pagOptions: {
      elSelector: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {},
  };

  const options = {
    ...defaultCarouselOptions,
    ...incomingCarouselOptions,
    navOptions: {
      ...defaultCarouselOptions.navOptions,
      ...incomingCarouselOptions.navOptions,
    },
    pagOptions: {
      ...defaultCarouselOptions.pagOptions,
      ...incomingCarouselOptions.pagOptions,
    },
  };

  let swiperNavigation: SwiperOptions['navigation'];
  if (options.useNav === true) {
    swiperNavigation = {
      prevEl: options.navOptions.prevElSelector,
      nextEl: options.navOptions.nextElSelector,
      disabledClass: options.navOptions.disabledClass,
    };
  } else {
    swiperNavigation = false;
  }

  let swiperPagination: SwiperOptions['pagination'];
  if (options.usePag === true) {
    swiperPagination = {
      el: options.pagOptions.elSelector,
      type: options.pagOptions.type,
    };
  } else {
    swiperPagination = false;
  }

  return {
    slidesPerView: options.slidesPerView,
    spaceBetween: options.spaceBetween,
    navigation: swiperNavigation,
    breakpoints: options.breakpoints,
    pagination: swiperPagination,
  };
};
