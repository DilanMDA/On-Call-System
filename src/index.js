import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/global';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<>
			<App />
			<GlobalStyle />
		</>
	</ThemeProvider>,

	document.getElementById('root')
);
