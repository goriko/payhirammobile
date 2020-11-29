import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class AddressTile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.AddressTileContainer,
          {backgroundColor: this.props.backgroundColor},
        ]}
        onPress={() => {
          this.props.onPress(this.props.index);
        }}>
        <View style={styles.AddressTypeContainer}>
          <Text
            style={[
              styles.AddressTypeTextStyle,
              {color: this.props.fontColor},
            ]}>
            {this.props.addressType}
          </Text>
        </View>
        <View style={styles.AddressContainer}>
          <Text
            style={[styles.AddressTextStyle, , {color: this.props.fontColor}]}>
            {this.props.address}
          </Text>
        </View>
        <View style={styles.CountryContainer}>
          <Text
            style={[styles.CountryTextStyle, , {color: this.props.fontColor}]}>
            {this.props.country}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  AddressTileContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
    paddingLeft: 20,
    elevation: 1,
    borderBottomWidth: 0.5,
    borderColor: '#E8E8E8',
  },
  AddressTypeContainer: {},
  AddressTypeTextStyle: {},
  AddressContainer: {},
  AddressTextStyle: {
    fontSize: 15,
  },
  CountryContainer: {},
  CountryTextStyle: {},
});

export default AddressTile;
