import React from 'react';
import ReactDOM from 'react-dom/client';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './components/App';
import { AppContextProvider } from './providers/context';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);

serviceWorkerRegistration.register();