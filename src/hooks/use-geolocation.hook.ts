import { useEffect, useMemo, useState } from 'react';

import { Coordinates } from '../models';

export const useGeoLocation = (): Coordinates | null => {
  const [geoLocation, setGeoLocation] = useState<Coordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setGeoLocation(coords),
      () => setGeoLocation(null),
      {
        enableHighAccuracy: false,
        timeout: 60000,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(() => geoLocation, [geoLocation]);

  return value;
};
