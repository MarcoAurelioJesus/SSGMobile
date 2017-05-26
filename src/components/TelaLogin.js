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
  Image,
  ScrollView,
  Switch
} from "react-native";
import axios from "axios";
import { Actions } from "react-native-router-flux";
import { Router, Scene } from "react-native-router-flux";
import TopoSys from "./TopoSys";
import PaginaPrincipal from "./PaginaPrincipal";
import OnloadTexte from "./OnloadTexte";
const logoSysmap = require("../imgs/logoSys.jpg");
const onload = require("../imgs/load.gif");
//rx js
export default class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "marco.jesus",
      password: "Sysmap@Yeshua",
      token: "",
      trueSwitchIsOn: true,
      falseSwitchIsOn: false
    };
  }

  logar() {
    if (
      this.state.user != null &&
      this.state.password != null &&
      (this.state.user != "" && this.state.password != "")
    ) {
      var urlLogin =
        "https://ssg.sysmap.com.br/api/session/log-in?data={UserName:" +
        '"' +
        this.state.user +
        '"' +
        ",Password:" +
        '"' +
        this.state.password +
        '"' +
        ",IsPersistent:false}";
      {
        this.autentic(urlLogin);
      }
    } else {
      alert("Erro Login");
    }
  }
  autentic(urlLogin) {
    axios
      .get(urlLogin)
      .then(response => {
        this.setState({ token: response.data.ReturnObject.UserToken });
        if (this.state.token != null && this.state.token != "") {
          Actions.paginaPrincipal({ token: this.state.token });
        }
      })
      .catch(() => {
        alert("Erro ao Logar");
      });
  }

  render() {
    return (
      <View>
        <View>
          <Text />
        </View>
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
              clearTextOnFocus={true}
              placeholder={"User"}
              underlineColorAndroid={"#FFFFE0"}
            />
          </View>
          <View style={styles.viewTextInput}>
            <TextInput
              selectionColor="#63B8FF"
              title="Password"
              style={styles.texInputStyles}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder={"Password"}
              secureTextEntry={!this.state.eventSwitchIsOn}
              underlineColorAndroid={"#FFFFE0"}
            />
          </View>
          <View style={{marginLeft:12 }}>
            <Text  style={{ color: "#696969"}}>
              {this.state.eventSwitchIsOn ? "Senha exposta!" : "Exibir Senha?"}
            </Text>
            <Switch style={{marginTop:-20 }}
            thumbTintColor={'#63B8FF'}
            tintColor={'#b0c4de'}
              onValueChange={value => this.setState({ eventSwitchIsOn: value })}
              value={this.state.eventSwitchIsOn}
            />
          </View>
          <View style={styles.btnLogar}>
            <TouchableOpacity onPress={() => this.logar()}>
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
          <View style={styles.btnLogar}>
            <TouchableOpacity
              onPress={() => {
                Actions.paginaPrincipal();
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  padding: 10,
                  fontSize: 16
                }}
              >
                Login
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
