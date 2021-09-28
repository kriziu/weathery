import { IconButton } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';
import { Slide } from '@chakra-ui/transition';
import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { WeatherType } from '../api/forecast';
import { gradients } from '../utils/gradients';

interface SettingsProps {
  forecast: WeatherType;
  settingsShown: boolean;
  setSettingsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: FC<SettingsProps> = ({
  forecast,
  setSettingsShown,
  settingsShown,
}): JSX.Element => {
  return (
    <Slide
      in={settingsShown}
      direction="right"
      style={{ zIndex: 5, display: 'flex', justifyContent: 'flex-end' }}
      onClick={() => setSettingsShown(false)}
    >
      <Box
        bgGradient={gradients[forecast.weather[0].icon]}
        color={forecast.weather[0].icon[2] === 'n' ? 'gray.500' : ''}
        w="3xs"
        height="full"
        px={5}
        pb={40}
        onClick={e => e.stopPropagation()}
      >
        <IconButton
          position="absolute"
          right={[4, 6, 8, 10]}
          top={[4, 6, 8, 10]}
          zIndex={10}
          aria-label="settings"
          variant="ghost"
          onClick={() => setSettingsShown(false)}
          icon={<IoClose size={38} />}
        />
        <Flex alignItems="center" justifyContent="space-around" mt={24} px={6}>
          <Heading>C</Heading>
          <Switch size="lg" aria-label="Change to Fahrenheit" />
          <Heading>F</Heading>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mt={6}
        >
          <FormLabel htmlFor="dark">
            <Heading size="md">Dark mode</Heading>
          </FormLabel>
          <Switch size="lg" aria-label="Dark mode" id="dark" />
        </Flex>
      </Box>
    </Slide>
  );
};

export default Settings;
