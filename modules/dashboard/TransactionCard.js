import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './Styles';

class TransactionCard extends Component {
  render() {
    return (
      <View style={styles.TransactionCardContainer}>
        <View style={styles.DetailsContainer}>
          <View style={styles.DateTimeContainer}>
            <Text style={styles.DateTimeTextStyle}>August 9, 2015 5:00 PM</Text>
          </View>
          <View style={styles.DescriptionContainer}>
            <Text style={styles.DescriptionTextStyle}>This is a Test</Text>
          </View>
          <View style={styles.ViaContainer}>
            <Text style={styles.ViaTextStyle}>via ****561</Text>
          </View>
        </View>
        <View style={styles.AmountContainer}>
          <Text style={styles.AmountTextStyle}>+ PHP 200.00</Text>
        </View>
      </View>
    );
  }
}

export default TransactionCard;
