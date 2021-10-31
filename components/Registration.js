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
import { Overlay } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue0: null,
      inputValue1: null,
      inputValue2: null,
      inputValue3: null,
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
  setinputValue3 = newValue => {
    this.setState({ inputValue3: newValue });
  };
  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.visible}
          onBackdropPress={this.props.setV}
          overlayStyle={{ backgroundColor: 'lightblue' }}
        >
          <Text>Szia! Itt tudsz regisztrálni. </Text>
          <View style={styles.inputBox}>
            <Text>Email:</Text>
            <View style={styles.input}>
              <TextInput
                style={{ width: '100%', height: 40, paddingLeft: 10 }}
                onChangeText={this.setinputValue0}
                value={this.state.inputValue0}
                onBlur={this.props.handleBlur}
                keyboardType="email-address"
              />
            </View>
            <Text>Felhasználónév:</Text>
            <View style={styles.input}>
              <TextInput
                style={{ width: '100%', height: 40, paddingLeft: 10 }}
                onChangeText={this.setinputValue1}
                value={this.state.inputValue1}
                onBlur={this.props.handleBlur}
                keyboardType="default"
              />
            </View>
            <Text>Jelszó:</Text>
            <View style={styles.input}>
              <TextInput
                style={{ width: '100%', height: 40, paddingLeft: 10 }}
                onChangeText={this.setinputValue2}
                value={this.state.inputValue2}
                onBlur={this.props.handleBlur}
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
            <Text>Jelszó ismétlés:</Text>
            <View style={styles.input}>
              <TextInput
                style={{ width: '100%', height: 40, paddingLeft: 10 }}
                onChangeText={this.setinputValue3}
                value={this.state.inputValue3}
                onBlur={this.props.handleBlur}
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => alert('Sikeres regisztráció')}
                title="Regisztráció"
                color="#841584"
                accessibilityLabel="Belépés"
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    //marginBottom: 30,
    backgroundColor: '#b3ffff',
    padding: 20,
    borderWidth: 4,
    borderColor: 'gray',
    width: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginLeft: 10,
    width: 180,
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
