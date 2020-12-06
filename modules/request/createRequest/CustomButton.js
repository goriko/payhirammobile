import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import styles from './Styles';
import {BasicStyles} from 'common';
class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.ButtonContainer,
          {backgroundColor: this.props.buttonColor, width: this.props.width},
        ]}
        onPress={() => {
          console.log('Submitt');
          this.props.onPress();
        }}>
        <Text style={[styles.ButtonTextStyle]}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
