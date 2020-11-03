import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import styles from './Styles';

class FullfilmentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.CardContainer, {backgroundColor: this.props.cardColor}]}>
        <View style={styles.FullfilmentTypeContainer}>
          <Text style={styles.FullfilmentTypeTextStyle}>
            {this.props.fullfilmentType}
          </Text>
        </View>
        <View style={styles.FullfilmentDescription}>
          <Text style={styles.FullfilmentDescriptionTextStyle}>
            {this.props.fullfilmentDescription}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FullfilmentCard;
