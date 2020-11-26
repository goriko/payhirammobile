import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQrcode, faBars} from '@fortawesome/free-solid-svg-icons';
import TermsAndConditions from 'modules/termsAndConditions';
import {NavigationActions} from 'react-navigation';
import {BasicStyles} from 'common';
import {connect} from 'react-redux';

class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Terms and Conditions',
    });
    this.props.navigationProps.dispatch(navigateAction);
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faBars}
            size={BasicStyles.iconSize}
            style={BasicStyles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {};
};

const TermsAndConditionsStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: TermsAndConditions,
    navigationOptions: ({navigation}) => ({
      title: 'Terms And Conditions',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      drawerLabel: 'Terms And Conditions',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#4c4c4c',
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TermsAndConditionsStack);
