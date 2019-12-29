import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faBell} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Color, BasicStyles } from 'common';

import { connect } from 'react-redux';
class NavigationDrawerStructureRight extends Component {
  constructor(props){
    super(props);
  }
  goTo = (screen) => {
    this.props.navigationProps.navigate(screen)
  }

  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigationProps.dispatch(navigateAction);
  }
  
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity onPress={() => this.navigateToScreen('Messenger')}>
            {/*Donute Button Image */}
            <FontAwesomeIcon icon={ faEnvelope } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.goTo('notificationStack')}>
            <FontAwesomeIcon icon={ faBell } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
          </TouchableOpacity>   
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    removeProduct: () => dispatch(actions.removeProduct())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(NavigationDrawerStructureRight);