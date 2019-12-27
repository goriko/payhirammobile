import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, Text} from 'react-native';
import { Routes, Color, Helper } from 'common';
class Notifications extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={Style.MainContainer}>
        <View style={Style.TextContainer}>
          <Text>Notifications</Text>
        </View>
      </View>
    );
  }
}
export default Notifications;