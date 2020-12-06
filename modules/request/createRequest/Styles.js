import {StyleSheet} from 'react-native';
import {BasicStyles} from 'common';
const styles = StyleSheet.create({
  CreateRequestContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '95%',
    height: '100%',
  },
  FillInDetailsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#D5D5D5',
    width: '100%',
    paddingTop: 38,
    paddingBottom: 12,
  },
  FillInDetailsTextStyle: {
    fontWeight: 'bold',
    fontSize: BasicStyles.titleText.fontSize,
  },
  SelectFulfillmentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  SelectFulfillmentTextStyle: {
    fontSize: BasicStyles.standardFontSize,
    textAlign: 'left',
  },
  FulfillmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputContainer: {
    paddingLeft: 12,
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    borderColor: '#E0E0E0',
    borderRadius: BasicStyles.btn.borderRadius,
  },
  AmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '5%',
    marginBottom: 15,
  },
  AmountTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  AmountTextStyle: {
    fontSize: BasicStyles.standardFontSize,
  },
  AmountDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  AmountDetailsStyle: {
    fontSize: BasicStyles.standardFontSize,
    fontWeight: 'bold',
  },
  ChangesContainer: {
    paddingVertical: '5%',
    justifyContent: 'center',
  },
  ChangesTextStyle: {
    fontSize: BasicStyles.standardFontSize,
  },
  TotalContainer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#D5D5D5',
    paddingBottom: 10,
  },
  ButtonContainer: {
    height: 50,
    borderRadius: BasicStyles.btn.borderRadius,
    justifyContent: BasicStyles.btn.justifyContent,
    alignItems: BasicStyles.btn.alignItems,
  },
  ButtonTextStyle: {
    fontSize: BasicStyles.titleText.fontSize,
    color: '#ffffff',
    textAlign: 'center',
  },
  CardContainer: {
    marginTop: '2%',
    height: 180,
    width: 180,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: '1.5%',
  },
  FulfillmentTypeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40%',
    paddingBottom: '10%',
  },
  FulfillmentTypeTextStyle: {
    fontSize: BasicStyles.standardFontSize,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  FulfillmentDescription: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  FulfillmentDescriptionTextStyle: {
    fontSize: BasicStyles.standardFontSize,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
