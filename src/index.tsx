import ReactDOM from 'react-dom';

import { ColorModeScript } from '@chakra-ui/color-mode';

import App from './components/App';
import theme from './theme';

const path = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  path
);
