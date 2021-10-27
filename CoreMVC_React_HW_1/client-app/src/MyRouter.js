import { Title } from '@mui/icons-material';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/**
 * Import all page components here
 */
import App from './App';
import Publishers from './Publishers';
import Titles from './Titles';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
 export default function MyRouter() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/react/publishers" component={Publishers} />
					<Route exact path="/titles" component={Titles} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}