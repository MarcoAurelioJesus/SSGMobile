import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import axios from "axios";
import { Actions } from "react-native-router-flux";
import { Router, Scene } from "react-native-router-flux";
import TopoSys from "./TopoSys";
import PaginaPrincipal from "./PaginaPrincipal";
const logoSysmap = require("../imgs/logoSys.jpg");

export default class TelaLogin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: "marco.jesus@sysmap.com.br",
      password: "MY@Yeshua",
      Dados: []
    };
  }

  logar() {
    if (
      this.state.user != null &&
      this.state.password != null
    ) {
      {
        var urlLogin =
          "https://" +
          "ssghml.sysmap.com.br/api/session/log‐in?data={UserName:" +
          this.state.user.toString() +
          ",Password:" +
          this.state.password.toString() +
          ",IsPersistent:0}";
        console.log(urlLogin);
      }
      axios
        .get(urlLogin)
        .then(response => {
          this.setState({ Dados: response });
        })
        .catch(() => {
          alert("Erro ao buscar dados");
        });
      console.log(this.state.Dados);
      Actions.paginaPrincipal();
    } else {
      alert("Senha ou usuario invalido!");
    }
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#5e7796" />
        <View style={styles.viewLogar}>
          <Image style={{ margin: 5 }} source={logoSysmap} />
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              margin: 5
            }}
          >
            <Text style={{ textAlign: "center", marginBottom: 10 }}>
              Bem vindo ao Sistema de Suporte à Gestão
            </Text>
          </View>
          <View style={styles.viewTextInput}>
            <TextInput
              style={styles.texInputStyles}
              onChangeText={user => this.setState({ user })}
              value={this.state.user}
              placeholder={"User"}
              underlineColorAndroid={"#FFFFE0"}
              secureTextEnt="true"
            />
          </View>
          <View style={styles.viewTextInput}>

            <TextInput
              title="Password"
              style={styles.texInputStyles}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder={"Password"}
              underlineColorAndroid={"#FFFFE0"}
              secureTextEntry
            />
          </View>
          <View style={styles.btnLogar}>
            <TouchableOpacity
            
             onPress={() => this.logar()}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  padding: 10,
                  fontSize: 16
                }}
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  login: {
    backgroundColor: "#FFF",
    marginTop: 5,
    alignItems: "center",
    borderRadius: 5
  },
  viewTextInput: {
    alignItems: "center",
    margin: 5
  },
  texInputStyles: {
    width: 320,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFE0"
  },
  btnLogar: {
    backgroundColor: "#63B8FF",
    padding: 2,
    margin: 5,
    borderRadius: 5,
    alignItems: "center"
  },
  viewLogar: {
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 65,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFF"
  }
});
