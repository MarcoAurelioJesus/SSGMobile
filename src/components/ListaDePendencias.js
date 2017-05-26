import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
export default class ListaDePendencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDate: new Date(
        parseInt(
          this.props.item.ItemDate.replace("\/Date(", "").replace(")\/", "")
        )
      ),
      assignedToDate: new Date(
        parseInt(
          this.props.item.ItemDate.replace("\/Date(", "").replace(")\/", "")
        )
      )
    };
  }

  render() {
    return (
      //Lista Itens
      (
        <View style={styles.item}>
          <View>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}> Código: </Text>
              {this.props.item.ActionCode}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Data: </Text>
              Data:
              {" "}
              {this.state.itemDate.getDate() +
                "/" +
                this.state.itemDate.getMonth() +
                "/" +
                this.state.itemDate.getFullYear()}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Solicitante: </Text>
               {this.props.item.RequesterName}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Gestor: </Text>
               {this.props.item.ManagerName}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Classificação: </Text>
              {this.props.item.Classification}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Status: </Text>
              {this.props.item.StatusName}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Responsável: </Text>
               {this.props.item.ResposibleName}
            </Text>
            <Text style={styles.textoItens}>
            <Text style={styles.textoDescr}>Data de atribuição: </Text>
              
              {" "}
              {this.state.assignedToDate.getDate() +
                "/" +
                this.state.assignedToDate.getMonth() +
                "/" +
                this.state.assignedToDate.getFullYear()}
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
