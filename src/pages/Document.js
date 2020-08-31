import React from 'react';
import { Provider } from 'react-redux';

import { I18nextProvider, useSSR } from 'react-i18next';
import { StaticRouter } from "react-router-dom";

import {
    AfterRoot,
    AfterData,
    AfterScripts,
    AfterStyles,
    SerializeData,
    __AfterContext,
} from '@jaredpalmer/after';

class Document extends React.Component {
    static async getInitialProps({ req, res, renderPage, store }) {
        //console.log('req on load: ', req)
        //console.log('store: ', store, store.getState())

        let initialLanguage = req.i18n.language;
        console.log('initialLanguage: ', req.initialLanguage)
        if (initialLanguage === undefined) initialLanguage = 'en'
        
        //console.log('store on load: ', store.getState())
        const renderer = App => props => (
            <Provider store={store}>
                <App {...props} />
                <I18nextProvider i18n={req.i18n}>
                    <App {...props} />
                </I18nextProvider>                
            </Provider>
        );

        const page = await renderPage(renderer);

        return { ...page, initialLanguage };
    }

    render() {
        const { helmet, initialLanguage, initialI18nStore } = this.props;
        // get attributes from React Helmet
        const htmlAttrs = helmet.htmlAttributes.toComponent();
        const bodyAttrs = helmet.bodyAttributes.toComponent();

        return (
            <html {...htmlAttrs}>
                <head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta charSet="utf-8" />
                    <title>Vibemap - Find your Vibe</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="preconnect" href="https://tiles.vibemap.com"/>
                    <link rel="preconnect" href="https://api.vibemap.com"/>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2IfNJpGR6qcaOsgacTLVYuF4tqJ7HejY &libraries=places"></script>

                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                    <AfterStyles />
                </head>
                <body {...bodyAttrs}>
                    <AfterRoot />
                    <AfterData />
                    <ReduxData />
                    <AfterScripts />
                </body>
            </html>
        );
    }
}

function ReduxData() {
    const { store } = React.useContext(__AfterContext);

    return <SerializeData name="preloaded_state" data={store.getState()} />;
}

export default Document;