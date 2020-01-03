import React, { Component } from 'react';
import Style from './Style.js';
import { TextInput, View, Image, TouchableHighlight, Text, ScrollView, FlatList, TouchableOpacity, Platform} from 'react-native';
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
import ImageModal from 'components/Modal/ImageModal.js';
import ImagePicker from 'react-native-image-picker';
class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      selected: null,
      newMessage: null,
      imageModalUrl: null,
      isImageModal: false,
      photo: null
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

  sendNewMessage = () => {
    const { messengerGroup, user} = this.props.state;
    if(messengerGroup == null || user == null || this.state.newMessage == null){
      return
    }
    let parameter = {
      messenger_group_id: messengerGroup.id,
      message: this.state.newMessage,
      account_id: user.id,
      status: 0,
      payload: 'text',
      payload_value: null
    }
    this.setState({isLoading: true});
    Api.request(Routes.messengerMessagesCreate, parameter, response => {
      this.setState({isLoading: false});
      if(response.data != null){
        const { updateMessagesOnGroup } = this.props;
        updateMessagesOnGroup(response.data);
        this.setState({newMessage: null})
      }
    });
  }

  sendImageWithoutPayload = (url) => {
    const { messengerGroup, user } = this.props.state;
    let parameter = {
      messenger_group_id: messengerGroup.id,
      message: null,
      account_id: user.id,
      status: 0,
      payload: 'image',
      payload_value: null,
      url: url
    }
    console.log('parameter', parameter)
    Api.request(Routes.mmCreateWithImageWithoutPayload, parameter, response => {
      this.setState({isLoading: false})
      this.retrieve()
    })
  }

  handleChoosePhoto = () => {
    const { user } = this.props.state;
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
        console.log('photo', response)
        let formData = new FormData();
        formData.append("file", {
          name: response.fileName,
          type: response.type,
          uri: Platform.OS == "android" ? response.uri : response.uri.replace("file://", "")
        });
        formData.append('file_url', response.fileName);
        formData.append('account_id', user.id);
        this.setState({isLoading: true})
        Api.upload(Routes.imageUploadUnLink, formData, imageResponse => {
          // add message
          console.log('response', imageResponse)
          if(imageResponse.data.data != null){
            this.sendImageWithoutPayload(imageResponse.data.data)
          }
        })
      }else{
        this.setState({ photo: null })
      }
    })
  }

  setImage = (url) => {
    this.setState({imageModalUrl: url})
    setTimeout(() => {
      this.setState({isImageModal: true})
    }, 500)
  }


  updateValidation = (item, status) => {
    const { messengerGroup, user } = this.props.state;
    let parameter = {
      id: item.id,
      status: status,
      messages: {
        messenger_group_id: messengerGroup.id,
        account_id: user.id
      }
    }
    this.setState({isLoading: true})
    Api.request(Routes.requestValidationUpdate, parameter, response => {
      this.setState({isLoading: false})
      this.retrieve()
    })
  }

  _image = (item) => {
    const { messengerGroup, user } = this.props.state;
    return (
      <View>
      {
        item.payload_value != null && (
          <Text style={[Style.messageTextRight, {
            backgroundColor: item.validations.status == 'approved' ? Color.primary : Color.danger
          }]}>{item.validations.payload} - {item.validations.status}</Text>
        )
      }
        <View style={{
          flexDirection: 'row',
          marginTop: 10
        }}>
          {
            item.files.map((imageItem, imageIndex) => {
              return (
                <TouchableOpacity
                  onPress={() => this.setImage(Config.BACKEND_URL  + imageItem.url)} 
                  style={Style.messageImage}
                  key={imageIndex}
                  >
                  <Image source={{uri: Config.BACKEND_URL  + imageItem.url}} style={Style.messageImage} key={imageIndex}/>
                </TouchableOpacity>
              );
            })
          }
        </View>
        {
          messengerGroup.account_id == user.id &&
          item != null && item.validations != null &&
          item.validations.status != 'approved' &&
          (
            <View style={{
              flexDirection: 'row',
              marginTop: 10
            }}>
              <View style={{
                  width: '45%',
                  height: 50,
                  marginRight: '5%'
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.updateValidation(item.validations, 'declined')
                  }} 
                  style={[Style.templateBtn, {
                    width: '100%',
                    height: 40,
                    borderColor: Color.danger
                  }]}
                  >
                  <Text style={[Style.templateText, {
                    color: Color.danger
                  }]}>Decline</Text>
                </TouchableOpacity>
              </View>
              <View style={{
                  width: '45%',
                  height: 50,
                  marginRight: '5%'
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.updateValidation(item.validations, 'approved')
                  }} 
                  style={[Style.templateBtn, {
                    width: '100%',
                    height: 40,
                    borderColor: Color.primary
                  }]}
                  >
                  <Text style={[Style.templateText, {
                    color: Color.primary
                  }]}>Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </View>
    );
  }

  _imageTest = (item) => {
    return (
      <View style={{
        flexDirection: 'row' 
      }}>
        <TouchableOpacity
          onPress={() => this.setImage(item.uri)} 
          style={Style.messageImage}
          >
          <Image source={{uri: item.uri}} style={Style.messageImage}/>
        </TouchableOpacity>
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
        <Text style={[Style.dateText, {
          textAlign: 'left'
        }]}>{item.created_at_human}</Text>
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
        <Text style={[Style.dateText, {
          textAlign: 'right'
        }]}>{item.created_at_human}</Text>
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
        {messengerGroup.request.status == 2 && (
          <Review refresh={() => this.retrieve()}></Review>
        )}
        { 
          messengerGroup.account_id == user.id &&
          messengerGroup.request.type == 1 &&
          messengerGroup.validations.complete_status == false &&
          messengerGroup.request.status < 2 && (
            <AddRequirements></AddRequirements>
          )
        }
        {
          messengerGroup.account_id == user.id &&
          messengerGroup.request.type == 1 &&
          messengerGroup.request.status < 2 &&
          messengerGroup.validations.transfer_status === 'approved' && (
            <Transfer
              text={
                'Validations are complete, click transfer to proceed:'
              }
              onLoading={(flag) => this.setState({
                isLoading: flag
              })}
              onFinished={() => {
                this.retrieve()
              }}
            ></Transfer>
          )
        }
        {
          messengerGroup.account_id != user.id &&
          messengerGroup.request.type == 3 &&
          messengerGroup.request.status < 2 && (
            <Transfer
              onLoading={(flag) => this.setState({
                isLoading: flag
              })}
              onFinished={() => {
                this.retrieve()
              }}
              text={
                'If you receive the money from other peer already, then you can continue to transfer and complete the thread.'
              }
            ></Transfer>
          )
        }
        {
          messengerGroup.account_id == user.id &&
          messengerGroup.request.type == 2 &&
          messengerGroup.request.status < 2 && (
            <Transfer
              onLoading={(flag) => this.setState({
                isLoading: flag
              })}
              onFinished={() => {
                this.retrieve()
              }}
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
            <SendRequirements 
              onLoading={(flag) => this.setState({
                isLoading: flag
              })}
              onFinished={() => {
                this.retrieve()
              }}
            ></SendRequirements>
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
          onPress={() => this.handleChoosePhoto()} 
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
          onPress={() => this.sendNewMessage()} 
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
    const { isLoading, isImageModal, imageModalUrl, photo } = this.state;
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
        <ImageModal
          visible={isImageModal}
          url={imageModalUrl}
          action={() => this.setState({isImageModal: false})}
        ></ImageModal>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setMessagesOnGroup: (messagesOnGroup) => dispatch(actions.setMessagesOnGroup(messagesOnGroup)),
    updateMessagesOnGroup: (message) => dispatch(actions.updateMessagesOnGroup(message)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
