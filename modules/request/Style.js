import { Color } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
  ScrollView: {
    padding: 10
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: Color.normalGray
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  Separator: {
    height: 0.5,
    width: width,
    backgroundColor: Color.lightGray
  },
  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',                                          
    bottom: 70,                                                    
    right: 20,
    height: 70,
    backgroundColor: Color.secondary,
    borderRadius: 100,
    color: Color.white
  },
  textFloatingBtn: {
    color: Color.white
  }
}