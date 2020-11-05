import {createStackNavigator} from 'react-navigation-stack';
import Login from 'modules/basics/Login';
import ForgotPassword from 'modules/basics/ForgotPassword';
import Register from 'modules/basics/Register';
import Drawer from './Drawer';
import NotificationStack from 'modules/notification/Drawer.js';
import MessagesStack from 'modules/messenger/MessagesDrawer.js';
import LedgerStack from 'modules/dashboard/LedgerDrawer.js';
import CreateBorrowRequestStack from 'modules/request/CreateBorrowDrawer.js';
import LocationStack from 'components/Location/Drawer.js';
import CircleStack from 'modules/circle/circleDrawer.js';
import RequestStack from 'modules/request/requestUpdated/requestDrawer.js';
import DashboardStack from 'modules/dashboard/DashboardDrawer.js';
import CreateRequestStack from '../modules/request/createRequest/CreateRequestDrawer';
import AccountSettingsStack from 'modules/accountSettings/AccountSettingsDrawer.js';
import SettingsStack from 'modules/settings/SettingsDrawer.js';
// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: {screen: Login},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const ForgotPasswordStack = createStackNavigator(
  {
    forgotPasswordScreen: {screen: ForgotPassword},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const RegisterStack = createStackNavigator(
  {
    registerScreen: {screen: Register},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    loginStack: {screen: LoginStack},
    forgotPasswordStack: {screen: ForgotPasswordStack},
    registerStack: {screen: RegisterStack},
    drawerStack: {screen: Drawer},
    notificationStack: {screen: NotificationStack},
    messagesStack: {screen: MessagesStack},
    ledgerStack: {screen: LedgerStack},
    createRequestStack: {screen: CreateRequestStack},
    locationStack: {screen: LocationStack},
    createBorrowStack: {screen: CreateBorrowRequestStack},
    circleStack: {screen: CircleStack},
    requestStack: {screen: RequestStack},
    dashboardStack: {screen: DashboardStack},
    accountSettingsStack: {screen: AccountSettingsStack},
    settingsStack: {screen: SettingsStack},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
  },
);

export default PrimaryNav;
