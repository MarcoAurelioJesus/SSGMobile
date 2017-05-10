import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  WebView
} from 'react-native';

export default class Sys extends Component {

  render() {
    return (
        <View>
        <WebView
          style={{
            backgroundColor: 'red',
            height: 200,
          }}
          source={{uri: 'https://facebook.github.io/react/'}}
        />
      </View>
    );
  }
}