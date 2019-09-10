import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const mediaQueryList = matchMedia('(max-width: 767px)');
  const [isMobile, setIsMobile] = useState(mediaQueryList.matches);

  useEffect(() => {
    const listener = event => setIsMobile(event.matches);

    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile;
};
