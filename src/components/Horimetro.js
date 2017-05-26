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
import HoursPeriod from "./HoursPeriod";

export default class Horimetro extends Component {
  constructor(props) {
    super(props);
    console.log("Horimetro====" + this.props);
    this.state = { hoursPeriod: [] };
  }
  componentWillMount() {
    axios
      .get(
        "https://ssg.sysmap.com.br/api/" +
          this.props.token +
          "/home/get-default"
      )
      .then(response => {
        this.setState({
          hoursPeriod: response.data.ReturnObject.HoursPeriodSummary
        });
        console.log(this.state.hoursPeriod);
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
        <View style={styles.hours}>
          <Text style={styles.txtHours}>Resumo de Horas</Text>
            <ScrollView scrollsToTop style={{ backgroundColor: "#D3D3D3" }}>
              {this.state.hoursPeriod.map(item => (
                <HoursPeriod key={item.Type} item={item} />
              ))}
            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hours: {
    backgroundColor: "#BEBEBE",
    margin: 1,
    padding: 1,
    maxHeight: 505,
    borderRadius: 5,
    marginBottom: 15
  },
  txtHours: {
    backgroundColor: "#63B8FF",
    margin: 1,
    color: "#FFF",
    fontWeight: "bold",
    borderRadius: 5,
    padding: 5,
    fontSize: 16
  }
});
