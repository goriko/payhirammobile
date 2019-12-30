export default {
  company: 'Increment Technologies',
  APP_NAME: '@Payhiram_',
  APP_NAME_BASIC: 'Payhiram',
  APP_WEBSITE: 'www.payhiram.increment.ltd',
  DrawerMenu: [{
    title: 'Requests',
    route: 'Requests'
  }, {
    title: 'Dashboard',
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
  }],
  showRequestType(type){
    switch(parseInt(type)){
      case 1: return 'Send'
      case 2: return 'Withdrawal'
      case 3: return 'Deposit'
      case 101: return 'Lending'
      case 102: return 'Installment'
    }
  }
}