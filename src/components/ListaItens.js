import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';
export default class ListaItens extends Component {
    constructor(props) {
        super(props);
        this.state = { ListaItens: [] };
    }
    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => {this.setState({ ListaItens: response.data }); })
        .catch(() => { alert('Erro ao buscar dados');});
    }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#DDD',borderRadius: 5}}>
       { this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});