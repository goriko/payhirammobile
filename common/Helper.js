import Color from './Color.js';
import { faEdit, faComments, faCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export default {
  company: 'Increment Technologies',
  APP_NAME: '@Payhiram_',
  APP_NAME_BASIC: 'Payhiram',
  APP_EMAIL: 'support@payhiram.ph',
  APP_WEBSITE: 'www.payhiram.increment.ltd',
  APP_HOST: 'com.payhiram',
  DrawerMenu: [{
    title: 'Requests',
    route: 'Requests'
  }, {
    title: 'My Wallet',
    route: 'Dashboard'
  }, {
    title: 'Products & Installment',
    route: 'Marketplace'
  }, {
    title: 'Rentals',
    route: 'Dashboard'
  }, {
    title: 'Messages',
    route: 'Messenger'
  }, {
    title: 'Profile',
    route: 'Profile'
  }],
  currency: [{
    title: 'Philippine Peso',
    value: 'PHP'
  }],
  request: {
    MINIMUM: 1000
  },
  MAXIMUM_DEPOSIT: 500000,
  MAXIMUM_WITHDRAWAL: 500000,
  payhiramCharges: {
    percentage: .20
  },
  fulfillmentTypes: [{
    value: 1,
    label: 'Send',
    description: 'Allow other peer to process your transaction when you want to send money to your family, friends or to businesses.',
    money_type: 'Cash'
  }, {
    value: 2,
    label: 'Withdrawal',
    description: 'Allow other peer to process your withdrawals.',
    money_type: 'Cash'
  }, {
    value: 3,
    label: 'Deposit',
    description: 'Allow other peer to process your deposits.',
    money_type: 'Wallet'
  }, {
    value: 4,
    label: 'Bills and Payments',
    description: 'Don\'t have time and want to pay your bills? Allow other peer to fulfil your bills.',
    money_type: 'Cash'
  }],
  pusher: {
    broadcast_type: 'pusher',
    channel: 'payhiram',
    notifications: 'App\\Events\\Notifications',
    messages: 'App\\Events\\Message',
    messageGroup: 'App\\Events\\MessageGroup',
    systemNotification: 'App\\Events\\SystemNotification',
    typing: 'typing'
  },
  tutorials: [
    {
      key: 1,
      title: 'Welcome to PayHiram!',
      text: 'Sending cash in a new and convenient way! In Payhiram, we have partners to fulfill your cash needed in any locations you want. Start sending today!',
      icon: null,
      image: require('assets/logo.png'),
      colors: [Color.primary, Color.lightGray]
    },
    {
      key: 2,
      title: 'First, create  or post a request',
      text: 'To post a request, click the + button at the bottom of requests page.',
      icon: faEdit,
      image: null,
      colors: [Color.primary, Color.lightGray]
    },
    {
      key: 3,
      title: 'Second, use the messenger thread',
      text: 'Once a different user will connect to your request, a messenger thread notification will pop-up. Click the thread notification to contact with your peer using the messenger. You can ask for the ID, Photo, and Signature (only on mobile app) for confirmation of completion to your request',
      icon: faComments,
      image: null,
      colors: [Color.primary, Color.lightGray]
    },
    {
      key: 4,
      title: 'Lastly, transfer of funds and review',
      text: 'If your request has been completed, other peer will transfer the funds. You can rate your peer and review transaction.',
      icon: faPaperPlane,
      image: null,
      colors: [Color.primary, Color.lightGray]
    },
    {
      key: 5,
      title: 'Congratulations!',
      text: 'You are good to go! Enjoy your stay!',
      icon: faCheck,
      image: null,
      colors: [Color.primary, Color.lightGray]
    },
  ],
  payments: [{
    title: 'UnionBank of the Philippines'
  }, {
    title: 'Chinabank Corporation'
  }],
  authorize: 'PIN',
  ecommerce: {
    inventoryType: 'inventory'
  },
  checkoutOptions: [{
    title: 'POST TO REQUEST',
    description: 'LET OUR PARTNERS PAY FOR YOU, THEN PAY THEM LATER',
    route: 'createRequestStack'
  }, {
    title: 'PROCEED WITH INSTALLMENT',
    description: 'AGREE THE TERMS OF THE SELLER',
    route: 'Checkout'
  }, {
    title: 'PROCEED TO CHECKOUT',
    description: 'PURCHASE ITEM(S) DIRECTLY',
    route: 'Checkout'
  }],
  paymentMethods: [{
    title: 'COD',
    description: 'Cash on develivery'
  }, {
    title: 'MY WALLET',
    description: 'Payhiram Wallet'
  }],
  showRequestType(type){
    switch(parseInt(type)){
      case 1: return 'Send'
      case 2: return 'Withdrawal'
      case 3: return 'Deposit'
      case 4: return 'Bills and Paymets'
      case 101: return 'Lending'
      case 102: return 'Installment'
    }
  },
  validateEmail(email){
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/
    if(reg.test(email) === false){
      return false
    }else{
      return true
    }
  }
}