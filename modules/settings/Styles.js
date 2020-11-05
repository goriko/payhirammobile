import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SettingsContainer: {
    justifyContent: 'flex-start',
    height: '100%',
  },
  SettingTileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: '3%',
    paddingHorizontal: '3%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  SettingTextContainer: {
    paddingLeft: '4%',
  },
  SettingTextStyle: {
    fontSize: 18,
  },
  IconContainer: {},
});

export default styles;
