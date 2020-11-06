import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from 'modules/settings/Styles.js';

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

export default SettingTile;
