import { createContext, FC, useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import { Fade } from '@chakra-ui/transition';
import { Spinner } from '@chakra-ui/spinner';

import { ParallaxProvider } from 'react-scroll-parallax';

import { getForecast } from '../api/forecast';
import Settings from './Settings';
import LocationSlider from './location/LocationSlider';
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import theme from '../theme';
import { ResponseDataType } from '../types/forecast';
import axios from 'axios';

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

  const [locationName, setLocationName] = useState('No location selected...');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [changingLocation, setChangingLocation] = useState(true);
  const [forecast, setForecast] = useState<ResponseDataType>();
  const [loading, setLoading] = useState(false);
  const [settingsShown, setSettingsShown] = useState(false);
  const [height, setHeight] = useState(0);

  const fetchForecast = (): void => {
    setLoading(true);
    getForecast(coords).then(res => {
      setForecast(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (coords.lat === 0 && coords.lng === 0) return;

    fetchForecast();
    setChangingLocation(false);

    axios
      .get<{
        address: {
          city_district?: string;
          village?: string;
          city?: string;
          town?: string;
          municipality?: string;
          county?: string;
        };
      }>(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}&zoom=18&addressdetails=1`
      )
      .then(res => {
        const { address } = res.data;

        if (address.village) {
          setLocationName(address.village);
          return;
        }

        if (address.city_district) {
          setLocationName(address.city_district);
          return;
        }

        if (address.city) {
          setLocationName(address.city);
          return;
        }

        if (address.town) {
          setLocationName(address.town);
          return;
        }

        if (address.municipality) {
          setLocationName(address.municipality);
          return;
        }

        if (address.county) {
          setLocationName(address.county);
          return;
        }
      });

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
            setChangingLocation={setChangingLocation}
            locationName={locationName}
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
                  setHeight={setHeight}
                  coords={coords}
                  setChangingLocation={setChangingLocation}
                  setSettingsShown={setSettingsShown}
                  fetchForecast={fetchForecast}
                  locationName={locationName}
                />
                <SecondaryComponent
                  height={height}
                  setChangingLocation={setChangingLocation}
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
