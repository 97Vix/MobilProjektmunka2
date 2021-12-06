import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';


const AppFloatButton = (props) => (
  <FAB
    style={styles.fab}
    icon="plus"
    onPress={props.method}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'relative',
    margin: 16,
    backgroundColor: "white",
  },
})

export default AppFloatButton;