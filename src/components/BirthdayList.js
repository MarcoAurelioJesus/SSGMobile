import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ScrollView ,StatusBar} from "react-native";
import axios from "axios";
import DadosUsuario from "./DadosUsuario";
import Aniversariantes from "./Aniversariantes";
import TopoSys from "./TopoSys";

export default class BirthdayList extends Component {
  constructor(props) {
    super(props);
    console.log("BirthdayList====" + this.props);
    this.state = { birthday: [] };
  }
  componentWillMount() {
    axios
      .get(
        "https://ssg.sysmap.com.br/api/" +
          this.props.token +
          "/home/get-default"
      )
      .then(response => {
        this.setState({ birthday: response.data.ReturnObject.BirthdayList });
        console.log(this.state.birthday);
      })
      .catch(() => {
        alert("Erro ao buscar dados");
      });
  }
  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <View>
          <StatusBar backgroundColor="#5e7796" />
          <TopoSys />
        </View>
        <View style={styles.birthday}>
          <View>
            <Text style={styles.txtBirthday}>Aniversariantes</Text>
          </View>
        </View>
        <View style={{ marginBottom: 50 }}>
          <View>
            <ScrollView scrollsToTop  style={{ backgroundColor: "#D3D3D3" }}>
              {this.state.birthday.map(item => (
                <Aniversariantes key={item.UserId} item={item} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  birthday: {
    backgroundColor: "#BEBEBE",
    margin: 1,
    padding: 1,
    maxHeight: 505,
    borderRadius: 5,
    marginBottom:15,
  },
  txtBirthday: {
    backgroundColor: "#63B8FF",
    margin: 1,
    color: "#FFF",
    fontWeight: "bold",
    borderRadius: 5,
    padding: 5,
    fontSize: 16
  }
});
