import {StyleSheet} from 'react-native';
import {BasicStyles} from 'common';
const styles = StyleSheet.create({
  CreateRequestContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  FillInDetailsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#D5D5D5',
    width: '100%',
    paddingTop: 38,
    paddingBottom: 12,
    paddingHorizontal: '2.5%',
  },
  FillInDetailsTextStyle: {
    fontWeight: 'bold',
    fontSize: BasicStyles.titleText.fontSize,
  },
  SelectFullfilmentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingRight: '48%',
    paddingLeft: '4%',
  },
  SelectFullfilmentTextStyle: {fontSize: 15, textAlign: 'left'},
  FullfilmentContainer: {
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
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  AmountTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  AmountTextStyle: {
    fontSize: BasicStyles.titleText.fontSize,
  },
  AmountDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  AmountDetailsStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ChangesContainer: {
    paddingVertical: '5%',
    marginLeft: '5%',
    justifyContent: 'center',
  },
  ChangesTextStyle: {
    fontSize: 15,
  },
  TotalContainer: {
    width: '100%',
    borderWidth: 0.5,
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
  FullfilmentTypeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40%',
    paddingBottom: '10%',
  },
  FullfilmentTypeTextStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  FullfilmentDescription: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  FullfilmentDescriptionTextStyle: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
