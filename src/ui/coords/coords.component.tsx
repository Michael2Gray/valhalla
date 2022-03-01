import React from 'react';

import { Coordinates } from '../../models';
import { CoordsDirection } from './coords-direction.component';

type CoordsProps = {
  coords: Coordinates;
  icon?: React.ReactNode;
};

export const Coords = ({
  coords: { latitude, longitude },
  icon,
}: CoordsProps) => (
  <span className="items-Center flex">
    {!!icon && <>{icon}</>}
    <CoordsDirection value={latitude} type="latitude" />,{' '}
    <CoordsDirection value={longitude} type="longitude" />
  </span>
);
