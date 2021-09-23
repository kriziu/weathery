import { FC, useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';
import Geocode from 'react-geocode';

import InputLocation from './InputLocation';
import MapGoogle from './MapGoogle';
import { getForecast } from '../api/forecast';
import CurrentWeather from './weather/CurrentWeather';
import FutureWeather from './weather/FutureWeather';
import styled from '@emotion/styled';
import HourWeather from './weather/HourWeather';
import { ParallaxProvider } from 'react-scroll-parallax';
import DetailWeather from './weather/DetailWeather';

interface GeocodeResponseType {
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
}

export const StyledSVG = styled.svg`
  display: block;
  left: 0;
  transform: translateY(1px); // small fix on mobiles
`;

const App: FC = (): JSX.Element => {
  const [location, setLocation] = useState('No location selected');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  // getForecast({ lat: 49.963079, lng: 18.395276 }).then(res =>
  //   console.log(res.current.pressure)
  // );

  // const changeLocation = (): void => {
  //   Geocode.fromLatLng(coords.lat.toString(), coords.lng.toString())
  //     .then((response: GeocodeResponseType) => {
  //       let city = '',
  //         state = '',
  //         country = '';

  //       response.results[0].address_components.forEach(addressComponent => {
  //         addressComponent.types.forEach(type => {
  //           switch (type) {
  //             case 'neighborhood':
  //               city = addressComponent.long_name + ',';
  //               break;
  //             case 'postal_town':
  //               city = addressComponent.long_name + ',';
  //               break;
  //             case 'sublocality':
  //               city = addressComponent.long_name + ',';
  //               break;
  //             case 'locality':
  //               city = addressComponent.long_name + ',';
  //               break;
  //             case 'administrative_area_level_1':
  //               state = addressComponent.long_name + ',';
  //               break;
  //             case 'administrative_area_level_2':
  //               state = addressComponent.long_name + ',';
  //               break;
  //             case 'country':
  //               country = addressComponent.long_name + ',';
  //               break;
  //           }
  //         });
  //       });
  //       setLocation(`${city} ${state} ${country}`);
  //     })
  //     .catch(() => {});
  // };

  // useEffect(() => {
  //   Geocode.setApiKey('AIzaSyAaNjFR_LN6izfmGEPx_1ZCYMkNfZhxSQs');
  // }, []);

  // useEffect(() => {
  //   if (coords.lat === 0 && coords.lng === 0) return;
  //   changeLocation();
  //   console.log('e');
  //   getForecast(coords);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [coords]);

  return (
    <ParallaxProvider>
      <ChakraProvider>
        <Box
          bgGradient="linear(to-tr, yellow.300, orange.400)"
          position="fixed"
          width="full"
          top={0}
          pb={60}
        >
          <Box p={[5, 10]} position="relative" pb={0}>
            <Heading size="xl" textAlign="center" pt={5}>
              {location}
            </Heading>
            <CurrentWeather />
          </Box>
        </Box>

        <Box
          transform={[
            'translateY(17rem)',
            'translateY(17rem)',
            'translateY(15rem)',
            'translateY(13rem)',
          ]}
        >
          <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </StyledSVG>
          <Box bgColor={'white'}>
            <HourWeather />
            <FutureWeather />
            <DetailWeather />
          </Box>
        </Box>
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default App;
