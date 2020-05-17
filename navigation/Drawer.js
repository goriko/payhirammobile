import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slider from 'components/Slider';
import { Color, BasicStyles } from 'common';
import Requests from 'modules/request';
import Dashboard from 'modules/dashboard';
import Messenger from 'modules/messenger';
import Notification from 'modules/notification';
import Profile from 'modules/profile';
import OptionRight from './OptionRight';
class MenuDrawerStructure extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginState: true
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.state.loginState === true && 
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <FontAwesomeIcon icon={ faBars } size={BasicStyles.iconSize} style={BasicStyles.iconStyle}/>
          </TouchableOpacity>
        }
        
      </View>
    );
  }
}
 
const Requests_StackNavigator = createStackNavigator({
  Requests: {
    screen: Requests,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Dashboard_StackNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Notification_StackNavigator = createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});


const Messenger_StackNavigator = createStackNavigator({
  Messenger: {
    screen: Messenger,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Profile_StackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator({
  Requests: {
    screen: Requests_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Requests',
    },
  },
  Dashboard: {
    screen: Dashboard_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
  Messenger: {
    screen: Messenger_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Messages',
    },
  },
  Profile: {
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  Notification: {
    screen: Notification_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notification',
    },
  },
}, {
  contentComponent: Slider
});

export default Drawer;