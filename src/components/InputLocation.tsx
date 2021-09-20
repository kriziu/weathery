import { FC, useEffect, useState } from 'react';

import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';
import { Box, Center, List, ListItem } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { borderRadius, borderWidth } from '../constants/styles';

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
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
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
    <PlacesAutocomplete
      value={inputValue}
      onChange={setInputValue}
      onSelect={handleLocationSelect}
      searchOptions={{
        location: new google.maps.LatLng(browserCoords),
        radius: 2000,
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Box px={[5, 10]} position="relative">
          <Input {...getInputProps({ placeholder: 'Search location' })} />

          <Collapse in={loading} unmountOnExit>
            <Center mt={4}>
              <Spinner />
            </Center>
          </Collapse>

          <Collapse in={suggestions.length ? true : false} unmountOnExit>
            <List
              zIndex={100}
              w="100%"
              spacing={2}
              border={borderWidth}
              borderColor="gray.200"
              p={2}
              borderRadius={4}
            >
              {suggestions.map((suggestion, i) => {
                const style = {
                  padding: '.5rem',
                  borderRadius: borderRadius,
                  backgroundColor: suggestion.active ? '#e6e6e6' : '',
                };
                return (
                  <ListItem
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={i}
                  >
                    {suggestion.description}
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
      )}
    </PlacesAutocomplete>
  );
};

export default InputLocation;
