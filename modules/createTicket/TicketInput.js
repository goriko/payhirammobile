import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class TicketInput extends Component {
  render() {
    return (
      <View style={styles.TicketInputInputContainer}>
        <View style={styles.TicketInputTitleContainer}>
          <Text style={styles.TicketInputTitleTextStyle}>
            {this.props.inputTitle}
          </Text>
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TicketInputInputContainer: {
    marginTop: '2%',
    width: '100%',
  },
  TicketInputTitleContainer: {},
  TicketInputTitleTextStyle: {
    fontSize: 15,
  },
  TextInputContainer: {
    height: 60,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
  },
});
export default TicketInput;
