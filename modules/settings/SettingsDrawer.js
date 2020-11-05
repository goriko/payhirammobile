import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQrcode} from '@fortawesome/free-solid-svg-icons';
import Settings from 'modules/settings';
import {NavigationActions} from 'react-navigation';
import {BasicStyles} from 'common';
import {connect} from 'react-redux';

class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Settings',
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

const SettingsStack = createStackNavigator({
  settingsScreen: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      drawerLabel: 'Settings',
      headerStyle: {
        backgroundColor: 'white',
        height: 100,
      },
      headerTintColor: '#4c4c4c',
    }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsStack);
