import {createStackNavigator} from 'react-navigation-stack';
import Scanner from './index.js';
const qrCodeScannerStack = createStackNavigator(
    {
      scannerScreen: {screen: Scanner},
    },
    {
      headerMode: 'none',
      navigationOptions: {},
    }
  );
  
export default qrCodeScannerStack;