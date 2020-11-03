import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import styles from './Styles';

class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.ButtonContainer,
          {backgroundColor: this.props.buttonColor, width: this.props.width},
        ]}>
        <Text style={[styles.ButtonTextStyle]}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
