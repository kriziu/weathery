import { FC, useEffect, useState } from 'react';

import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';
import { Box, Center, List, ListItem } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';

import { borderRadius, borderWidth } from '../../styles/styles';

interface InputLocationProps {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const InputLocation: FC<InputLocationProps> = ({ setCoords }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [browserCoords, setBrowserCoords] = useState({ lat: 0, lng: 0 });

  const handleLocationSelect = async (value: string) => {
    // const result = await geocodeByAddress(value);
    const latLng = { lat: 0, lng: 0 };
    setCoords(latLng);
    setInputValue('');
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (!coords) return;

      setCoords(coords);
      setBrowserCoords(coords);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box px={[5, 10]} position="relative">
      <Input placeholder="Search location" />

      <Collapse in={false} unmountOnExit>
        <Center mt={4}>
          <Spinner />
        </Center>
      </Collapse>

      <Collapse in={true} unmountOnExit>
        <List
          zIndex={100}
          w="100%"
          spacing={2}
          border={borderWidth}
          borderColor="gray.200"
          p={2}
          borderRadius={4}
        >
          <ListItem>123</ListItem>
          <ListItem>456</ListItem>
        </List>
      </Collapse>
    </Box>
  );
};

export default InputLocation;
