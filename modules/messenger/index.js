import React, { Component } from 'react';
import Style from './Style.js';
import { View, TouchableHighlight, Text, ScrollView, FlatList} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner, Empty, UserImage } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
import Config from 'src/config.js';

class Groups extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      selected: null,
      data: null
    }
  }

  componentDidMount(){
    const { user } = this.props.state;
    if(user != null){
      this.retrieve();
    }
  }

  retrieve = () => {
    const { user } = this.props.state;
    if(user == null){
      return
    }
    let parameter = {
      account_id: user.id,
      code: null
    }
    this.setState({isLoading: true});
    Api.request(Routes.customMessengerGroupRetrieve, parameter, response => {
      console.log(response.data)
      this.setState({isLoading: false, data: response.data});
    });
  }

  viewMessages = (item) => {
    const { setMessengerGroup } = this.props;
    console.log('message group', item);
    setMessengerGroup(item);
    setTimeout(() => {
      this.props.navigation.navigate('messagesStack');
    }, 500)
  }

  _card = (item) => {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {this.viewMessages(item)}}
          underlayColor={Color.lightGray}
          >
          <View>
            <View style={{flexDirection: 'row', marginTop: 5, paddingLeft: 10, paddingRight: 10}}>
              <UserImage user={item.title}/>
              <Text style={{
                color: Color.primary,
                lineHeight: 30,
                paddingLeft: 10,
                width: '30%'
              }}>{item.title.username}</Text>
              <Text style={{
                color: Color.primary,
                lineHeight: 30,
                paddingLeft: 10,
                fontWeight: 'bold',
                textAlign:'right',
                width: '60%'
              }}>
                {Currency.display((item.request.amount + item.peer.charge).toFixed(2), item.request.currency)}
              </Text>
            </View>
            <View style={{
              paddingLeft: 10,
              paddingRight: 10
            }}>
              <Text style={[Style.dateTextLeft, {
                color: item.request.status < 2 ? Color.danger : Color.normalGray,
                paddingBottom: 0
              }]}>{item.request.status < 2 ? 'Transaction is on going' : 'Transaction completed'}</Text>
            </View>
            <View style={{
              marginBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              flexDirection: 'row'
            }}>
              <Text style={[Style.dateTextLeft, {
                width: '40%',
                paddingTop: 2
              }]}>{item.created_at_human}</Text>
              <Text style={[Style.dateTextLeft, {
                width: '60%',
                textAlign: 'right',
                paddingTop: 2
              }]}>{Helper.showRequestType(item.request.type)} - {item.thread.substring(16, 32)}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  
  FlatListItemSeparator = () => {
    return (
      <View style={Style.Separator}/>
    );
  };

  _flatList = () => {
    const { data, selected } = this.state;
    const { user } = this.props.state;
    return (
      <View style={{
        width: '100%'
      }}>
        {
          data != null && user != null && (
            <FlatList
              data={data}
              extraData={selected}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              style={{
                marginBottom: 50
              }}
              renderItem={({ item, index }) => (
                <View>
                  {this._card(item)}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )
        }
      </View>
    );
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <ScrollView 
        style={Style.ScrollViewGroup}
        onScroll={(event) => {
          if(event.nativeEvent.contentOffset.y <= 0) {
            if(this.state.isLoading == false){
              this.retrieve()
            }
          }
        }}
        >
        <View stle={{
          flexDirection: 'row',
          width: '100%'
        }}>
          {this._flatList()}
        </View>
        {data == null && (<Empty refresh={true} onRefresh={() => this.retrieve()}/>)}
        {isLoading ? <Spinner mode="overlay"/> : null }
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setMessengerGroup: (messengerGroup) => dispatch(actions.setMessengerGroup(messengerGroup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
