import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import styles from './Styles';
import {BasicStyles} from 'common';
class FulfillmentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.CardContainer, {backgroundColor: this.props.cardColor}]}
        onPress={() => {
          this.props.handleSelect(this.props.index);
        }}>
        <View style={styles.FulfillmentTypeContainer}>
          <Text
            style={[
              styles.FulfillmentTypeTextStyle,
              {fontSize: BasicStyles.titleText.fontSize},
            ]}>
            {this.props.fulfillmentType}
          </Text>
        </View>
        <View style={styles.FulfillmentDescription}>
          <Text
            style={[
              styles.FulfillmentDescriptionTextStyle,
              {fontSize: BasicStyles.titleText.fontSize},
            ]}>
            {this.props.fulfillmentDescription}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FulfillmentCard;
