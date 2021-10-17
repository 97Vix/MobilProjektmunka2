import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class SampleDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: 'date',
      show: false,
      firstShow: false,
      defDate: new Date(),
    };
  }

  onChange = (event, selectedDate) => {
    const newDate = selectedDate || this.props.date;
    if (typeof selectedDate === 'undefined') {
      this.setState({
        date: new Date(),
        show: false,
        firstShow: false,
      });
      this.props.setValue('');
    } else {
      this.setState({
        date: newDate,
        show: false,
        firstShow: true,
      });
      this.props.setValue(newDate);
    }
  };

  componentDidUpdate() {
    if (this.props.value != this.state.date && this.props.value != '') {
      this.setState({
        date: this.props.value,
        show: false,
        firstShow: true,
      });
    } else if (
      this.props.value == '' &&
      this.state.date.getTime() !== new Date(this.state.defDate).getTime()
    ) {
      this.setState({
        date: this.state.defDate,
        show: false,
        firstShow: false,
      });
    }
  }

  render() {
    return (
      <View style={{ padding: 5 }}>
        <Text>{this.props.title}</Text>
        {this.state.show && (
          <DateTimePicker
            value={this.state.date}
            mode={this.state.mode}
            onChange={this.onChange}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          />
        )}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View
            style={
              this.props.error
                ? styles.SampleDatePickerError
                : styles.SampleDatePicker
            }
          >
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                marginTop: 10,
              }}
            >
              {this.state.firstShow
                ? this.state.date.toISOString().split('T')[0]
                : 'Nyomd meg a naptár ikont! -->'}
            </Text>
          </View>
          <View>
            <View style={{ width: 60, marginLeft: 10 }}>
              <Icons.Button
                name="event"
                backgroundColor="#b3ffff"
                color="#000000"
                size={40}
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  this.setState({ show: true });
                }}
                borderRadius={60}
              ></Icons.Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
