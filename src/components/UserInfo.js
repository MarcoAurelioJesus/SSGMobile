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
import DadosUsuario from "./DadosUsuario";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { UserInf: [] };
  }
  componentWillMount() {
    axios
      .get(
        "https://ssg.sysmap.com.br/api/" +
          this.props.token +
          "/home/get-default"
      )
      .then(response => {
        this.setState({ UserInf: response.data.ReturnObject.UserInfo });
        console.log("Return xxxx " + this.state.UserId.Id);
      })
      .catch(() => {
        console.log("Erro");
      });
  }
  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <StatusBar backgroundColor="#5e7796" />
        <TopoSys />
        <View style={styles.dadosUser} >
        <Text style={styles.txtDadosUser}>Dados do Usuário</Text>
        <ScrollView style={{ backgroundColor: "#D3D3D3" }}>
          <DadosUsuario itemUserInf={this.state.UserInf} />
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dadosUser: {
    backgroundColor: "#BEBEBE",
    margin: 1,
    padding: 1,
    maxHeight: 505,
    borderRadius: 5,
    marginBottom: 15
  },
  txtDadosUser: {
    backgroundColor: "#63B8FF",
    margin: 1,
    color: "#FFF",
    fontWeight: "bold",
    borderRadius: 5,
    padding: 5,
    fontSize: 18
  }
});
