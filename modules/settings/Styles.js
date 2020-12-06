import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SettingsContainer: {
    justifyContent: 'flex-start',
    height: '100%',
    marginTop: 70,
  },
  SettingTileContainer: {
    left: -5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  SettingTextContainer: {},
  SettingTextStyle: {},
  IconContainer: {
    paddingRight: 10,
  },
});

export default styles;
