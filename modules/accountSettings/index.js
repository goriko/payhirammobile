import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AccountSettingsInput from 'modules/accountSettings/AccountSettingsInput.js';
import AccountSettingsButton from 'modules/accountSettings/AccountSettingsButton.js';
import styles from 'modules/accountSettings/Styles.js';
class AccountSettings extends Component {
  render() {
    let user = {
      email :"johndoe@gmail.com",
      username:"johndoe"
    }

    return (
      <View style={styles.AccountSettingsContainer}>
        <AccountSettingsInput inputTitle="Username" value={user.username}/>
        <AccountSettingsInput inputTitle="Email Address" value={user.email}/>
        <AccountSettingsButton
          onPress={() => {}}
          buttonText="Update Email"
          buttonColor="#22B173"
          textColor="#FFFFFF"
        />
        <AccountSettingsInput inputTitle="Password" placeholder="Password" />
        <AccountSettingsInput inputTitle="ConfirmPassword" placeholder="Confirm Password" />
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
