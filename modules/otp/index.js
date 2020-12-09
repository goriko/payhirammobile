import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from 'modules/otp/CustomButton.js';
import styles from 'modules/otp/Styles.js';
import OneTimePin from 'modules/otp/OneTimePin.js';
import {Routes, Color, Helper, BasicStyles} from 'common';
import {Spinner} from 'components';
import {connect} from 'react-redux';
import Api from '../../services/api';

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '000000',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.generateOTP();
  }

  pinHandler = (pin) => {
    this.setState({
      otp: pin,
    });
    console.log('Pin handler', this.state.otp);
  };

  generateOTP = () => {
    const {user} = this.props.state;
    console.log('USERRRRRRRR', user.account_information.account_id);
    let parameters = {
      account_id: user.account_information.account_id,
    };
    this.setState({isLoading: true});
    Api.request(
      Routes.notificationSettingOtp,
      parameters,
      (data) => {
        this.setState({isLoading: false});
      },
      (error) => {
        if (error) {
          this.setState({isLoading: false});
        }
      },
    );
  };

  validateOTP = () => {
    const {user} = this.props.state;
    const {setIsValidOtp, sendRequest} = this.props;
    let parameters = [
      {
        condition: [
          {
            column: 'code',
            value: this.state.otp,
            clause: '=',
          },
          {
            column: 'account_id',
            value: user.account_information.account_id,
            clause: '=',
          },
        ],
      },
    ];
    Api.request(
      Routes.notificationSettingsRetrieve,
      parameters,
      (data) => {
        console.log('OTP DATA', data);
        setIsValidOtp(true);
        this.props.navigation.pop();
      },
      (error) => {
        if (error) {
          console.log('ERROR OTP', error);
          alert('Invalid OTP');
          setIsValidOtp(false);
          this.props.navigation.pop();
        }
      },
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        {this.state.isLoading ? <Spinner mode="overlay" /> : null}
        <View style={styles.OTPContainer}>
          <View style={styles.OTPTextContainer}>
            <Text style={[BasicStyles.standardFontSize, {textAlign: 'center'}]}>
              Please type the one time pass code sent to 00000000000
            </Text>
          </View>
          <View style={styles.OTPInputContainer}>
            <OneTimePin
              fieldCount={6}
              pinHandler={this.pinHandler}
              pin={this.state.otp}
            />
          </View>
          <TouchableOpacity
            style={styles.ResendContainer}
            onPress={this.generateOTP}>
            <Text style={[BasicStyles.standardFontSize, {textAlign: 'center'}]}>
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
            onPress={this.validateOTP}
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

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    setIsValidOtp: (isValidOtp) => {
      dispatch(actions.setIsValidOtp(isValidOtp));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);
