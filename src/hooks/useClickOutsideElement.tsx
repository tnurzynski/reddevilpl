import { RefObject, useEffect } from 'react';

export type useClickOutsideElementCallback = () => void;

export function useClickOutsideElement(
  elementRef: RefObject<HTMLElement>,
  callback: useClickOutsideElementCallback
) {
  useEffect(() => {
    const onClickOutsideElement = (e: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', onClickOutsideElement);
    return () => {
      document.removeEventListener('click', onClickOutsideElement);
    };
  }, [elementRef, callback]);
}
