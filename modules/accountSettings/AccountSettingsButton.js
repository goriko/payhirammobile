import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from 'modules/accountSettings/Styles.js';

class AccountSettingsButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        style={[
          styles.AccountSettingsButtonContainer,
          {backgroundColor: this.props.buttonColor},
        ]}>
        <Text
          style={[
            styles.AccountSettingsButtonTextStyle,
            {color: this.props.textColor},
          ]}>
          {this.props.buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default AccountSettingsButton;
