import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  ScrollView
} from "react-native";
import axios from "axios";
import { Actions } from "react-native-router-flux";
import TopoSys from "./TopoSys";
import ListaDePendencias from "./ListaDePendencias";

export default class Pendencias extends Component {
  constructor(props) {
    super(props);
    console.log("Pendencias====" + this.props);
    this.state = { Pendencys: [] };
  }
  componentWillMount() {
    axios
      .get(
        "https://ssg.sysmap.com.br/api/" +
          this.props.token +
          "/home/get-default"
      )
      .then(response => {
        this.setState({ Pendencys: response.data.ReturnObject.PendencyList });
        console.log(this.state.Pendencys);
      })
      .catch(() => {
        alert("Erro ao buscar dados");
      });
  }
  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <StatusBar backgroundColor="#5e7796" />
        <TopoSys />
        <View style={styles.pendencias}>
          <Text style={styles.txtPendencias}>Pendências</Text>
          <ScrollView style={{ backgroundColor: "#D3D3D3" }}>
            {this.state.Pendencys.map(item => (
              <ListaDePendencias key={item.PendencyId} item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pendencias: {
    backgroundColor: "#BEBEBE",
    margin: 1,
    padding: 1,
    maxHeight: 505,
    borderRadius: 5,
    marginBottom: 15
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
