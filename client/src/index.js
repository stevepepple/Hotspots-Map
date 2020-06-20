import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
import * as serviceWorker from './serviceWorker';

// Internationalization support 
import { I18nextProvider } from "react-i18next";
import i18n from './i18n'


import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import { ConnectedRouter } from 'connected-react-router'

import { Helmet, HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root")

let tree = <Provider store={store}>
            { /* ConnectedRouter links Redux state with React Router */}
                <ConnectedRouter history={history}>
                    <I18nextProvider i18n={i18n}>
                        <HelmetProvider>
                            <App />
                        </HelmetProvider>
                    </I18nextProvider>
                </ConnectedRouter>
            </Provider>

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(tree, rootElement)
} else {
    ReactDOM.render(tree, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()