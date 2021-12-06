import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";


const AppHeader = (props) => (
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
        onPress: () => props.setActivePage(""),
      }}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 20 },
      }}
      rightComponent={{
        icon: "login",
        color: "#fff",
        onPress: () => props.setLogin(false),
      }}
    />
  </View>
);

export default AppHeader;