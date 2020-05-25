import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faBell, faMoneyBillWave, faStoreAlt, faPlay, faCaretSquareRight, faBars} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Color, BasicStyles } from 'common';

import { connect } from 'react-redux';
const width = Math.round(Dimensions.get('window').width);
class NavigationDrawerStructureRight extends Component {
  constructor(props){
    super(props);
  }
  goTo = (screen) => {
    this.props.navigationProps.navigate(screen)
  }


  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigationProps.dispatch(navigateAction);
  }
  
  render() {
    const { messenger, notifications } = this.props.state;;
    return (
      <View style={{ flexDirection: 'row', width: width }}> 

        <TouchableOpacity
          onPress={this.toggleDrawer.bind(this)}
          style={{
            width: '16.5%',
            alignItems: 'center',
            marginLeft: '0.5%'
          }}
          >
          {/*Donute Button Image */}
          <FontAwesomeIcon icon={ faBars } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
        </TouchableOpacity>

        <View style={{
          width: '16.5%',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => this.navigateToScreen('Requests')}>
            <View style={{ flexDirection: 'row'}}>
              <FontAwesomeIcon icon={ faMoneyBillWave } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '16.5%',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => this.navigateToScreen('Dashboard')}>
            <View style={{ flexDirection: 'row'}}>
              <FontAwesomeIcon icon={ faStoreAlt } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '16.5%',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => this.navigateToScreen('Dashboard')}>
            <View style={{ flexDirection: 'row'}}>
              <FontAwesomeIcon icon={ faCaretSquareRight } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '16.5%',
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => this.navigateToScreen('Messenger')}>
            <View style={{ flexDirection: 'row'}}>
              <FontAwesomeIcon icon={ faEnvelope } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
              {
                messenger && messenger.unread > 0 && Platform.OS == 'android' &&
                (
                  <Text style={{
                    color: Color.white,
                    backgroundColor: Color.danger,
                    borderRadius: 2,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 4,
                    paddingBottom: 4,
                    fontSize: 11,
                    marginLeft: -20
                  }}>{messenger.unread}</Text>
                )
              }
              {
                messenger && messenger.unread > 0 && Platform.OS == 'ios' &&
                (
                  <View style={{
                    backgroundColor: Color.danger,
                    borderRadius: 5,
                    fontSize: 11,
                    marginLeft: -20
                  }}>
                    <Text
                      style={{
                        color: Color.white,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        lineHeight: 20,
                        textAlign: 'center'
                      }}>{messenger.unread}</Text>
                  </View>
                )
              }
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '16.5%',
          alignItems: 'center',
          marginRight: '0.5%'
        }}>
          <TouchableOpacity onPress={() => this.navigateToScreen('Notification')}>
            <View style={{ flexDirection: 'row'}}>
              <FontAwesomeIcon icon={ faBell } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
              {
                notifications && notifications.unread > 0 &&
                (
                  <Text style={{
                    color: Color.white,
                    backgroundColor: Color.danger,
                    borderRadius: 2,
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 4,
                    paddingBottom: 4,
                    fontSize: 11,
                    marginLeft: -20
                  }}>{notifications.unread}</Text>
                )
              }
              {
                notifications && notifications.unread > 0 && Platform.OS == 'ios' &&
                (
                  <View style={{
                    ackgroundColor: Color.danger,
                    borderRadius: 5,
                    fontSize: 11,
                    marginLeft: -20
                  }}>
                    <Text
                      style={{
                        color: Color.white,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        lineHeight: 20,
                        textAlign: 'center'
                      }}>{notifications.unread}</Text>
                  </View>
                )
              }
            </View>
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