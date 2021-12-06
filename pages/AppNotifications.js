import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  Text,
} from "react-native";
import AppFloatButton from "../components/AppFloatButton";
import AppNotificationList from "../components/AppNotificationList";
import AppHeader from "../components/AppHeader";

const windowHeight = Dimensions.get("window").height;

export default class AppNotifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader
          title="Értesítések"
          setActivePage={this.props.setActivePage}
          setLogin={this.props.setLogin}
        />
        <ScrollView contentContainerStyle={styles.list}>
          <AppNotificationList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#668cff",
    minHeight: windowHeight + 70,
    paddingTop: 30,
  },
  list: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#668cff",
    //minHeight: windowHeight + 80,
    paddingTop: 30,
  },
  submitButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    marginBottom: 20,
    borderRadius: 50,
  },
});
