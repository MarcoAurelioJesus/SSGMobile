import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import {Router, Scene } from 'react-native-router-flux';
import ListaItens from './src/components/ListaItens';
import TopoSys from './src/components/TopoSys';
import PaginaPrincipal from './src/components/PaginaPrincipal';
import TelaLogin from './src/components/TelaLogin';
import PSDS from './src/components/PSDS';

export default class SSGMobile extends Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor:'#5e7796'}}>       
         <Scene key='telaLogin' component={TelaLogin} initil hideNavBar/>
         <Scene key='paginaPrincipal' component={PaginaPrincipal} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='psds' component={PSDS} sceneStyle={{backgroundColor:'#FFF'}}/>
        </Router>
    );
  }
}
AppRegistry.registerComponent('SSGMobile', () => SSGMobile);
