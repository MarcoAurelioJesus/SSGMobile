import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import PaginaPrincipal from './components/PaginaPrincipal';
import TelaLogin from './components/TelaLogin';
import PSDS from './components/PSDS';
import Pendencias from './components/Pendencias';
import DadosUsuario from './components/DadosUsuario';
import BirthdayList from './components/BirthdayList';
import UserInfo from './components/UserInfo';
import HoursPeriod from './components/HoursPeriod';
import Horimetro from './components/Horimetro';

export default props => (
<Router sceneStyle={{backgroundColor:'#5e7796'}}>       
         <Scene key='telaLogin' component={TelaLogin} initil hideNavBar/>
         <Scene key='paginaPrincipal' component={PaginaPrincipal} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='psds' component={PSDS} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='pendencias' component={Pendencias} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='dadosUsuario' component={DadosUsuario} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='userInfo' component={UserInfo} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='birthdayList' component={BirthdayList} sceneStyle={{backgroundColor:'#FFF'}} />
          <Scene key='hoursPeriod' component={HoursPeriod} sceneStyle={{backgroundColor:'#FFF'}}/>
         <Scene key='horimetro' component={Horimetro} sceneStyle={{backgroundColor:'#FFF'}}/>
</Router>
)