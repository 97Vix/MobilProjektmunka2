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
import { Picker } from '@react-native-picker/picker';
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
      selectedValue0: null,
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
  setSelectedValue0 = newValue => {
    this.setState({ selectedValue0: newValue });
  };
  setdateValue = newValue => {
    console.log(newValue);
    this.setState({ dateValue: newValue });
  };
  sendData = () => {
    if (
      this.state.inputValue0 === '' ||
      this.state.inputValue1 === '' ||
      this.state.inputValue2 === '' ||
      this.state.dateValue === ''
    ) {
      Alert.alert('Figyelem!', 'Minden mezőt ki kell tölteni');
      return null;
    }

    var price = this.state.inputValue0;
    var quantity = this.state.inputValue1;
    var lenght = this.state.inputValue2;
    var date = this.state.dateValue;
    this.state.selectedValue0 == 'Ft' && (quantity = quantity / price);

    web
      .sendConsumption(
        {
          price: price,
          distance: lenght,
          fuel: quantity,
          Cdate: date,
        },
        this.props.token
      )
      .then(function (response) {
        console.log(response);
        if (response.data == 'succesful') {
          Alert.alert('Siker', 'Sikeres feltöltés');
        } else if (response.data == 'not succesful') {
          Alert.alert(' Nem sikerült', 'Sikertelen feltöltés');
        } else {
          Alert.alert(' Hiba', 'Szerverhiba lépett fel');
        }
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
              <Text>Az üzemanyag literenkénti ára (Ft)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: '100%', height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue0}
                  value={this.state.inputValue0}
                  onBlur={this.props.handleBlur}
                  keyboardType="numeric"
                />
              </View>
              <Text>Mennyit tankoltál? (Liter/Ft)</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.inputAndPicker}>
                  <TextInput
                    style={{ width: '100%', height: 40, paddingLeft: 10 }}
                    onChangeText={this.setinputValue1}
                    value={this.state.inputValue1}
                    onBlur={this.props.handleBlur}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.picker}>
                  <Picker
                    style={{ height: 40 }}
                    selectedValue={this.state.selectedValue0}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setSelectedValue0(itemValue)
                    }
                  >
                    <Picker.Item label="Liter" value="Liter" />
                    <Picker.Item label="Ft" value="Ft" />
                  </Picker>
                </View>
              </View>
              <Text>Mennyit mentél vele?(Km)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: '100%', height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue2}
                  value={this.state.inputValue2}
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
                  onPress={() => this.sendData()}
                  title="Adatok küldése"
                  color="#841584"
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
    paddingTop: 30,
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
  inputAndPicker: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginLeft: 10,
    width: '50%',
  },
  picker: {
    flex: 1,
    width: '40%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
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
