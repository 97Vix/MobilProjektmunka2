import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class NavigationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.button}>
            <Button
              onPress={() =>
                this.props.setActivePage(this.props.navigationTarget)
              }
              title={this.props.buttonTitle}
              color="#841584"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 30,
    backgroundColor: '#b3ffff',
    padding: 20,
    borderWidth: 4,
    borderColor: 'gray',
    width: '70%',
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
