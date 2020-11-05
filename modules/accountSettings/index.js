import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AccountSettingsInput from 'modules/accountSettings/AccountSettingsInput.js';
import AccountSettingsButton from 'modules/accountSettings/AccountSettingsButton.js';
import styles from 'modules/accountSettings/Styles.js';
class AccountSettings extends Component {
  render() {
    return (
      <View style={styles.AccountSettingsContainer}>
        <AccountSettingsInput inputTitle="Username" />
        <AccountSettingsInput inputTitle="Email Address" />
        <AccountSettingsButton
          onPress={() => {}}
          buttonText="Update Email"
          buttonColor="#22B173"
          textColor="#FFFFFF"
        />
        <AccountSettingsInput inputTitle="Password" />
        <AccountSettingsInput inputTitle="ConfirmPassword" />
        <AccountSettingsButton
          onPress={() => {}}
          buttonText="Change Password"
          buttonColor="#22B173"
          textColor="#FFFFFF"
        />
      </View>
    );
  }
}

export default AccountSettings;
