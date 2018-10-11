import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/Login";
import Signup from "./src/Signup";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
        <Signup />
      </View>
    );
  }
}
