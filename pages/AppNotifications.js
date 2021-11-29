import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header } from "react-native-elements";
import AppFloatButton from "../components/AppFloatButton";
import AppNotificationList from "../components/AppNotificationList";


const windowHeight = Dimensions.get("window").height;


export default class AppNotifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView>
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
          <AppNotificationList/>
        </View>
        </ScrollView>
        <View>
          <AppFloatButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#668cff",
    minHeight: windowHeight - 30,
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
