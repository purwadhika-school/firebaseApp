import React, { Component } from "react";
import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  handleSignup() {
    const { email, password, confirm_password } = this.state;
    if (email === "" || password === "" || confirm_password === "") {
      Alert.alert("Warning!", "Fields can not be empty!");
    } else {
      if (password === confirm_password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="email"
          onChangeText={txt => this.setState({ email: txt })}
        />
        <TextInput
          placeholder="password"
          onChangeText={txt => this.setState({ password: txt })}
        />
        <TextInput
          placeholder="confirmation password"
          onChangeText={txt => this.setState({ confirm_password: txt })}
        />
        <TouchableOpacity onPress={() => this.handleSignup()}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;
