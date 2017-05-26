import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import TopoSys from "./TopoSys";
export default class Aniversariantes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //Lista Itens
      (
        <View style={styles.item}>
          <View>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Id Usuário: </Text>
               {this.props.item.UserId}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Nome: </Text>
               {this.props.item.UserName}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>e-mail: </Text>
               {this.props.item.Email}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Data de Aniversário: </Text>
               {this.props.item.Birthday}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Local: </Text>
               {this.props.item.Company}
            </Text>
          </View>
        </View>
      )
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
    borderRadius: 10
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
