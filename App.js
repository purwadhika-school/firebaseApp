import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Input from './src/Input'

export default class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("current user: ", user);
      } else {
        // No user is signed in.
        console.log("error");
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Login />
        <Signup /> */}
        <Input />
      </View>
    );
  }
}
