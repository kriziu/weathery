import { FC } from 'react';

import { Box } from '@chakra-ui/layout';

import styled from '@emotion/styled';

import FutureWeather from './weather/FutureWeather';
import HourWeather from './weather/HourWeather';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { transition } from '../styles/styles';
import { ResponseDataType } from '../types/forecast';

export const StyledSVG = styled.svg`
  display: block;
  left: 0;
  transform: translateY(1px); // small fix on mobiles
`;

interface SecondaryComponentProps {
  height: number;
  location: string;
  setChangingLocation: React.Dispatch<React.SetStateAction<boolean>>;
  forecast: ResponseDataType;
}

const SecondaryComponent: FC<SecondaryComponentProps> = ({
  height,
  location,
  setChangingLocation,
  forecast,
}): JSX.Element => {
  const bgColor = useColorModeValue('#fff', '#171923'); // hexadecimal because of svg path

  return (
    <Box
      transform={[
        `translateY(${height}px)`,
        `translateY(${height - 80}px)`,
        `translateY(${height - 100}px)`,
      ]}
      onClick={() =>
        location !== 'No location selected' && setChangingLocation(false)
      }
    >
      <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={bgColor}
          fillOpacity="1"
          style={{ transition }}
          d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </StyledSVG>
      <Box bgColor={bgColor} style={{ transition }}>
        <HourWeather {...forecast.hourly} />
        <FutureWeather {...forecast.daily} />
      </Box>
    </Box>
  );
};

export default SecondaryComponent;
