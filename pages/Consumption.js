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
  ScrollView,
} from 'react-native';
import { Header } from 'react-native-elements';
import Date from '../components/Date';
import web from '../SpringConnect/webServices';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Consumption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue0: null,
      inputValue1: null,
      inputValue2: null,
      dateValue: '',
    };
  }

  setinputValue0 = newValue => {
    this.setState({ inputValue0: newValue });
  };
  setinputValue1 = newValue => {
    this.setState({ inputValue1: newValue });
  };
  setinputValue2 = newValue => {
    this.setState({ inputValue2: newValue });
  };
  setdateValue = newValue => {
    this.setState({ dateValue: newValue });
  };
  sendData = () => {
    //ellenőrzés arra jó-e a bemenet
    //webszervízhívás.
    //this.props.setActivePage('') //ha sikerül
    web
      .sendConsumption({
        distance: inputValue0,
        fuel: inputValue1,
        price: inputValue2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: '#668cff' }}
      >
        <View>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
            }}
          >
            <Header
              leftComponent={{
                icon: 'west',
                color: '#fff',
                iconStyle: { color: '#fff' },
                onPress: () => this.props.setActivePage(''),
              }}
              centerComponent={{
                text: 'Fogyasztás rögzítése',
                style: { color: '#fff', fontSize: 20 },
              }}
              rightComponent={{
                icon: 'login',
                color: '#fff',
                onPress: () => this.props.setLogin(false),
              }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.inputBox}>
              <Text>Mennyt mentél vele?(Km)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: '100%', height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue0}
                  value={this.state.inputValue0}
                  onBlur={this.props.handleBlur}
                  keyboardType="numeric"
                />
              </View>
              <Text>Mennyit tankoltál? (Liter)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: '100%', height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue0}
                  value={this.state.inputValue0}
                  onBlur={this.props.handleBlur}
                  keyboardType="numeric"
                />
              </View>
              <Text>Mennyiért tankoltál (Ft)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: '100%', height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue0}
                  value={this.state.inputValue0}
                  onBlur={this.props.handleBlur}
                  keyboardType="numeric"
                />
              </View>
              <Date
                title={'Tankolás ideje'}
                // error={""}
                value={this.state.dateValue}
                setValue={this.setdateValue}
              />
              <View style={styles.button}>
                <Button
                  onPress={() => this.props.setActivePage('Consumption')}
                  title="Adatfelvétel"
                  color="#841584"
                  accessibilityLabel="Belépés"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    //backgroundColor: '#668cff',
    minHeight: windowHeight,
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
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginLeft: 10,
    width: '100%',
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
