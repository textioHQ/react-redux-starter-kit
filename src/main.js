/* eslint piggyback/no-restricted-global-extend:0 */
/* eslint no-underscore-dangle: ["error", { "allow": ["___INITIAL_STATE__", "__DEV__"] }] */
/* eslint global-require:0 */
/* global __DEV__ */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer';

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById(`root`);

let render = () => {
    const routes = require(`./routes/index`).default();

    ReactDOM.render(
    <AppContainer
      history={browserHistory}
      routes={routes}
    />,
    MOUNT_NODE
  );
};

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
    if (window.devToolsExtension) {
        window.devToolsExtension.open();
    }
}

// This code is excluded from production bundle
if (__DEV__) {
    if (module.hot) {
    // Development render functions
        const renderApp = render;
        const renderError = (error) => {
            const RedBox = require(`redbox-react`).default;

            ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
        };

    // Wrap render in try/catch
        render = () => {
            try {
                renderApp();
            }
            catch (error) {
                renderError(error);
            }
        };

    // Setup hot module replacement
        module.hot.accept(`./routes/index`, () => {
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE);
                render();
            });
        });
    }
}

// ========================================================
// Go!
// ========================================================
render();
