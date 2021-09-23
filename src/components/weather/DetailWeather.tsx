import { Box, Center, Flex, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat';
import { Divider } from '@chakra-ui/react';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FC } from 'react';
import styled from '@emotion/styled';
import { WiMoonrise, WiMoonset } from 'react-icons/wi';
import { Parallax } from 'react-scroll-parallax';

const StyledSVG = styled.svg`
  display: block;
  left: 0;
  transform: rotate(180deg) translateY(1px);
`;

const DetailWeather: FC = (): JSX.Element => {
  return (
    <Parallax y={[25, -25]}>
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

        <Flex mt={5} px={['10vw', '20vw', '30vw', '32vw']}>
          <Stat textAlign="center">
            <StatLabel>
              <Center>
                <FiSunrise size={24} />
              </Center>
            </StatLabel>
            <StatNumber>6:23</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>
              <Center>
                <FiSunset size={24} />
              </Center>
            </StatLabel>
            <StatNumber>20:23</StatNumber>
          </Stat>
        </Flex>
        <Center>
          <Divider borderColor="black" opacity={0.1} w={64} py={2} />
        </Center>

        <SimpleGrid
          mt={5}
          px={['10vw', '20vw', '30vw', '32vw']}
          columns={3}
          spacing={2}
        >
          <Stat textAlign="center">
            <StatLabel>Pressure</StatLabel>
            <StatNumber>1024</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Rain</StatLabel>
            <StatNumber>40%</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Clouds</StatLabel>
            <StatNumber>12%</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>UV</StatLabel>
            <StatNumber>2</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Humidity</StatLabel>
            <StatNumber>20%</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Dew point</StatLabel>
            <StatNumber>2°</StatNumber>
          </Stat>
        </SimpleGrid>
        <Center>
          <Divider borderColor="black" opacity={0.1} w={64} py={2} />
        </Center>
        <Heading size="md" textAlign="center" mt={5}>
          Temperature
        </Heading>
        <Flex px={['10vw', '20vw', '30vw', '32vw']} mt={2}>
          <Stat textAlign="center">
            <StatLabel>Max</StatLabel>
            <StatNumber>32°</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Min</StatLabel>
            <StatNumber>18°</StatNumber>
          </Stat>
        </Flex>

        <Stat textAlign="center">
          <StatLabel>
            <Heading size="sm" textAlign="center" mt={5}>
              Wind speed
            </Heading>
          </StatLabel>
          <StatNumber>3 m/s</StatNumber>
        </Stat>

        <Flex mt={5} px={['10vw', '20vw', '30vw', '32vw']}>
          <Stat textAlign="center">
            <StatLabel>
              <Center>
                <WiMoonrise size={34} />
              </Center>
            </StatLabel>
            <StatNumber>20:23</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>
              <Center>
                <WiMoonset size={34} />
              </Center>
            </StatLabel>
            <StatNumber>6:23</StatNumber>
          </Stat>
        </Flex>
      </Box>
    </Parallax>
  );
};

export default DetailWeather;
