export default {
  display(amount, currency){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    })
    return formatter.format(amount)
  }
}