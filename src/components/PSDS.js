import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import TopoSys from "./TopoSys";
const garantia = require('../imgs/garantia_qualidade.jpeg');
export default class PSDS extends Component {
  render() {
    return (
     <View style={{backgroundColor:'#FFF'}}>   
       <View>
          <StatusBar backgroundColor='#5e7796' />
          <TopoSys />
        </View>
        <Text style={{margin:20, fontSize:16, lineHeight:30}}>
              O Processo SysMap de Desenvolvimento de Software (PSDS)
              é o conjunto de atividades estabelecidas e mantidas
              de forma estruturada para o desenvolvimento de software
              pela organização, com o objetivo de produzir valor para nossos clientes.
              Sua composição é baseada nas melhores práticas publicadas nos principais modelos
              de referência (CMMI, MPS-BR, PMBOK, ISO, RUP) e/ou adotadas por seus colaboradores.
        </Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  topo: {
      height:60,
      alignItems: 'center', 
  },
  subTopo: {
      alignItems:'center',
          flexDirection:'row',
          height:18,
          width:200,
          marginBottom:5
  },
  imagemPSDS: {
    height:15,
    width:100,
    marginLeft:10
  },
  imagemTopoSSG: {
        height:15,
        width:220,
        marginLeft:10
  },
  barraSSG: {
    height:10,
    marginBottom:5
  }
});