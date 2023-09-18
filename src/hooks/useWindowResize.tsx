import { useEffect, useState } from 'react';

export function useWindowResize(debounceDelay: number): number {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleResize = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [debounceDelay]);

  return windowWidth;
}
