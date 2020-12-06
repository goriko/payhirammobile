import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import styles from 'modules/otp/Styles.js';
import {BasicStyles} from 'common';
class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          BasicStyles.btn,
          {
            backgroundColor: this.props.buttonColor,
            width: this.props.buttonWidth,
            height: this.props.buttonHeight,
          },
        ]}
        onPress={() => {
          this.props.onPress();
        }}>
        <View style={styles.ButtonTextContainer}>
          <Text style={[BasicStyles.titleText, {color: this.props.textColor}]}>
            {this.props.buttonText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
