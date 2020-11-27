import {createStackNavigator} from 'react-navigation-stack';
import ViewProfile from './index.js';
const viewProfileStack = createStackNavigator(
    {
      profileScreen: {screen: ViewProfile},
    },
    {
      headerMode: 'none',
      navigationOptions: {},
    }
  );
  
export default viewProfileStack;