import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Notifications from 'modules/notification';
import { Color, BasicStyles } from 'common';

class HeaderOptions extends Component {
  constructor(props){
    super(props);
  }
  back = () => {
    this.props.navigationProps.navigate('drawerStack');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon icon={ faChevronLeft } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const NotificationStack = createStackNavigator({
  notificationScreen: {
    screen: Notifications, 
    navigationOptions: ({ navigation }) => ({
      title: 'Notifications',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      drawerLabel: 'Notifications',
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    })
  }
})

export default NotificationStack;