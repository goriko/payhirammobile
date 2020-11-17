import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faQrcode } from '@fortawesome/free-solid-svg-icons';
import Slider from 'components/Slider';
import { Color, BasicStyles } from 'common';
import Requests from 'modules/request';
import Dashboard from 'modules/dashboard';
import Messenger from 'modules/messenger';
import Notification from 'modules/notification';
import Profile from 'modules/profile';
import Settings from 'modules/settings';
import { Product, Marketplace, Checkout } from 'components';
import Billing from 'modules/profile/Billing.js';
import Circle from 'modules/circle/circleDrawer.js';
import OptionRight from './OptionRight';
import Style from './Style.js';
import { connect } from 'react-redux'

const width = Math.round(Dimensions.get('window').width);
class MenuDrawerStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: true,
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}></View>
    );
  }
}

class QRCode extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
        this.props.setQRCodeModal(true)
      }}>
        <View style={{ paddingRight: 8 }} >
          <FontAwesomeIcon icon={faQrcode} size={BasicStyles.iconSize+5} style={{ color: 'black' , marginRight:10 }} />
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {
    setQRCodeModal: (isVisible) => {
      dispatch(actions.setQRCodeModal({ isVisible: isVisible }))
    },
  };
};

const QRCodeButton = connect(mapStateToProps, mapDispatchToProps)(QRCode)
const Requests_StackNavigator = createStackNavigator({
  Requests: {
    screen: Requests,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
  Circle: {
    screen: Circle,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Dashboard_StackNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <OptionRight navigationProps={navigation} />,
      headerRight: (
        <QRCodeButton />
      ),
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
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
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
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
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
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
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Marketplace_StackNavigator = createStackNavigator({
  Marketplace: {
    screen: Marketplace,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Product_StackNavigator = createStackNavigator({
  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Checkout_StackNavigator = createStackNavigator({
  Checkout: {
    screen: Checkout,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Billing_StackNavigator = createStackNavigator({
  Billing: {
    screen: Billing,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Settings_StackNavigator = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: Style.headerStyle,
      headerTintColor: Color.primary,
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Requests: {
      screen: Requests_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Requests',
      },
    },
    Circle: {
      screen: Requests_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Circle',
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
    Marketplace: {
      screen: Marketplace_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Marketplace',
      },
    },
    Product: {
      screen: Product_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Product',
      },
    },
    Checkout: {
      screen: Checkout_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Checkout',
      },
    },
    Billing: {
      screen: Billing_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Billing',
      },
    },
    Settings: {
      screen: Settings_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Settings',
      },
    },
  },
  {
    contentComponent: Slider,
  },
);

export default Drawer;
