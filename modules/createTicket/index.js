import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import TicketInput from 'modules/createTicket/TicketInput';
import TicketButton from 'modules/createTicket/TicketButton.js';
import styles from 'modules/createTicket/Styles.js';
class CreateTicket extends Component {
  render() {
    return (
      <View style={styles.CreateTicketContainer}>
        <View style={styles.InputContainer}>
          <TicketInput inputTitle="Title" />
        </View>
        <View style={styles.InputContainer}>
          <TicketInput inputTitle="Description" />
        </View>
        <View style={styles.TicketButtonContainer}>
          <TicketButton
            buttonColor="#22B173"
            buttonWidth="100%"
            buttonHeight={50}
            fontSize={14}
            textColor="#FFFFFF"
            buttonText="Create Ticket"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default CreateTicket;
