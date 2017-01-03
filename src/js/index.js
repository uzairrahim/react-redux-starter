import '../scss/index.scss';
import './axios.config';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import Store from 'store';
import { Layout } from './components';

ReactDOM.render(
	//<Provider store={Store}>
	<Provider>
		<Layout/>
	</Provider>
	, document.getElementById('root')
);