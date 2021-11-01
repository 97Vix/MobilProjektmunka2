import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import web from '../SpringConnect/webServices';
import Regist from '../components/Registration';

//const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleReg: false,
    };
  }

  username = '';
  password = '';

  setNumber = newValue => {
    this.setState({ number: newValue });
  };
  setPassword = newValue => {
    this.setState({ password: newValue });
  };
  setVisibleReg = value => {
    this.setState({ visibleReg: value });
  };
  login = () => {
    /*
    web
      .login('TesztElek@teszt.com', 'teszt')
      .then(response => {
        if (response.data == 'succesful') {
          //console.log(response);
          this.props.setToken(response.headers['set-cookie'][0]);
          this.props.setLogin(true);
        } else if (response.data == 'not succesful') {
          Alert.alert('Belépési hiba', 'Nem sikerült belépni');
        } else {
          Alert.alert('Szerver hiba', 'A szerver működésében hiba képet fel.');
        }
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Szerver hiba', error);
      });*/
    if (this.username == 'TesztElek@teszt.com' && this.password == 'teszt') {
    } else {
      Alert.alert('Belépési hiba', 'Nem sikerült belépni');
    }
    this.props.setLogin(true);
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
              placeholder="Email"
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={value => (this.username = value)}
            />
            <Input
              leftIcon={<Icon name="expeditedssl" size={24} color="black" />}
              placeholder="Jelszó"
              secureTextEntry={true}
              onChangeText={value => (this.password = value)}
            />
            <View style={{ padding: 10 }}>
              <View style={styles.button}>
                <Button
                  onPress={() => this.login()}
                  title="Belépés"
                  color="black"
                  accessibilityLabel="Belépés"
                />
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => this.setVisibleReg(true)}
                  title="Regisztráció"
                  color="black"
                  accessibilityLabel="Regisztráció"
                />
                <Regist
                  visible={this.state.visibleReg}
                  setV={() => this.setVisibleReg(false)}
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
