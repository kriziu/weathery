import {
  Box,
  Center,
  Collapse,
  Input,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect, useState } from 'react';

import { borderWidth } from '../../styles/styles';

const provider = new OpenStreetMapProvider();

let timeout: NodeJS.Timeout;

interface Props {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

interface ResultType {
  x: number;
  y: number;
  label: string;
}

const LocationSearch = ({ setCoords }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<ResultType[]>([]);

  useEffect(() => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      inputValue &&
        provider.search({ query: inputValue }).then(res => setResults(res));
    }, 500);

    !inputValue && setResults([]);
  }, [inputValue, setCoords]);

  const handleLocationClick = (index: number) => {
    setCoords({ lng: results[index].x, lat: results[index].y });
    setInputValue('');
  };

  return (
    <Box px={[5, 10]} position="relative" mt={5}>
      <Input
        placeholder="Search location"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <Collapse in={false} unmountOnExit>
        <Center mt={4}>
          <Spinner />
        </Center>
      </Collapse>

      <Collapse in={true} unmountOnExit>
        {results.length !== 0 && (
          <List
            zIndex={100}
            w="100%"
            spacing={2}
            border={borderWidth}
            borderColor="gray.200"
            p={2}
            borderRadius={4}
          >
            {results.map((result, index) => {
              return (
                <ListItem
                  key={index}
                  _hover={{
                    cursor: 'pointer',
                    backgroundColor: 'gray.200',
                    color: 'black',
                  }}
                  onClick={() => handleLocationClick(index)}
                >
                  {result.label}
                </ListItem>
              );
            })}
          </List>
        )}
      </Collapse>
    </Box>
  );
};

export default LocationSearch;
