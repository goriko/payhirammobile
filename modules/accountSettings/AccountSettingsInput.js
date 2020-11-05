import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from 'modules/accountSettings/Styles.js';

class AccountSettingsInput extends Component {
  render() {
    return (
      <View style={styles.AccountSettingsInputContainer}>
        <View style={styles.InputTitleContainer}>
          <Text style={styles.InputTitleTextStyle}>
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

export default AccountSettingsInput;
