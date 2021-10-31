import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { WebView } from 'react-native-webview';
//import Root from './routes/Root';
//import { Icon } from 'react-native-elements'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Navigator from './routes/Root';

import Login from './pages/Login';
import MenuRoot from './pages/MenuRoot';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loggedIn: false,
      password: '',
      token: null,
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
  setToken = newValue => {
    this.setState({ token: newValue });
  };
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <View style={styles.container}>
            <View>
              {this.state.loggedIn ? (
                <MenuRoot
                  token={this.state.token}
                  setLogin={this.setLoggedOut}
                />
              ) : (
                <Login setToken={this.setToken} setLogin={this.setLoggedIn} />
              )}
            </View>
          </View>
        </View>
      </SafeAreaProvider>
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
