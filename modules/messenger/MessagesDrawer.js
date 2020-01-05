import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Messages from 'modules/messenger/Messages.js';
import { Color, BasicStyles, Helper } from 'common';
import { UserImage } from 'components';
import { connect } from 'react-redux';
import Config from 'src/config.js';
import Currency from 'services/Currency.js';

class HeaderOptions extends Component {
  constructor(props){
    super(props);
  }

  back = () => {
    this.props.navigationProps.navigate('drawerStack');
  };

  _card = () => {
    const { messengerGroup } = this.props.state;
    return (
      <View>
        {
          messengerGroup != null && (
          <View style={{flexDirection: 'row'}}>
            <UserImage  user={messengerGroup.title} color={Color.white}/>
            <Text style={{
              color: Color.white,
              lineHeight: 30,
              paddingLeft: 1,
              width: '30%'
            }}>{messengerGroup.title.username}</Text>
            <Text style={{
              color: Color.white,
              lineHeight: 30,
              textAlign: 'right',
              width: '60%',
              marginLeft: -1
            }}>
              {Helper.showRequestType(messengerGroup.request.type)} - 
              {' ' + Currency.display((messengerGroup.request.amount + messengerGroup.peer.charge).toFixed(2), messengerGroup.request.currency)}
            </Text>
          </View>
        )}
      </View>
    );
  }
  
  
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.back.bind(this)} 
          >
          <FontAwesomeIcon
            icon={ faChevronLeft }
            size={BasicStyles.iconSize}
            style={BasicStyles.iconStyle}/>
        </TouchableOpacity>
        {
          this._card()
        }
      </View>
    );
  }
}


const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    logout: () => dispatch(actions.logout())
  };
};

let HeaderOptionsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderOptions);

const MessagesStack = createStackNavigator({
  messagesScreen: {
    screen: Messages, 
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      drawerLabel: null,
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: '#fff',
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesStack);