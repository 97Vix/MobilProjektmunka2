import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
//import { WebView } from 'react-native-webview';
//import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';

import PageSelector from './PageSelector';
import Consumption from './Consumption';
import ConsumCalculator from './ConsumCalculator';
import Chart from './Chart';
import AppNotifications from './AppNotifications';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: '',
    };
  }

  setActivePage = newPage => {
    this.setState({ activePage: newPage });
  };

  render() {
    switch (this.state.activePage) {
      case 'Consumption':
        return (
          <Consumption
            token={this.props.token}
            setLogin={this.props.setLogin}
            setActivePage={this.setActivePage}
          />
        );
        break;
      case 'ConsumCalculator':
        return (
          <ConsumCalculator
            setLogin={this.props.setLogin}
            setActivePage={this.setActivePage}
          />
        );
        break;
        case 'Chart':
          return (
            <Chart
              setLogin={this.props.setLogin}
              setActivePage={this.setActivePage}
            />
          );
          break;
        case 'AppNotifications':
          return (
            <AppNotifications
                setLogin={this.props.setLogin}
                setActivePage={this.setActivePage}
            />
          );
          break;
      default:
        return (
          <PageSelector
            setActivePage={this.setActivePage}
            setLogin={this.props.setLogin}
          />
        );
        break;
    }
  }
}

const styles = StyleSheet.create({
  /*
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#668cff',
    height: windowHeight,
    paddingTop: 150,
  },
  inputBox: {
    marginBottom: 30,
    backgroundColor: '#b3ffff',
    padding: 20,
    borderWidth: 4,
    borderColor: 'gray',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  */
});
