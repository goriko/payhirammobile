import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CreateTicketContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: '7%',
    marginTop: '4%',
  },
  InputContainer: {
    width: '100%',
    paddingBottom: '5%',
  },
  TicketButtonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    paddingBottom: 10,
  },
  CustomButtonContainer: {
    borderRadius: 10,
  },
  ButtonTextContainer: {
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    textAlign: 'center',
  },
  TicketInputInputContainer: {
    marginTop: '2%',
    width: '100%',
  },
  TicketInputTitleContainer: {},
  TicketInputTitleTextStyle: {
    fontSize: 15,
  },
  TextInputContainer: {
    height: 60,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
  },
});

export default styles;
