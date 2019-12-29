import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, TouchableHighlight, Text, ScrollView, FlatList} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
class Profile extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const { user } = this.props.state;
    return (
      <View style={Style.MainContainer}>
        {
          user != null && (
            <Text style={{
              paddingLef: 20,
              paddingRight: 20,
              textAlign: 'center',
              color: Color.primary
            }}>
              Hi {user.username}! You need to use the web for you to update your profile. 
              Just visit {Helper.APP_WEBSITE} and go to My Profiles option!
            </Text>
          )
        }
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setLedger: (ledger) => dispatch(actions.setLedger(ledger)),
    setUserLedger: (userLedger) => dispatch(actions.setUserLedger(userLedger))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
