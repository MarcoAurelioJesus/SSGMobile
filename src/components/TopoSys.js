import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
  
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const logoSysmap = require('../imgs/logoSys.jpg');
const logoPSDS = require('../imgs/logoPSDS.jpg');
const topoSSG = require('../imgs/topoSSG.jpg');
const barraSSG = require('../imgs/barraSSG.jpg');
export default class TopoSys extends Component {
  render() {
    return (
     <View>   
      <View style={styles.topo}>
        <Image source= {logoSysmap}/>
      </View>
      <View style={styles.subTopo}>
        <Image style={styles.imagemTopoSSG} source= {topoSSG}/>
        <TouchableHighlight 
        onPress={() => {Actions.psds() }}
        >
        <Image style={styles.imagemPSDS} source= {logoPSDS}/>
        </TouchableHighlight>
      </View>
      <View>
        <Image style={styles. barraSSG} source= {barraSSG}/>
      </View>
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
    height:20,
    width:100,
    marginLeft:15
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