import { FC, useContext } from 'react';

import { Box, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import styled from '@emotion/styled';
import { WiMoonrise, WiMoonset } from 'react-icons/wi';
import { Parallax } from 'react-scroll-parallax';

import { FutureWeatherType } from '../../api/forecast';
import { tempConverter } from '../../utils/tempConverter';
import { DegreeContext } from '../App';

const StyledSVG = styled.svg`
  display: block;
  left: 0;
  transform: rotate(180deg) translateY(1px);
`;

const DetailWeather: FC<FutureWeatherType> = (props): JSX.Element => {
  const degree = useContext(DegreeContext);
  const sunrise = new Date(props.sunrise * 1000);
  const sunset = new Date(props.sunset * 1000);
  const moonrise = new Date(props.moonrise * 1000);
  const moonset = new Date(props.moonset * 1000);

  return (
    <Parallax y={[20, -10]}>
      <Box bgGradient="linear(to-b, yellow.300, orange.400)" pb={10}>
        <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,106.7C672,96,768,96,864,112C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </StyledSVG>
        <Heading size="xl" textAlign="center" mt={-2}>
          Details
        </Heading>

        <Box
          w={{ lg: 350 }}
          ml={{ lg: '50%' }}
          transform={{ lg: 'translateX(-50%)' }}
        >
          <Flex mt={5} px={['10vw', '20vw', '30vw', 0]}>
            <Stat textAlign="center">
              <StatLabel>
                <Center>
                  <FiSunrise size={24} />
                </Center>
              </StatLabel>
              <StatNumber>
                {sunrise.getHours()}:
                {sunrise.getMinutes() < 10
                  ? '0' + sunrise.getMinutes()
                  : sunrise.getMinutes()}
              </StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>
                <Center>
                  <FiSunset size={24} />
                </Center>
              </StatLabel>
              <StatNumber>
                {sunset.getHours()}:
                {sunset.getMinutes() < 10
                  ? '0' + sunset.getMinutes()
                  : sunset.getMinutes()}
              </StatNumber>
            </Stat>
          </Flex>
          <Center>
            <Divider borderColor="black" opacity={0.1} w={64} py={2} />
          </Center>

          <SimpleGrid
            mt={5}
            px={['10vw', '20vw', '30vw', 0]}
            columns={3}
            spacing={2}
          >
            <Stat textAlign="center">
              <StatLabel>Pressure</StatLabel>
              <StatNumber>{props.pressure}</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Rain</StatLabel>
              <StatNumber>{props.pop * 100}%</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Clouds</StatLabel>
              <StatNumber>{props.clouds}%</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>UV</StatLabel>
              <StatNumber>{props.uvi}</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Humidity</StatLabel>
              <StatNumber>{props.humidity}%</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Dew point</StatLabel>
              <StatNumber>{tempConverter(degree, props.dew_point)}°</StatNumber>
            </Stat>
          </SimpleGrid>
          <Center>
            <Divider borderColor="black" opacity={0.1} w={64} py={2} />
          </Center>
          <Heading size="md" textAlign="center" mt={5}>
            Temperature
          </Heading>
          <Flex px={['10vw', '20vw', '30vw', 0]} mt={2}>
            <Stat textAlign="center">
              <StatLabel>Morning</StatLabel>
              <StatNumber>{tempConverter(degree, props.temp.morn)}°</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Day</StatLabel>
              <StatNumber>{tempConverter(degree, props.temp.day)}°</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Evening</StatLabel>
              <StatNumber>{tempConverter(degree, props.temp.eve)}°</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Night</StatLabel>
              <StatNumber>
                {tempConverter(degree, props.temp.night)}°
              </StatNumber>
            </Stat>
          </Flex>
          <Center>
            <Divider borderColor="black" opacity={0.1} w={64} py={2} />
          </Center>
          <Flex px={['10vw', '20vw', '30vw', 0]} mt={2}>
            <Stat textAlign="center">
              <StatLabel>Max</StatLabel>
              <StatNumber>{tempConverter(degree, props.temp.max)}°</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Min</StatLabel>
              <StatNumber>{tempConverter(degree, props.temp.min)}°</StatNumber>
            </Stat>
          </Flex>

          <Stat textAlign="center">
            <StatLabel>
              <Heading size="sm" textAlign="center" mt={5}>
                Wind speed
              </Heading>
            </StatLabel>
            <StatNumber>{props.wind_speed} m/s</StatNumber>
          </Stat>

          <Flex mt={5} px={['10vw', '20vw', '30vw', 0]}>
            <Stat textAlign="center">
              <StatLabel>
                <Center>
                  <WiMoonrise size={34} />
                </Center>
              </StatLabel>
              <StatNumber>
                {moonrise.getHours()}:
                {moonrise.getMinutes() < 10
                  ? '0' + moonrise.getMinutes()
                  : moonrise.getMinutes()}
              </StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>
                <Center>
                  <WiMoonset size={34} />
                </Center>
              </StatLabel>
              <StatNumber>
                {moonset.getHours()}:
                {moonset.getMinutes() < 10
                  ? '0' + moonset.getMinutes()
                  : moonset.getMinutes()}
              </StatNumber>
            </Stat>
          </Flex>
        </Box>
      </Box>
    </Parallax>
  );
};

export default DetailWeather;
