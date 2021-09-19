import { FC, useEffect, useState } from 'react';

import { Input } from '@chakra-ui/input';
import { Spinner } from '@chakra-ui/spinner';
import { Box, Center } from '@chakra-ui/layout';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geocode from 'react-geocode';

interface GoogleMapsLocationProps {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setAppLocation: React.Dispatch<React.SetStateAction<string>>;
}

const GoogleMapsLocation: FC<GoogleMapsLocationProps> = ({
  setCoords,
  setAppLocation,
}): JSX.Element => {
  const [location, setLocation] = useState('');
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });

  const handleLocationSelect = async (value: string) => {
    const result = await geocodeByAddress(value);
    const latLng = await getLatLng(result[0]);
    setCoords(latLng);
    setCity(latLng);
    setLocation('');
  };

  const setCity = (coords: { lat: number; lng: number }) => {
    Geocode.fromLatLng(coords.lat.toString(), coords.lng.toString()).then(
      response => {
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case 'locality':
                city = response.results[0].address_components[i].long_name;
                break;
              case 'administrative_area_level_1':
                state = response.results[0].address_components[i].long_name;
                break;
              case 'country':
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        setAppLocation(`${city}, ${state}, ${country}`);
      },
      error => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    Geocode.setApiKey('AIzaSyAaNjFR_LN6izfmGEPx_1ZCYMkNfZhxSQs');

    navigator.geolocation.getCurrentPosition(pos => {
      const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (!coords) return;

      setCity(coords);
      setCoords(coords);
      setGeolocation(coords);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlacesAutocomplete
      value={location}
      onChange={setLocation}
      onSelect={handleLocationSelect}
      searchOptions={{
        location: new google.maps.LatLng(geolocation),
        radius: 2000,
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Box px={6}>
          <Input {...getInputProps({ placeholder: 'Search location' })} />

          <Box>
            {loading && (
              <Center>
                <Spinner />
              </Center>
            )}

            {suggestions.map((suggestion, i) => {
              const style = {
                backgroundColor: suggestion.active ? 'black' : 'white',
              };
              return (
                <div {...getSuggestionItemProps(suggestion, { style })} key={i}>
                  {suggestion.description}
                </div>
              );
            })}
          </Box>
        </Box>
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleMapsLocation;
