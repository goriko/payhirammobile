import React, {Component} from 'react';
import { Color } from 'common';
import {Text, View, StyleSheet, ScrollView, Switch} from 'react-native';
class NotificationSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      pin: true
    };
  }

  changeState(ndx){
    if(ndx == 0){
      this.setState({login: this.state.login? false: true})
    }else{
      this.setState({pin: this.state.pin? false: true})
    }
  }

  render() {
    return (
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: Color.gray, padding: 20}}>
            <View style={{flex: 1}}>
              <Text>Login</Text>
              <Text style={{fontSize: 10}}>Send me an email everytime there's a login with my account.</Text>
            </View>
            <Switch trackColor={{ false: "red", true: 'blue'}} thumbColor={'white'} onValueChange={() => this.changeState(0)} value={this.state.login}/>
          </View>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: Color.gray, padding: 20}}>
            <View style={{flex: 1}}>
              <Text>Account PIN</Text>
              <Text style={{fontSize: 10}}>Receive new PIN from email everytime there's a login with my account.</Text>
            </View>
            <Switch trackColor={{ false: "red", true: 'blue'}} thumbColor={'white'} onValueChange={() => this.changeState(1)} value={this.state.pin}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NotificationSettings;
