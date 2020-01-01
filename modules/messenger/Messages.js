import React, { Component } from 'react';
import Style from './Style.js';
import { TextInput, View, Image, TouchableHighlight, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
import Config from 'src/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Review from './templates/Review.js';
import AddRequirements from './templates/AddRequirements.js';
import Transfer from './templates/Transfer.js';
import SendRequirements from './templates/SendRequirements.js';
class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      selected: null,
      newMessage: null
    }
  }

  componentDidMount(){
    const { messengerGroup, user } = this.props.state;
    if(messengerGroup != null && user != null){
      this.retrieve();
    }
  }

  retrieve = () => {
    const { user, messengerGroup } = this.props.state;
    const { setMessagesOnGroup } = this.props;
    let parameter = {
      condition: [{
        value: messengerGroup.id,
        column: 'messenger_group_id',
        clause: '='
      }],
      sort: {
        'created_at': 'ASC'
      }
    }
    this.setState({isLoading: true});
    Api.request(Routes.messengerMessagesRetrieve, parameter, response => {
      console.log(response.data)
      this.setState({isLoading: false});
      setMessagesOnGroup({
        messages: response.data,
        groupId: messengerGroup.id
      })
    });
  }

  _image = (item) => {
    return (
      <View style={{
        flexDirection: 'row' 
      }}>
        {
          item.files.map((imageItem, imageIndex) => {
            return (
              <Image source={{uri: Config.BACKEND_URL  + imageItem.url}} style={Style.messageImage} key={imageIndex}/>
            );
          })
        }
      </View>
    );
  }

  _headerRight = (item) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image source={{uri: Config.BACKEND_URL  + item.account.profile.url}} style={[BasicStyles.profileImageSize]}/>
        <Text style={{
          lineHeight: 30,
          paddingLeft: 10
        }}>{item.account.username}</Text>
      </View>
    );
  }

  _headerLeft = (item) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
        <Text style={{
          lineHeight: 30,
          paddingRight: 10
        }}>{item.account.username}</Text>
        <Image source={{uri: Config.BACKEND_URL  + item.account.profile.url}} style={[BasicStyles.profileImageSize]}/>
      </View>
    );
  }

  _rightTemplate = (item) => {
    return (
      <View>
        {this._headerRight(item)}
        <Text style={Style.dateText}>{item.created_at_human}</Text>
        {
          item.message != null && (
            <Text style={Style.messageTextRight}>{item.message}</Text>
          )
        }
        {
          item.payload == 'image' && (this._image(item))
        }
      </View>
    );
  }

  _leftTemplate = (item) => {
    return (
      <View>
        {this._headerLeft(item)}
        <Text style={Style.dateText}>{item.created_at_human}</Text>
        {
          item.message != null && (
            <Text style={Style.messageTextLeft}>{item.message}</Text>
          )
        }
        {
          item.payload == 'image' && (this._image(item))
        }
      </View>
    );
  }

  _conversations = (item) => {
    const { user } = this.props.state;
    return (
      <View>
        <View style={{
          alignItems: 'flex-end'
        }}>
          {item.account_id == user.id && (this._leftTemplate(item))}
        </View>
        <View style={{
          alignItems: 'flex-start' 
        }}>
          {item.account_id != user.id && (this._rightTemplate(item))}
        </View>
      </View>
    );
  }

  _templates = () => {
    const { messengerGroup, user } = this.props.state;
    return (
      <View>
        {messengerGroup.rating == null && messengerGroup.request.status == 2 && (
          <Review refresh={() => this.retrieve()}></Review>
        )}
        { 
          messengerGroup.account_id == user.id &&
          messengerGroup.request.type == 1 &&
          messengerGroup.request.status < 2 && (
            <AddRequirements></AddRequirements>
          )
        }
        {
          messengerGroup.account_id == user.id &&
          messengerGroup.request.type < 3 &&
          messengerGroup.request.status < 2 &&
          messengerGroup.validations.transfer_status === 'approved' && (
            <Transfer
              text={
                'Validations are complete, click transfer to proceed:'
              }
            ></Transfer>
          )
        }
        {
          messengerGroup.account_id != user.id &&
          messengerGroup.request.type == 3 &&
          messengerGroup.request.status < 2 && (
            <Transfer
              text={
                'If you receive the money from other peer already, then you can continue to transfer and complete the thread.'
              }
            ></Transfer>
          )
        }
        {
          messengerGroup.account_id != user.id &&
          messengerGroup.request.type == 1 &&
          messengerGroup.request.status < 2 && (
            <SendRequirements></SendRequirements>
          )
        }
      </View>
    );
  }

  _footer = () => {
    return (
      <View style={{
        flexDirection: 'row' 
      }}>
        <TouchableOpacity
          onPress={() => console.log('image')} 
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%'
          }}
          >
          <FontAwesomeIcon
            icon={ faImage }
            size={BasicStyles.iconSize}
            style={{
              color: Color.primary
            }}
            />
        </TouchableOpacity>
        <TextInput
          style={Style.formControl}
          onChangeText={(newMessage) => this.setState({newMessage})}
          value={this.state.newMessage}
          placeholder={'Type your message here ...'}
        />
        <TouchableOpacity
          onPress={() => console.log('image')} 
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%'
          }}
          >
          <FontAwesomeIcon
            icon={ faPaperPlane }
            size={BasicStyles.iconSize}
            style={{
              color: Color.primary
            }}
            />
        </TouchableOpacity>
      </View>
    );
  }

  _flatList = () => {
    const { selected } = this.state;
    const { user, messagesOnGroup } = this.props.state;
    return (
      <View>
        {
          messagesOnGroup != null && user != null && (
            <FlatList
              data={messagesOnGroup.messages}
              extraData={selected}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              style={{
                marginBottom: 50
              }}
              renderItem={({ item, index }) => (
                <View>
                  {this._conversations(item)}
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
    const { isLoading } = this.state;
    const { messengerGroup, user } = this.props.state;
    return (
      <View style={Style.MainContainer}>
        <ScrollView 
          style={[Style.ScrollView, {
            marginBottom: messengerGroup != null && messengerGroup.request.status < 2 ? 50 : 0
          }]}
          onScroll={(event) => {
            if(event.nativeEvent.contentOffset.y <= 0) {
              if(this.state.isLoading == false){
                this.retrieve()
              }
            }
          }}
          >
          <View style={Style.MainContainer}>
            {this._flatList()}
          </View>
          <View>
            {messengerGroup != null && user !== null && (this._templates())}
          </View>
          {isLoading ? <Spinner mode="overlay"/> : null }
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          borderTopColor: Color.lightGray,
          borderTopWidth: 1
        }}>
          {messengerGroup != null && messengerGroup.request.status < 2 && (this._footer())}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setMessagesOnGroup: (messagesOnGroup) => dispatch(actions.setMessagesOnGroup(messagesOnGroup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
