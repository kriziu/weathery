import { extendTheme, ThemeConfig, ChakraTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// const globalStyles: ChakraTheme = {
//   styles: {
//     global: {
//       '*': {
//         transition: 'all .2s ease',
//       },
//     },
//   },
// };

const theme = extendTheme({ config });

export default theme;
