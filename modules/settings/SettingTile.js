import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

class SettingTile extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.SettingTileContainer}
        onPress={() => this.props.onPress()}>
        <View style={styles.SettingTextContainer}>
          <Text style={styles.SettingTextStyle}>{this.props.settingText}</Text>
        </View>
        <View style={styles.IconContainer}>
          <FontAwesomeIcon icon={faChevronRight} size={30} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  SettingTextContainer: {},
  SettingTextStyle: {
    fontSize: 18,
  },
  IconContainer: {},
});

export default SettingTile;
