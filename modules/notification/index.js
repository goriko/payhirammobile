import React, { Component } from 'react';
import Style from './Style.js';
import { View, Text, ScrollView, FlatList, TouchableHighlight} from 'react-native';
import {NavigationActions} from 'react-navigation';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
import { Empty } from 'components';
class Notifications extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View style={BasicStyles.Separator}/>
    );
  };

  viewNotification = (notification) => {
    const { setSearchParameter } = this.props;
    setSearchParameter(null)
    let route = null;
    let searchParameter = null
    switch(notification.payload){
      case 'request':
        route = 'Requests';
        searchParameter = {
          column: 'id',
          value: notification.payload_value
        }
        break;
      case 'ledger':
        route = 'Dashboard'
        break;
      case 'thread':
        route = 'Messenger';
        searchParameter = {
          column: 'id',
          value: notification.payload_value
        }
        break;
    }
    setSearchParameter(searchParameter)
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    const { notifications } = this.props.state;
    const { selected } = this.state;
    return (
      <ScrollView style={Style.ScrollView}>
        <View style={Style.MainContainer}>
          {notifications == null || (notifications != null && notifications.notifications == null) && (<Empty />)}
          <FlatList
            data={notifications.notifications}
            extraData={selected}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item, index }) => (
              <View>
                <TouchableHighlight
                  onPress={() => {this.viewNotification(item)}}
                  underlayColor={Color.gray}
                  >
                  <View style={[Style.TextContainer, {
                    backgroundColor: notifications.unread > index ? Color.lightGray : Color.white
                  }]}>
                    <Text
                      style={[BasicStyles.titleText, {
                        paddingTop: 10
                      }]}>
                      {item.title}
                    </Text>
                    <Text
                      style={BasicStyles.normalText}>
                      {item.description}
                    </Text>

                    <Text
                      style={[BasicStyles.normalText, {
                        paddingBottom: 10
                      }]}>
                      {item.created_at_human}
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setSearchParameter: (searchParameter) => dispatch(actions.setSearchParameter(searchParameter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);