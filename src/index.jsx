import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Context/Localization'
import { Provider as ProviderTheme } from './Context/Themes'
import { BrowserRouter } from 'react-router-dom'
import { Provider as AuthProvider } from './Context/Authentication'

ReactDOM.render (
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProviderTheme>
					<Provider>
						<App />
					</Provider>
				</ProviderTheme>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
	