import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CardContainer: {
    marginTop: '2%',
    height: '25%',
    width: '98%',
    borderRadius: 10,
    justifyContent: 'flex-start',
  },
  AvailableBalanceTextStyle: {
    textAlign: 'left',
    fontSize: 13,
    color: '#FFFFFF',
  },
  AvailableBalanceContainer: {
    paddingTop: 23,
    paddingLeft: 18,
  },
  BalanceTextStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  BalanceContainer: {
    paddingVertical: 36,
    paddingHorizontal: 61,
  },
  CurrentBalanceTextStyle: {
    textAlign: 'left',
    fontSize: 13,
    color: '#FFFFFF',
  },
  CurrentBalanceContainer: {
    paddingBottom: '10%',
    paddingLeft: 18,
  },
  DashboardSubheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.1,
    width: '100%',
    paddingTop: 38,
    paddingBottom: 18,
    paddingHorizontal: '2.5%',
    elevation: 1,
  },
  TransactionHistoryContainer: {},
  TransactionHistoryTextStyle: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  ViewMoreContainer: {},
  ViewMoreTextStyle: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  TransactionCardContainer: {
    marginTop: 17,
    width: '95%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.1,
    borderRadius: 3,
  },
  DetailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: '3%',
  },
  DateTimeTextStyle: {
    fontSize: 11,
  },
  DateTimeContainer: {
    paddingTop: '10%',
    paddingLeft: '3%',
  },
  DescriptionTextStyle: {
    fontSize: 13,
  },
  DescriptionContainer: {
    paddingLeft: '3%',
  },
  ViaTextStyle: {
    fontSize: 11,
  },
  ViaContainer: {
    paddingBottom: '10%',
    paddingLeft: '3%',
  },
  AmountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '3%',
  },
  AmountTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22B173',
  },
});

export default styles;
