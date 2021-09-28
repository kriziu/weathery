import { createContext, FC, useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Box, Center, Heading } from '@chakra-ui/layout';
import { Fade } from '@chakra-ui/transition';
import { Spinner } from '@chakra-ui/spinner';
import { IconButton } from '@chakra-ui/button';

import Geocode from 'react-geocode';
import styled from '@emotion/styled';
import { ParallaxProvider } from 'react-scroll-parallax';
import useResizeObserver from 'use-resize-observer';
import { IoSettingsOutline } from 'react-icons/io5';

import { getForecast, ResponseDataType } from '../api/forecast';
import CurrentWeather from './weather/CurrentWeather';
import FutureWeather from './weather/FutureWeather';
import HourWeather from './weather/HourWeather';
import { gradients } from '../utils/gradients';
import Settings from './Settings';
import LocationSlider from './LocationSlider';

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

// TODO:
// PRZENIESC DO DWOCH OSOBNYCH KOMPONENTOW
// GOOGLE MAPS I USLUGI PRZENIESC DO FOLDERU (STWORZYC NOWY)
// DARK MODE I FAHRENHEIT
// MAYBE NA KOMPY WYGLAD

export const DegreeContext = createContext<{
  degree: 'C' | 'F';
  setDegree: React.Dispatch<React.SetStateAction<'C' | 'F'>>;
}>({
  degree: 'C',
  setDegree: () => {},
});

const App: FC = (): JSX.Element => {
  const [degree, setDegree] = useState<'C' | 'F'>('C');
  const contextValue = { degree, setDegree };

  const [location, setLocation] = useState('No location selected');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [changingLocation, setChangingLocation] = useState(true);
  const [forecast, setForecast] = useState<ResponseDataType>();
  const [loading, setLoading] = useState(false);
  const [settingsShown, setSettingsShown] = useState(false);

  const { ref, height = 1 } = useResizeObserver();

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
                country = addressComponent.long_name;
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
    getForecast(coords).then(res => {
      setForecast(res);
      setLoading(false);
    });
    setChangingLocation(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  return (
    <ParallaxProvider>
      <ChakraProvider>
        <DegreeContext.Provider value={contextValue}>
          <LocationSlider
            changingLocation={changingLocation}
            coords={coords}
            setCoords={setCoords}
            location={location}
            setChangingLocation={setChangingLocation}
          />

          {forecast && (
            <Settings
              forecast={forecast.current}
              setSettingsShown={setSettingsShown}
              settingsShown={settingsShown}
            />
          )}

          {loading ? (
            <Center h="100vh" w="100vw">
              <Spinner size="xl" />
            </Center>
          ) : (
            forecast && (
              <Fade in={!loading} unmountOnExit>
                <Box
                  bgGradient={
                    forecast
                      ? gradients[forecast.current.weather[0].icon]
                      : gradients['03d']
                  }
                  position="fixed"
                  width="full"
                  ref={ref}
                  top={0}
                  color={
                    forecast && forecast.current.weather[0].icon[2] === 'n'
                      ? 'gray.500'
                      : ''
                  }
                  pb={[100, 200, 300, 400]}
                >
                  <Box p={[5, 10]} position="relative" pb={0}>
                    <Heading
                      size="xl"
                      textAlign="center"
                      cursor="pointer"
                      mt={8}
                      onClick={() => setChangingLocation(true)}
                    >
                      {location}
                    </Heading>

                    <IconButton
                      position="absolute"
                      right={[4, 6, 8, 10]}
                      top={[4, 6, 8, 10]}
                      zIndex={5}
                      aria-label="settings"
                      variant="ghost"
                      onClick={() => setSettingsShown(!settingsShown)}
                      icon={<IoSettingsOutline size={38} />}
                    />

                    <CurrentWeather
                      {...forecast.current}
                      feels_like={forecast.daily[0].feels_like.day}
                      pop={forecast.daily[0].pop}
                    />
                  </Box>
                </Box>

                <Box
                  transform={[
                    `translateY(${height}px)`,
                    `translateY(${height - 80}px)`,
                    `translateY(${height - 100}px)`,
                  ]}
                  onClick={() =>
                    location !== 'No location selected' &&
                    setChangingLocation(false)
                  }
                >
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
                  <Box bgColor="white">
                    <HourWeather {...forecast.hourly} />
                    <FutureWeather {...forecast.daily} />
                  </Box>
                </Box>
              </Fade>
            )
          )}
        </DegreeContext.Provider>
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default App;
