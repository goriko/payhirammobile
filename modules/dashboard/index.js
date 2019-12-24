import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, TouchableHighlight, Text} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
class Dashboard extends Component{
  constructor(props){
    super(props);
  }

  redirect = (route) => {
    this.props.navigation.navigate(route);
  }
  render() {
    return (
      <View style={Style.MainContainer}>
      </View>
    );
  }
}
export default Dashboard;