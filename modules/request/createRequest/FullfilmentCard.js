import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import styles from './Styles';
import {BasicStyles} from 'common';
class FullfilmentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.CardContainer, {backgroundColor: this.props.cardColor}]}>
        <View style={styles.FullfilmentTypeContainer}>
          <Text
            style={[
              styles.FullfilmentTypeTextStyle,
              {fontSize: BasicStyles.titleText.fontSize},
            ]}>
            {this.props.fullfilmentType}
          </Text>
        </View>
        <View style={styles.FullfilmentDescription}>
          <Text
            style={[
              styles.FullfilmentDescriptionTextStyle,
              {fontSize: BasicStyles.titleText.fontSize},
            ]}>
            {this.props.fullfilmentDescription}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FullfilmentCard;
