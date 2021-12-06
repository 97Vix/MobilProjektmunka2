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
import { Picker } from "@react-native-picker/picker";
import Date from "./Date";
import web from "../SpringConnect/webServices";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class AppNotificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "2",
      title: "",
      startDate: "",
      endDate: "",
      notifDate: "",
    };
  }

  setTitle = (newTitle) => {
    this.setState({ title: newTitle });
  };
  setStartDate = (newStartDate) => {
    this.setState({ startDate: newStartDate });
  };
  setEndDate = (newEndDate) => {
    this.setState({ endDate: newEndDate });
  };
  setNotifDate = (newNotifDate) => {
    this.setState({ notifDate: newNotifDate });
  };
  /*sendData = () => {
    if (this.state.endDate === "") {
      Alert.alert("Figyelem!", "Az értesítésnek kell hogy legyen cél dátuma!");
      return null;
    }

    var price = this.state.inputValue0;
    var quantity = this.state.inputValue1;
    var lenght = this.state.inputValue2;
    var date = this.state.dateValue;
    this.state.selectedValue0 == "Ft" && (quantity = quantity / price);

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
        if (response.data == "succesful") {
          Alert.alert("Siker", "Sikeres feltöltés");
        } else if (response.data == "not succesful") {
          Alert.alert(" Nem sikerült", "Sikertelen feltöltés");
        } else {
          Alert.alert(" Hiba", "Szerverhiba lépett fel");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };*/

  sendData = () => {
      this.props.addNotif(this.state);
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <Text>Értesítés Neve</Text>
            <View style={styles.input}>
              <Picker
                style={{ height: 40 }}
                selectedValue={this.state.title}
                onValueChange={(itemValue, itemIndex) =>
                  this.setTitle(itemValue)
                }
              >
                <Picker.Item label="Placeholder" value="Placeholder" />
                <Picker.Item label="Value1" value="Value1" />
                <Picker.Item label="Value2" value="Value2" />
                <Picker.Item label="Value3" value="Value3" />
              </Picker>
            </View>
            <Text></Text>
            <Date
              title={"Kezdő dátum"}
              // error={""}
              value={this.state.startDate}
              setValue={this.setStartDate}
            />
            <Date
              title={"Cél dátum"}
              // error={""}
              value={this.state.endDate}
              setValue={this.setEndDate}
            />
            <Date
              title={"Értesítés dátum"}
              // error={""}
              value={this.state.notifDate}
              setValue={this.setNotifDate}
            />
            <View style={styles.button}>
              <Button
                onPress={this.sendData}
                title="Adatok küldése"
                color="#841584"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /*container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: "center",
    //justifyContent: 'center',
    //backgroundColor: '#668cff',
    minHeight: windowHeight,
    paddingTop: 30,
  },*/
  inputBox: {
    marginBottom: 30,
    backgroundColor: "#b3ffff",
    padding: 20,
    borderWidth: 4,
    borderColor: "gray",
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
