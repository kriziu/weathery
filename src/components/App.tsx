import { FC, useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';
import Geocode from 'react-geocode';

import InputLocation from './InputLocation';
import MapGoogle from './MapGoogle';

interface GeocodeResponseType {
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
}

const App: FC = (): JSX.Element => {
  const [location, setLocation] = useState('No location selected');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    Geocode.setApiKey('AIzaSyAaNjFR_LN6izfmGEPx_1ZCYMkNfZhxSQs');
  }, []);

  useEffect(() => {
    Geocode.fromLatLng(coords.lat.toString(), coords.lng.toString())
      .then((response: GeocodeResponseType) => {
        let city = '',
          state = '',
          country = '';

        response.results[0].address_components.forEach(addressComponent => {
          addressComponent.types.forEach(type => {
            switch (type) {
              case 'neighborhood':
                city = addressComponent.long_name + ',';
                break;
              case 'postal_town':
                city = addressComponent.long_name + ',';
                break;
              case 'sublocality':
                city = addressComponent.long_name + ',';
                break;
              case 'locality':
                city = addressComponent.long_name + ',';
                break;
              case 'administrative_area_level_1':
                state = addressComponent.long_name + ',';
                break;
              case 'administrative_area_level_2':
                state = addressComponent.long_name + ',';
                break;
              case 'country':
                country = addressComponent.long_name + ',';
                break;
            }
          });
        });
        setLocation(`${city} ${state} ${country}`);
      })
      .catch(() => {});
  }, [coords]);

  return (
    <ChakraProvider>
      <Box p={[5, 10]}>
        <Heading size="xl" textAlign="center" mb={5}>
          {location}
        </Heading>
        <InputLocation setCoords={setCoords} />
        <Box p={[5, 10]} height="sm">
          <MapGoogle coords={coords} setCoords={setCoords} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
