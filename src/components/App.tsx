import { FC, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';

import GoogleMapsLocation from './GoogleMapsLocation';

const App: FC = (): JSX.Element => {
  const [location, setLocation] = useState('No location selected');
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  return (
    <ChakraProvider>
      <Box>
        <Heading size="xl" textAlign="center">
          {location}
        </Heading>

        <GoogleMapsLocation
          setCoords={setCoords}
          setAppLocation={setLocation}
        />
      </Box>
    </ChakraProvider>
  );
};

export default App;
