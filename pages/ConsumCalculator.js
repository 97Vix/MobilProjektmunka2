import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../components/AppHeader";
import { Picker } from "@react-native-picker/picker";
import Date from "../components/Date";
import web from "../SpringConnect/webServices";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class ConsumCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue0: "",
      inputValue1: "",
      inputValue2: "",
      selectedValue0: null,
      resault: 0,
      resault2: 0,
      error: "",
    };
  }
  setinputValue0 = (newValue) => {
    this.setState({ inputValue0: newValue });
  };
  setinputValue1 = (newValue) => {
    this.setState({ inputValue1: newValue });
  };
  setinputValue2 = (newValue) => {
    this.setState({ inputValue2: newValue });
  };
  setSelectedValue0 = (newValue) => {
    this.setState({ selectedValue0: newValue });
  };
  calculation() {
    if (
      this.state.inputValue0 === "" ||
      this.state.inputValue1 === "" ||
      this.state.inputValue2 === ""
    ) {
      this.setState({ error: "Minden mezőt ki kell tölteni" });
      return null;
    }
    var price = this.state.inputValue0;
    var quantity = this.state.inputValue1;
    var lenght = this.state.inputValue2;
    this.state.selectedValue0 == "Ft" && (quantity = quantity / price);

    this.setState({
      resault: Math.round((100 / lenght) * quantity * 100) / 100,
    });
    this.setState({
      resault2: Math.round(((price * quantity) / lenght) * 100) / 100,
    });
    this.setState({ error: "" });
  }
  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#668cff" }}
      >
        <View>
          <AppHeader
            title="Fogyasztás kiszámítása"
            setActivePage={this.props.setActivePage}
            setLogin={this.props.setLogin}
          />
          <View style={styles.container}>
            <View style={styles.inputBox}>
              <Text>Az üzemanyag literenkénti ára: (Ft)</Text>
              <View style={styles.input}>
                <TextInput
                  style={{ width: "100%", height: 40, paddingLeft: 10 }}
                  onChangeText={this.setinputValue0}
                  value={this.state.inputValue0}
                  onBlur={this.props.handleBlur}
                  keyboardType="numeric"
                />
              </View>
              <Text>A vásárolt mennyiség: </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.inputAndPicker}>
                  <TextInput
                    style={{ width: "100%", height: 40, paddingLeft: 10 }}
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
              <Text>A megtett út hossza: (km)</Text>
              <View>
                <View style={styles.input}>
                  <TextInput
                    style={{ width: "100%", height: 40, paddingLeft: 10 }}
                    onChangeText={this.setinputValue2}
                    value={this.state.inputValue2}
                    onBlur={this.props.handleBlur}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => this.calculation()}
                  title="Számolás"
                  color="#841584"
                />
              </View>
              <Text style={{ color: "red" }}>{this.state.error}</Text>
              {this.state.resault != 0 && (
                <View>
                  <View>
                    <Text style={styles.resText}>Az átlagos fogyasztás:</Text>
                    <Text style={styles.resText2}>
                      {this.state.resault} l/100km
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.resText}>Az üzemanyag költség:</Text>
                    <Text style={styles.resText2}>
                      {this.state.resault2} Ft/km
                    </Text>
                  </View>
                </View>
              )}
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
    alignItems: "center",
    //justifyContent: 'center',
    //backgroundColor: '#668cff',
    minHeight: windowHeight,
    paddingTop: 30,
  },
  inputBox: {
    marginBottom: 30,
    backgroundColor: "#b3ffff",
    padding: 20,
    borderWidth: 4,
    borderColor: "gray",
    width: "80%",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    marginLeft: 10,
    width: "100%",
  },
  inputAndPicker: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    marginLeft: 10,
    width: "50%",
  },
  picker: {
    flex: 1,
    width: "40%",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
  },
  button: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  resText: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  resText2: {
    alignSelf: "center",
    fontSize: 20,
    //fontWeight: 'bold',
  },
});
