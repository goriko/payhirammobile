import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  OTPContainer: {
    marginTop: '10%',
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '90%',
  },
  OTPInputContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  OTPTextContainer: {
    paddingBottom: '1%',
    marginBottom: 0,
    width: '75%',
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
    width: '75%',
    marginTop: '10%',
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
