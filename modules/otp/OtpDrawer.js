import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import OTP from 'modules/otp';
import {connect} from 'react-redux';
import {BasicStyles} from 'common';
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    this.props.navigationProps.navigate('drawerStack');
  };
  render() {
    return (
      <View
        style={{
          height: 45,
          width: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            this.back();
          }}
          style={{
            width: '16.5%',
            alignItems: 'center',
            marginLeft: '0.5%',
          }}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.iconSize}
            style={{color: '#3F0050'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    logout: () => dispatch(actions.logout()),
  };
};

const OtpStack = createStackNavigator({
  otpScreen: {
    screen: OTP,
    navigationOptions: ({navigation}) => ({
      title: 'OTP Code',
      drawerLabel: 'OTP',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
        height: 80,
        elevation: 0,
      },
      headerTintColor: '#4c4c4c',
      headerTitleStyle: {
        fontSize: 20,
      },
    }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpStack);
