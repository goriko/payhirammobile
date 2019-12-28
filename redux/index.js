import AsyncStorage from '@react-native-community/async-storage';
import Data from 'services/Data';
import { Helper } from 'common';

const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_LEDGER: 'SET_LEDGER',
  SET_USER_LEDGER: 'SET_USER_LEDGER',
  nav: null
}

export const actions = {
  login: (user, token) => {
    return { type: types.LOGIN, user, token };
  },
  logout() {
    return { type: types.LOGOUT };
  },
  setNotifications(unread, notifications){
    return { type: types.SET_NOTIFICATIONS, unread, notifications};
  }, 
  setMessenger(unread, messages){
    return { type: types.SET_MESSAGES, unread, messages};
  },
  setLedger(ledger){
    return { type: types.SET_LEDGER, ledger};
  },
  setUserLedger(userLedger){
    return { type: types.SET_USER_LEDGER, userLedger};
  }
};

const initialState = {
  token: null,
  user: null,
  notifications: null,
  messenger: null,
  ledger: null,
  userLedger: null,
  nav: null
}

storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`${Helper.APP_NAME}${key}`, value)
  } catch (e) {
    // saving error
  }
}

const reducer = (state = initialState, action) => {
  const { type, user, token } = action;
  const { messages, unread } = action;
  switch (type) {
    case types.LOGOUT:
      AsyncStorage.clear();
      return Object.assign({}, initialState);
    case types.LOGIN:
      storeData('token', token);
      Data.setToken(token)
      return { ...state, user, token };
    case types.SET_NOTIFICATIONS:
      let notifications = {
        unread,
        notifications:action.notifications
      }
      console.log('notifications', notifications);
      return {
        ...state,
        notifications
      }
    case types.SET_MESSAGES:
      let messenger = {
        unread,
        messages
      }
      console.log('messenger', messenger);
      return {
        ...state,
        messenger
      }
    case types.SET_USER_LEDGER: 
      let userLedger = {
        currency: 'PHP',
        amount: action.userLedger
      }
      return {
        ...state,
        userLedger
      }
    case types.SET_LEDGER:
      return {
        ...state,
        ledger: action.ledger
      }
    default:
      return {...state, nav: state.nav};
  }
}
export default reducer;