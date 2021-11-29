import "react-native-gesture-handler";
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
} from "react-native";
//import { WebView } from 'react-native-webview';
//import { Icon } from 'react-native-elements'
import { Header } from "react-native-elements";
import AppChart from "../components/AppChart";
import CustomizedPicker from "../components/CustomizedPicker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const charIntervals = ["Heti", "Havi", "Éves"];

const consumptionData = {
  labels: [],
  datasets: [
    {
      data: [],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Fogyasztás"], // optional

  set setLabel(newLabels) {
    this.labels = newLabels;
  },

  set setData(newData) {
    this.datasets[0].data = newData;
  },
};

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {
        title: "Selected",
        description: "Seco",
      },
      password: "",
      PickerSelectedVal: "",
      selectedValue: "",
      number: "",
      charInterval: charIntervals[0],
    };
  }

  setNumber = (newValue) => {
    this.setState({ number: newValue });
  };
  setPassword = (newValue) => {
    this.setState({ password: newValue });
  };

  setSelectedCharType = (itemValue) => {
    this.setState({ charInterval: itemValue });
  };

  checkitemValue = () => {
    const { charInterval } = this.state;
    if (!charIntervals.includes(charInterval));
  };

  render() {
    switch (this.state.charInterval) {
      case "Havi":
        consumptionData.setLabel = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "10",
        ];
        consumptionData.setData = [10, 23, 34, 24, 56, 32, 23, 44, 56];
        break;
      case "Éves":
        consumptionData.setLabel = [
          "Jan",
          "Feb",
          "Már",
          "Ápr",
          "Máj",
          "Jún",
          "Júl",
          "Aug",
          "Szep",
          "Okt",
          "Nov",
          "Dec",
        ];
        consumptionData.setData = [120, 234, 456, 244];
        break;
      default:
        consumptionData.setLabel = [
          "Hétfő",
          "Kedd",
          "Szerda",
          "Csütörtök",
          "Péntek",
          "Szombat",
          "Vasárnap",
        ];
        consumptionData.setData = [10, 23, 34, 24, 56, 32];
        break;
    }

    return (
      <View>
        <View
          style={{
            height: 100,
            justifyContent: "center",
          }}
        >
          <Header
            leftComponent={{
              icon: "west",
              color: "#fff",
              iconStyle: { color: "#fff" },
              onPress: () => this.props.setActivePage(""),
            }}
            centerComponent={{
              text: "Fogyasztás Grafikon",
              style: { color: "#fff", fontSize: 20 },
            }}
            rightComponent={{
              icon: "login",
              color: "#fff",
              onPress: () => this.props.setLogin(false),
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.chartContainer}>
            <AppChart chartData={consumptionData} />
          </View>
          <View style={styles.inputBox}>
            <CustomizedPicker
              handler={this.setSelectedCharType}
              interval={charIntervals}
              selected={this.state.charInterval}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
    backgroundColor: "#668cff",
    height: windowHeight,
    paddingTop: 10,
  },
  inputBox: {
    marginBottom: 30,
    backgroundColor: "#b3ffff",
    padding: 20,
    borderWidth: 4,
    borderColor: "gray",
    width: "70%",
  },
  chartContainer: {
    marginBottom: 30,
    backgroundColor: "#b3ffff",
    padding: 20,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: "gray",
    //width: '70%',
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
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
