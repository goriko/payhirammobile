export default {
  company: 'Increment Technologies',
  APP_NAME: '@Payhiram_',
  APP_NAME_BASIC: 'Payhiram',
  DrawerMenu: [{
    title: 'Requests',
    route: 'Requests'
  }, {
    title: 'Dashboard',
    route: 'Dashboard'
  }, {
    title: 'Threads',
    route: 'Threads'
  }, {
    title: 'Profile',
    route: 'Profile'
  }],
  currency: [{
    title: 'Philippine Peso',
    value: 'PHP'
  }],
  payhiramCharges: {
    percentage: .20
  },
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