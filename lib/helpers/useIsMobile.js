import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const mediaQueryList = matchMedia('(max-width: 767px)');
  const [isMobile, setIsMobile] = useState(mediaQueryList.matches);

  useEffect(() => {
    const listener = e => setIsMobile(e.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [mediaQueryList]);

  return isMobile;
};
