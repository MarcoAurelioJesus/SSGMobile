import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import TopoSys from "./TopoSys";
const imgUser = require("../imgs/users.jpeg");
export default class DadosUsuario extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.item}>
        <View style={{padding:5 }}>
          <Image style={{width:60, height:80,padding:10 }} source={imgUser} />
        </View>
        <View>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Nome: </Text>
            {this.props.itemUserInf.Name}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>e-mail: </Text>
            {this.props.itemUserInf.Email}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Cargo: </Text>
            {this.props.itemUserInf.ProfileName}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Classificação: </Text>
            {this.props.itemUserInf.WorkPositionName}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Setor: </Text>
            {this.props.itemUserInf.DepartmentName}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Gestor: </Text>
            {this.props.itemUserInf.ManagerName}
          </Text>
          <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Data de Admissão: </Text>
            {this.props.itemUserInf.AdmissionDate}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eeeeee",
    borderWidth: 2,
    borderColor: "#DCDCDC",
    margin: 2,
    padding: 2,
    borderRadius: 10,
      },
  textoItens: {
    marginLeft: 5,
    borderColor: "#D3D3D3",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
    fontSize: 18
  },
  textoDescr: {
    marginLeft: 5,
    color: "#63B8FF",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 18
  }
});
