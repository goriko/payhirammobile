import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Platform, Dimensions} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faBell,
  faMoneyBillWave,
  faStoreAlt,
  faPlay,
  faCaretSquareRight,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {faCopy} from '@fortawesome/free-regular-svg-icons';
import {Color, BasicStyles} from 'common';

import {connect} from 'react-redux';
const width = Math.round(Dimensions.get('window').width);
class NavigationDrawerStructureRight extends Component {
  constructor(props) {
    super(props);
  }
  goTo = (screen) => {
    this.props.navigationProps.navigate(screen);
  };

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigationProps.dispatch(navigateAction);
  };

  render() {
    const {messenger, notifications} = this.props.state;
    return (
      <View style={{flexDirection: 'row', width: width}}>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: '#3F0050',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={this.toggleDrawer.bind(this)}
            style={{
              width: '16.5%',
              alignItems: 'center',
              marginLeft: '0.5%',
            }}>
            {/*Donute Button Image */}
            <FontAwesomeIcon
              icon={faBars}
              size={BasicStyles.iconSize}
              style={{color: '#FFFFFF'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    removeProduct: () => dispatch(actions.removeProduct()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationDrawerStructureRight);
