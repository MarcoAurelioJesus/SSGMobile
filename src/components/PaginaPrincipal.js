import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";
import TopoSys from "./TopoSys";
import TelaLogin from "./TelaLogin";
import Pendencias from "./Pendencias";
import DadosUsuario from "./DadosUsuario";
import Horimetro from "./Horimetro";
import Routes from "../Routes";
import App from "../App";
const imgPendencia = require("../imgs/alert-8.png");
const imgUser = require("../imgs/users.jpeg");
const niver = require("../imgs/NV.png");
const horas = require("../imgs/hour.png");

export default class PaginaPrincipal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <View>
          <StatusBar backgroundColor="#5e7796" />
          <TopoSys />
        </View>
        <View style={styles.imagens}>
          <View>
            <TouchableHighlight style={{alignItems:'center'}}
              onPress={() => {
                Actions.pendencias({ token: this.props.token });
              }}
            >
              <Image source={imgPendencia} style={{ height: 82, width: 90 }} />
            </TouchableHighlight>
            <Text style={styles.txtImagens}>Pendências</Text>
          </View>
          <View>
          <TouchableHighlight style={{alignItems:'center'}}
            onPress={() => {
              Actions.userInfo({ token: this.props.token });
            }}
          >
            <Image source={imgUser} style={{ height: 82, width: 90 }} />
          </TouchableHighlight>
          <Text style={styles.txtImagens}>Dados Usuário</Text>
        </View>
        </View>
        <View style={styles.imagens}>
        <View>
          <TouchableHighlight style={{alignItems:'center'}}
            onPress={() => {
              Actions.birthdayList({ token: this.props.token });
            }}
          >
            <Image source={niver} style={{ height: 80, width: 80 }} />
          </TouchableHighlight>
          <Text style={styles.txtImagens}>Aniversariantes do Mês</Text>
          </View>
          <View>
          <TouchableHighlight style={{alignItems:'center'}}
            onPress={() => {
              Actions.horimetro({ token: this.props.token });
            }}
          >
            <Image source={horas} style={{ height: 80, width: 80 }} />
          </TouchableHighlight>
          <Text style={styles.txtImagens}>Resumo de horas</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagens: {
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
  
  },
  txtImagens: {
    margin: 1,
    color: "#63B8FF",
    fontWeight: "bold",
    borderRadius: 5,
    fontSize: 14,
    textAlign:'center'
  }
});
