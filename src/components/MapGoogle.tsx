import { FC } from 'react';

import { Box } from '@chakra-ui/layout';
import { GoogleMap, Marker } from '@react-google-maps/api';

import { borderRadius } from '../constants/styles';

const mapStyles = {
  height: '100%',
  width: '100%',
  borderRadius: borderRadius,
};

const mapOptions: google.maps.MapOptions = {
  streetViewControl: false,
};

interface MapGoogleProps {
  coords: { lat: number; lng: number };
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const MapGoogle: FC<MapGoogleProps> = ({ coords, setCoords }) => {
  const handleMapClick = (e: any): void => {
    setCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  let geoCoords = coords;

  if (coords.lat === 0 && coords.lng === 0)
    geoCoords = { lat: 52.2297, lng: 21.0122 };

  return (
    <Box h={500}>
      <GoogleMap
        zoom={8}
        center={geoCoords}
        onClick={handleMapClick}
        mapContainerStyle={mapStyles}
        options={mapOptions}
      >
        <Marker position={geoCoords} />
      </GoogleMap>
    </Box>
  );
};
export default MapGoogle;
