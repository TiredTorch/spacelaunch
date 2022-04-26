import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App/App';
import { theme } from '@spacelaunch/shared/theme';
import { store } from '@spacelaunch/redux/store';
import 'typeface-montserrat';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</CssBaseline>
			</ThemeProvider>
		</Provider>
	</StrictMode>
);
