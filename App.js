import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
//import { WebView } from 'react-native-webview';
//import Root from './routes/Root';
//import { Icon } from 'react-native-elements'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Navigator from './routes/Root';

import Login from './pages/Login';
import Menu from './pages/Menu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loggedIn: false,
      password: '',
    };
  }

  setPassword = newValue => {
    this.setState({ password: newValue });
  };
  setLoggedIn = newValue => {
    this.setState({ loggedIn: newValue });
  };
  setLoggedOut = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View>
            {this.state.loggedIn ? (
              <Menu setLogin={this.setLoggedOut} />
            ) : (
              <Login setter={this.setLoggedIn} />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  inputBox: {
    backgroundColor: '#b3ffff',
    padding: 20,
    borderWidth: 4,
    borderColor: 'black',
    width: '70%',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    paddingTop: 15,
  },
});
