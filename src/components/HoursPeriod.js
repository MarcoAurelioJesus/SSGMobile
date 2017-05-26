import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
export default class HoursPeriod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(
        parseInt(
          this.props.item.StartDate.replace("\/Date(", "").replace(")\/", "")
        )
      ),
      endDate: new Date(
        parseInt(
          this.props.item.EndDate.replace("\/Date(", "").replace(")\/", "")
        )
      )
    };
  }
  render() {
    return (
      //Lista Itens
      (
        <View style={styles.item}>
          <Text style={styles.textoItens}>
           <Text style={styles.textoDescr}>Período: </Text>
           {this.props.item.Type}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}> Total: </Text>
          {this.props.item.Total}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Hora Devida: </Text>
             {this.props.item.Owed}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Hora Normal: </Text>
             {this.props.item.Normal}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Hora Extra 50%: </Text>
             {this.props.item.FirstLevelOvertime}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Hora Extra 100%: </Text>
             {this.props.item.SecondLevelOvertime}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Adicional Noturno: </Text>
             {this.props.item.AditionalOvertime}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Data Início: </Text>
            {this.state.startDate.getDate() +
              "/" +
              this.state.startDate.getMonth() +
              "/" +
              this.state.startDate.getFullYear()}
          </Text>
          <Text style={styles.textoItens}>
          <Text style={styles.textoDescr}>Data Final: </Text>
            {this.state.endDate.getDate() +
              "/" +
              this.state.endDate.getMonth() +
              "/" +
              this.state.endDate.getFullYear()}
          </Text>
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
   color:'#63B8FF',
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 18
  }
});
