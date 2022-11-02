import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
		<UserContext.Provider value={{
			'role': 'company',
			'token': '',
			'password': ''
			}}>
			<App />
		</UserContext.Provider>
  </React.StrictMode>
);
