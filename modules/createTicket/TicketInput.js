import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import styles from 'modules/createTicket/Styles.js';

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

export default TicketInput;
