import React, { Component } from 'react';
import Style from './Style.js';
import { View, Text, ScrollView, FlatList, TouchableHighlight} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
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
    console.log('notification selected', notification)
  }

  render() {
    const { notifications } = this.props.state;
    const { selected } = this.state;
    return (
      <ScrollView style={Style.ScrollView}>
        <View style={Style.MainContainer}>
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
    logout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);