import React, { Component } from "react";
import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin() {
    const { email, password } = this.state;
    console.log(email + " " + password);
    if (email === "" || password === "") {
      Alert.alert("Warning", "Fields can not be empty!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log("Sukses login ", res);
        })
        .catch(err => {
          console.log(err);
        });
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
        <TouchableOpacity
          onPress={() => {
            this.handleLogin();
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
