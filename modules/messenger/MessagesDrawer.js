import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Messages from 'modules/messenger/Messages.js';
import { Color, BasicStyles } from 'common';
import { connect } from 'react-redux';
import Config from 'src/config.js';

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
      <View >
        {
          messengerGroup != null && (
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: Config.BACKEND_URL  + messengerGroup.title.profile.url}} style={[BasicStyles.profileImageSize]}/>
            <Text style={{
              color: Color.white,
              lineHeight: 30,
              paddingLeft: 10
            }}>{messengerGroup.title.username} - ****{messengerGroup.thread.substring(16, 32)}</Text>
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