import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import AddressTile from 'modules/addLocation/AddressTile.js';
import styles from 'modules/addLocation/Style.js';
const dummyData = [
  {
    addressType: 'Home',
    address: '123 Road, Cebu City, Cebu',
    country: 'Philippines',
  },
  {
    addressType: 'Home',
    address: '123 Road, Cebu City, Cebu',
    country: 'Philippines',
  },
  {
    addressType: 'Home',
    address: '123 Road, Cebu City, Cebu',
    country: 'Philippines',
  },
];
class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAddress: 0,
    };
  }

  selectHandler = (index) => {
    this.setState({selectedAddress: index});
  };

  renderAddresses = () => {
    return dummyData.map((address, index) => {
      return (
        <AddressTile
          key={index}
          index={index}
          addressType={address.addressType}
          address={address.address}
          country={address.country}
          onPress={this.selectHandler}
          backgroundColor={
            this.state.selectedAddress === index ? '#22B173' : '#FFFFFF'
          }
          fontColor={
            this.state.selectedAddress === index ? '#FFFFFF' : '#000000'
          }
        />
      );
    });
  };

  redirect = (route) => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.AddLocationContainer}>
        {this.renderAddresses()}

        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={() => {
            this.redirect('locationWithMapStack');
          }}>
          <Text style={styles.ButtonTextStyle}>Add Address</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    // updateUser: (user) => dispatch(actions.updateUser(user)),
    setLocation: (location) => dispatch(actions.setLocation(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
