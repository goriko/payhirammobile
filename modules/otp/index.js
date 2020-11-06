import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from 'modules/otp/CustomButton.js';
import {Dimensions} from 'react-native';
const height = Math.round(Dimensions.get('window').height);
class OTP extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.OTPContainer}>
          <View style={styles.OTPTextContainer}>
            <Text style={styles.OTPTextStyle}>
              Please type the one time pass code sent to 00000000000
            </Text>
          </View>
          <OTPInputView
            pinCount={6}
            style={styles.OTPFieldContainer}
            codeInputFieldStyle={{borderRadius: 10}}
          />
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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  OTPContainer: {
    marginTop: '10%',
    marginBottom: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  OTPTextContainer: {
    paddingBottom: '1%',
    marginBottom: 0,
    width: '70%',
  },
  OTPTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  OTPFieldContainer: {
    width: '90%',
    height: 200,
  },
  ResendContainer: {
    width: '70%',
  },
  ResendTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  ButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
  },
});

export default OTP;
