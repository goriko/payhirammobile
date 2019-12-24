import Color from './Color';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
  formControl: {
    height: 50,
    borderColor: Color.gray,
    borderWidth: 1,
    width: width - 40,
    paddingLeft: 10,
    marginBottom: 20
  },
  btn: {
    height: 50,
    backgroundColor: Color.primary,
    width: width - 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPrimary: {
    backgroundColor: Color.primary
  },
  btnSecondary: {
    backgroundColor: Color.secondary
  },
  btnWarning: {
    backgroundColor: Color.warning
  },
  textWhite: {
    color: Color.white
  }
}