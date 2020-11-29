import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faQrcode,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import AddPayment from './index.js';
import { NavigationActions } from 'react-navigation';
import { BasicStyles } from 'common';
import { connect } from 'react-redux';

class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'paymentMethodsStack',
    });
    this.props.navigationProps.dispatch(navigateAction);
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={30}
            style={{ color: '#572066' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {};
};

const AddPaymentStack = createStackNavigator({
  addPaymentScreen: {
    screen: AddPayment,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Payment Method',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      drawerLabel: 'Add Payment Method',
      headerStyle: {
        backgroundColor: 'white',
        height: 80,
        elevation: 0,
      },
      headerTintColor: '#4c4c4c',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPaymentStack);
