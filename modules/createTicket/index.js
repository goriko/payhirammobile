import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TicketInput from 'modules/createTicket/TicketInput';
import TicketButton from 'modules/createTicket/TicketButton.js';
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

const styles = StyleSheet.create({
  CreateTicketContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: '7%',
    marginTop: '4%',
  },
  InputContainer: {
    width: '100%',
    paddingBottom: '5%',
  },
  TicketButtonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    paddingBottom: 10,
  },
});
export default CreateTicket;
