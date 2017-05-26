import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
const onload = require("../imgs/giphy.gif");

export default class OnloadText extends Component {
    render() {
        return(
    <View> 
      <Image style={{ height:100, width:100 }} source={onload} />´
    </View>
        );
    }
}
       
    