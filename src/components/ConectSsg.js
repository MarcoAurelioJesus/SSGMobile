import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import DadosSsg from './DadosSsg';
export default class ConecSsg extends Component {
    constructor(props) {
        super(props);
        this.state = { Dados: [] };
    }
    login() {
        axios.get('https://ssg.sysmap.com.br/api/session/log‐in?data={UserName:'user',Password:'password',IsPersistent:0}')
        .then(response => {this.setState({ Dados: response }); })
        .catch(() => { alert('Erro ao buscar dados');});
    }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#DDD',borderRadius: 5}}>
       { this.state.Dados.map(dado => (<DadosSsg key={} dado={dado} />))}
      </ScrollView>
    );
  }
}