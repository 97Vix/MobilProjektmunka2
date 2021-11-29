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
//import { WebView } from 'react-native-webview';
//import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import Card from '../components/NavigationCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class PageSelector extends Component {
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
          </View>
          <View style={styles.container}>
            <Card
              setActivePage={this.props.setActivePage}
              title={'Fogyasztás felvétele'}
              buttonTitle={'Adatfelvétel'}
              navigationTarget={'Consumption'}
            />
            <Card
              setActivePage={this.props.setActivePage}
              title={'Fogyasztás kiszámítása'}
              buttonTitle={'Számítás felületre'}
              navigationTarget={'ConsumCalculator'}
            />
            <Card
              setActivePage={this.props.setActivePage}
              title={'Értesítések'}
              buttonTitle={'Értesítések kezelése'}
              navigationTarget={'AppNotifications'}
            />
            <Card
              setActivePage={this.props.setActivePage}
              title={'Grafikonok'}
              buttonTitle={'Grafikonok megtekintése'}
              navigationTarget={'Chart'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#668cff',
    minHeight: windowHeight + 100,
    paddingTop: 30,
  },
});
