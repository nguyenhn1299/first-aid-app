import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Routes from './navigations/routes'
// import store from './redux/store';

export default class App extends Component {
    render() {
        return (
            /*<Provider store={store}>*/
            <Routes />
            // </Provider>
        );
    }
}