import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import CustomButton from 'modules/otp/CustomButton.js';
import styles from 'modules/otp/Styles.js';
import OneTimePin from 'modules/otp/OneTimePin.js';

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  pinHandler = (pin) => {
    this.setState({
      otp: pin,
    });
    console.log('Pin handler', this.state.otp);
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.OTPContainer}>
          <View style={styles.OTPTextContainer}>
            <Text style={styles.OTPTextStyle}>
              Please type the one time pass code sent to 00000000000
            </Text>
          </View>
          <View style={styles.OTPContainer}>
            <OneTimePin fieldCount={6} pinHandler={this.pinHandler} />
          </View>
          <TouchableOpacity style={styles.ResendContainer} onPress={() => {}}>
            <Text style={styles.ResendTextStyle}>
              Didn't receive a code? Click to resend.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {}}
            buttonText="Cancel"
            buttonColor="#FF0000"
            buttonWidth="48%"
            buttonHeight={50}
            fontSize={16}
            textColor="#FFFFFF"
          />
          <CustomButton
            onPress={() => {}}
            buttonText="Continue"
            buttonColor="#22B173"
            buttonWidth="48%"
            buttonHeight={50}
            fontSize={16}
            textColor="#FFFFFF"
            borderRadius={100}
          />
        </View>
      </View>
    );
  }
}

export default OTP;
