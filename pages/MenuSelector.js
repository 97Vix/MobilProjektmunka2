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
import AppChart from '../components/AppChart'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MenuSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {
        title: 'Selected',
        description: 'Seco',
      },
      password: '',
      PickerSelectedVal: '',
      selectedValue: '',
      number: '',
    };
  }

  setNumber = newValue => {
    this.setState({ number: newValue });
  };
  setPassword = newValue => {
    this.setState({ password: newValue });
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Főmenü',
            style: { color: '#fff', fontSize: 20 },
          }}
          rightComponent={{
            icon: 'login',
            color: '#fff',
            onPress: () => this.props.setLogin(),
          }}
        />
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <AppChart/>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Fogyasztás felvétele</Text>
            <View style={styles.button}>
              <Button
                onPress={() => this.props.setActivePage('Consumption')}
                title="Adatfelvétele"
                color="#841584"
                accessibilityLabel="Belépés"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
