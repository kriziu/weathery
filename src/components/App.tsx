import { createContext, FC, useEffect, useRef, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center, Heading } from '@chakra-ui/layout';
import { Fade, Slide } from '@chakra-ui/transition';
import { Portal } from '@chakra-ui/portal';
import { Spinner } from '@chakra-ui/spinner';
import Geocode from 'react-geocode';
import { ParallaxProvider } from 'react-scroll-parallax';
import useResizeObserver from 'use-resize-observer';

import InputLocation from './InputLocation';
import MapGoogle from './MapGoogle';
import { getForecast, ResponseDataType } from '../api/forecast';
import CurrentWeather from './weather/CurrentWeather';
import FutureWeather from './weather/FutureWeather';
import styled from '@emotion/styled';
import HourWeather from './weather/HourWeather';

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

const degree: 'C' | 'F' = 'C';

export const DegreeContext = createContext(degree);

const App: FC = (): JSX.Element => {
  const [location, setLocation] = useState('No location selected');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [changingLocation, setChangingLocation] = useState(true);
  const [forecast, setForecast] = useState<ResponseDataType>();
  const [loading, setLoading] = useState(false);

  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();

  const changeLocation = (): void => {
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
  };

  useEffect(() => {
    Geocode.setApiKey('AIzaSyAaNjFR_LN6izfmGEPx_1ZCYMkNfZhxSQs');
  }, []);

  useEffect(() => {
    if (coords.lat === 0 && coords.lng === 0) return;

    changeLocation();
    setLoading(true);
    console.log('loading true');
    getForecast(coords).then(res => {
      setForecast(res);
      setLoading(false);
      console.log('loading false');
    });
    setChangingLocation(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  return (
    <ParallaxProvider>
      <ChakraProvider>
        <DegreeContext.Provider value={degree}>
          <Slide in={changingLocation} direction="top" style={{ zIndex: 5 }}>
            <Box bgColor="white" w="full" height="full" px={5} pb={40}>
              <Heading
                size="xl"
                textAlign="center"
                pt={5}
                onClick={() => setChangingLocation(!changingLocation)}
              >
                {location}
              </Heading>
              <InputLocation setCoords={setCoords} />
              <Box p={[5, 10]} height="sm">
                <MapGoogle coords={coords} setCoords={setCoords} />
              </Box>{' '}
            </Box>
          </Slide>

          <Box
            bgGradient="linear(to-tr, yellow.300, orange.400)"
            position="fixed"
            width="full"
            ref={ref}
            top={0}
            pb={[100, 200, 300, 400]}
          >
            {forecast ? (
              <Box p={[5, 10]} position="relative" pb={0}>
                <Heading
                  size="xl"
                  textAlign="center"
                  pt={5}
                  onClick={() => setChangingLocation(true)}
                >
                  {location}
                </Heading>
                <CurrentWeather
                  {...forecast.current}
                  feels_like={forecast.daily[0].feels_like.day}
                  pop={forecast.daily[0].pop}
                />
              </Box>
            ) : (
              <>
                <Heading
                  textAlign="center"
                  mt={32}
                  onClick={() => setChangingLocation(!changingLocation)}
                >
                  Click to select location
                </Heading>
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  style={{ position: 'absolute', bottom: 0 }}
                >
                  <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </StyledSVG>
              </>
            )}
          </Box>

          <Box
            transform={[
              `translateY(${height}px)`,
              `translateY(${height - 80}px)`,
              `translateY(${height - 120}px)`,
            ]}
            onClick={() => setChangingLocation(false)}
          >
            {forecast && (
              <>
                <StyledSVG
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </StyledSVG>
                <Box bgColor={'white'}>
                  <HourWeather {...forecast.hourly} />
                  <FutureWeather {...forecast.daily} />
                </Box>
              </>
            )}
          </Box>

          <Portal>
            <Fade in={loading}>
              <Center
                w="100vw"
                h="100vh"
                bgColor="blackAlpha.700"
                zIndex={4}
                position="fixed"
              >
                <Spinner color="white" size="xl" />
              </Center>
            </Fade>
          </Portal>
        </DegreeContext.Provider>
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default App;
