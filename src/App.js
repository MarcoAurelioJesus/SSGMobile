import React from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import Routes from './Routes';
import reducers from './reducers';


export default props => (
    <Provider store={createStore(reducers)}> 
        <Routes />
    </Provider>
);
       
    