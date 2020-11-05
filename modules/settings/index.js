import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SettingTile from 'modules/settings/SettingTile.js';
import navigation from 'modules/settings/Routes.js';

class Settings extends Component {
  render() {
    return (
      <View>
        {navigation.map(({title, route, index}) => {
          return (
            <SettingTile
              key={index}
              settingText={title}
              onPress={() => {
                this.props.navigation.navigate(route);
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default Settings;
