import { FC, useState } from 'react';

import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';
import { Collapse } from '@chakra-ui/transition';
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
  const [visible, setVisible] = useState(false);

  const handleMapClick = (e: any): void => {
    setCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  let geoCoords = coords;

  if (coords.lat === 0 && coords.lng === 0)
    geoCoords = { lat: 52.2297, lng: 21.0122 };

  return (
    <Box w="100%">
      <FormControl display="flex" alignItems="center" mb={5}>
        <FormLabel htmlFor="email-alerts" mb="0">
          Google map
        </FormLabel>
        <Switch
          id="email-alerts"
          isChecked={visible}
          onChange={() => setVisible(!visible)}
        />
      </FormControl>
      <Collapse in={visible} endingHeight={300} startingHeight={0}>
        <GoogleMap
          zoom={8}
          center={geoCoords}
          onClick={handleMapClick}
          mapContainerStyle={mapStyles}
          options={mapOptions}
        >
          <Marker position={geoCoords} />
        </GoogleMap>
      </Collapse>
    </Box>
  );
};
export default MapGoogle;
