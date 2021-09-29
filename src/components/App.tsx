import { createContext, FC, useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import { Fade } from '@chakra-ui/transition';
import { Spinner } from '@chakra-ui/spinner';

import Geocode from 'react-geocode';
import { ParallaxProvider } from 'react-scroll-parallax';

import { getForecast, ResponseDataType } from '../api/forecast';
import Settings from './Settings';
import LocationSlider from './location/LocationSlider';
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import theme from '../theme';

interface GeocodeResponseType {
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
}

// TODO:
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
  const [height, setHeight] = useState(0);

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
      <ChakraProvider theme={theme}>
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
                <MainComponent
                  forecast={forecast}
                  location={location}
                  setHeight={setHeight}
                  setChangingLocation={setChangingLocation}
                  setSettingsShown={setSettingsShown}
                />
                <SecondaryComponent
                  height={height}
                  setChangingLocation={setChangingLocation}
                  location={location}
                  forecast={forecast}
                />
              </Fade>
            )
          )}
        </DegreeContext.Provider>
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default App;
