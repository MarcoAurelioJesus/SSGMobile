import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';

export default class DadosSsg extends Component {
  render() {
    return (
      //Lista Itens
       <View style={styles.item}>

        <View style={styles.foto}>
         <Image style={{height: 100, width: 100}} source={{uri: this.props.dado}} />
        </View>

       <View style={styles.textoItens}>
          <Text style={styles.textoITit}>{this.props.item.titulo}</Text>
          <Text>SSG:{this.props.dado}</Text>
          <Text>SSG:{this.props.dado}</Text>
          <Text>SSG: {this.props.dado}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor : 'blue',
      margin: 5,
      padding: 10, 
      flexDirection: 'row',
    },
    foto: {
      width: 102,
      height: 102,
      margin:5
    },
    textoItens: {
      marginLeft: 20,
      flex: 1
    },
    textoITit: {
      fontSize: 18,
      color: 'red',
      marginBottom: 5,
      fontWeight: 'bold'

    }
  }
)