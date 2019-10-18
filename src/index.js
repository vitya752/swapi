import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SwapiService from './services/swapi-service';

import App from './components/App/App';
import { SwapiServiceProvider } from './components/SwapiServiceContext/SwapiServiceContext';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

const swapiService = new SwapiService();

ReactDOM.render(<ErrorBoundry>
                    <SwapiServiceProvider value={swapiService}>
                        <Router>
                            <App />
                        </Router>
                    </SwapiServiceProvider>
                </ErrorBoundry>
    , document.getElementById('root'));