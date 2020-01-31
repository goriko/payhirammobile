
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'modules/basics/Login';
import ForgotPassword from 'modules/basics/ForgotPassword';
import Register from 'modules/basics/Register';
import Drawer from './Drawer';
import NotificationStack from 'modules/notification/Drawer.js';
import MessagesStack from 'modules/messenger/MessagesDrawer.js';
import LedgerStack from 'modules/dashboard/LedgerDrawer.js';
import CreateRequestStack from 'modules/request/CreateDrawer.js';
import LocationStack from 'components/Location/Drawer.js';
import DepositStack from 'modules/dashboard/DepositDrawer.js';
import WithdrawalStack from 'modules/dashboard/WithdrawalDrawer.js';

// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: Login }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})

// Forgot Password stack
const ForgotPasswordStack = createStackNavigator({
  forgotPasswordScreen: { screen: ForgotPassword }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})

// Forgot Password stack
const RegisterStack = createStackNavigator({
  registerScreen: { screen: Register }
}, {
  headerMode: 'none',
  navigationOptions: {
  }
})


// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  forgotPasswordStack: { screen: ForgotPasswordStack},
  registerStack: { screen: RegisterStack},
  drawerStack: { screen: Drawer },
  notificationStack: { screen: NotificationStack},
  messagesStack: { screen: MessagesStack},
  ledgerStack: { screen: LedgerStack},
  createRequestStack: { screen: CreateRequestStack},
  locationStack: { screen: LocationStack},
  depositStack: { screen: DepositStack},
  withdrawalStack: { screen: WithdrawalStack}
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav;