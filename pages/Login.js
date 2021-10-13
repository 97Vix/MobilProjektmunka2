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
//import { navigation } from 'react-navigation';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends Component {
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
        <View>
          <Header
            centerComponent={{
              text: 'Bejelentkezés',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <Input
              placeholder="Felhasználónév"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              leftIcon={<Icon name="expeditedssl" size={24} color="black" />}
              placeholder="Jelszó"
              secureTextEntry={true}
            />
            <View style={{ padding: 10 }}>
              <View style={styles.button}>
                <Button
                  onPress={() => this.props.setter(true)}
                  title="Belépés"
                  color="black"
                  accessibilityLabel="Belépés"
                />
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => console.log('Regisztráció')}
                  title="Regisztráció"
                  color="black"
                  accessibilityLabel="Regisztráció"
                />
              </View>
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
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'gray',
    height: windowHeight, //750
    paddingTop: 150,
  },
  inputBox: {
    backgroundColor: '#d3dbd5',
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

/*


            <Text>Bejelentkezés</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.setNumber}
              value={this.state.number.toString()}
              placeholder="Felhasználónév"
              keyboardType="default"
            />
            <Text>Jelszó</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={this.setPassword}
              value={this.state.password.toString()}
              placeholder="Jelszó"
              keyboardType="default"
            />


*/
