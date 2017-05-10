import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from "react-native";
import { Actions } from "react-native-router-flux";
import ListaItens from "./ListaItens";
import TopoSys from "./TopoSys";
import TelaLogin from "./TelaLogin";
import Sys from "./Sys";

export default class PaginaPrincipal extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <View>
          <StatusBar backgroundColor="#5e7796" />
          <TopoSys />
        </View>
        <View style={styles.pendencias}>
          <View>
            <Text style={styles.txtPendencias}>Pendências</Text>
            <ListaItens />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pendencias: {
    backgroundColor: "#BEBEBE",
    marginTop: 5,
    padding: 2,
    maxHeight: 320,
    margin: 5,
    borderRadius: 5
  },
  txtPendencias: {
    backgroundColor: "#63B8FF",
    margin: 1,
    color: "#FFF",
    fontWeight: "bold",
    borderRadius: 5,
    padding: 5,
    fontSize: 16
  }
});
