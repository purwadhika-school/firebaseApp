import React, { Component } from "react";
import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      buahs: []
    };
  }

  simpanNama() {
    const nama = this.state;
    firebase
      .database()
      .ref("User/")
      .set({ nama })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    firebase
      .database()
      .ref("product/buah/")
      .once("value")
      .then(snapshot => {
        this.setState({
          buahs: snapshot.val()
        });
        console.log(snapshot.val());
      });
  }

  simpanTransaksi() {
    firebase
      .database()
      .ref("product/buah/" + this.state.nama)
      .set({
        color: "green",
        price: "15000"
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="nama"
          onChangeText={txt => this.setState({ nama: txt })}
        />
        <TouchableOpacity onPress={() => this.simpanTransaksi()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Input;
