import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './Styles';

class DashboardSubheader extends Component {
  render() {
    return (
      <View style={styles.DashboardSubheaderContainer}>
        <View style={styles.TransactionHistoryContainer}>
          <Text style={styles.TransactionHistoryTextStyle}>
            Transaction History
          </Text>
        </View>
        <TouchableOpacity style={styles.ViewMoreContainer} onPress={() => {}}>
          <Text style={styles.ViewMoreTextStyle}>View More</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DashboardSubheader;
