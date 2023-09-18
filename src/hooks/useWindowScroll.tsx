import { useEffect, useState } from 'react';

export function useWindowScroll<T>(fn: () => T, initialValue: T, debounceDelay: number): T {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleScroll = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setState(fn());
      }, debounceDelay);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [debounceDelay]);

  return state;
}
