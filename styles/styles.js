import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  SampleDatePicker: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    marginLeft: 10,
    //height: 40,
    width: '60%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  SampleDatePickerError: {
    borderWidth: 2.5,
    borderColor: 'red',
    borderRadius: 5,
    marginLeft: 10,
    height: 40,
    width: '60%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ff8080',
  },
});
