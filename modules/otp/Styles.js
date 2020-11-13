import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  OTPContainer: {
    marginTop: '10%',
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  OTPTextContainer: {
    paddingBottom: '1%',
    marginBottom: 0,
    width: '70%',
  },
  OTPTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  OTPFieldContainer: {
    width: '90%',
    height: 200,
  },
  ResendContainer: {
    paddingBottom: '90%',
    width: '70%',
  },
  ResendTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  ButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
  },
  CustomButtonContainer: {
    borderRadius: 10,
  },
  ButtonTextContainer: {
    paddingVertical: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    textAlign: 'center',
  },
});

export default styles;
