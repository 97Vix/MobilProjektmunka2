import React, { useState } from "react";
import { StyleSheet, Text, View} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


const AppNotification = (props) => {

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={styles.inputBox}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconButton}>
            <FontAwesome5
              name="pen"
              size={24}
              color="black"
              onPress={props.setNot}
            />
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5
              name="trash"
              size={24}
              color="red"
              onPress={() => props.delNot(props.id)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppNotification;

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 30,
    backgroundColor: "#b3ffff",
    padding: 20,
    width: "95%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "auto", 
    marginRight: 0,
    justifyContent: "space-between"
  },
  iconButton: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
