import React, { Component } from 'react';
import Style from './Style.js';
import { TextInput, View, Image, TouchableHighlight, Text, ScrollView} from 'react-native';
import  { Picker, FlatList, TouchableOpacity } from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner, Rating, CustomModal, Empty, UserImage } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
import Config from 'src/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
class Requests extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      selected: null,
      connectModal: false,
      connectSelected: null,
      searchValue: null,
      searchType: null,
      filterOptions: [{
        title: 'Amount',
        value: 'amount'
      }, {
        title: 'Location',
        value: 'location'
      }]
    }
  }

  componentDidMount(){
    this.retrieve();
  }

  redirect = (route) => {
    this.props.navigation.navigate(route);
  }

  retrieve = () => {
    const { user, searchParameter } = this.props.state;
    const { setUserLedger } = this.props;
    if(user == null){
      return;
    }
    let parameter = {
      account_id: user.id,
      offset: 0,
      limit: 10,
      sort: {
        column: 'created_at',
        value: 'desc'
      },
      value: searchParameter == null ? '%' : searchParameter.value,
      column: searchParameter == null ? 'created_at' : searchParameter.column,
      type: user.account_type
    }
    this.setState({isLoading: true});
    Api.request(Routes.requestRetrieve, parameter, response => {
      this.setState({isLoading: false});
      console.log('requests', response.data)
      setUserLedger(response.ledger)
      if(response.data !=  null){
        this.setState({data: response.data})
      }else{
        this.setState({data: null})
      }
    });
  }

  search = () => {
    const { setSearchParameter } = this.props;
    let parameter = {
      column: this.state.searchType,
      value: this.state.searchValue
    }
    setSearchParameter(parameter);
    this.retrieve()
  }

  bookmark = (item) => {
    const { user } = this.props.state;
    let parameter = {
      account_id: user.id,
      request_id: item.id
    }
    this.setState({isLoading: true});
    Api.request(Routes.bookmarkCreate, parameter, response => {
      this.retrieve()
    });
  }

  retrieveThread = (id) => {
    const { user } = this.props.state;
    const { setMessengerGroup } = this.props;
    let parameter = {
      condition: [{
        value: id,
        column: 'id',
        clause: '='
      }],
      account_id: user.id
    }
    Api.request(Routes.customMessengerGroupRetrieveByParams, parameter, response => {
      this.setState({isLoading: true});
      if(response.data != null){
        setMessengerGroup(response.data);
        this.props.navigation.navigate('messagesStack')
      }
    });
  }

  acceptPeer = (item, request) => {
    const { user } = this.props.state;
    let parameter = {
      id: item.id,
      status: 'approved'
    }
    this.setState({isLoading: true});
    Api.request(Routes.requestPeerUpdate, parameter, response => {
      if(response.data){
        // create a thread
        let messengerParams = {
          member: item.account_id,
          title: request.code,
          payload: request.id,
          creator: user.id
        }
        Api.request(Routes.customMessengerGroupCreate, messengerParams, messengerResponse => {
          if(messengerResponse.data > 0){
            this.retrieveThread(messengerResponse.data)
          }
        });
      }
    });
  }

  connectRequest = (item) => {
    console.log('connectRequest')
    this.setState({
      connectSelected: item
    });
    setTimeout(() => {
      this.setState({connectModal: true})
    }, 500)
  }

  connectAction = (flag) => {
    if(flag == false){
      this.setState({connectModal: false, connectSelected: null})
    }else{
      // process charges
      this.setState({connectModal: false, connectSelected: null})
      this.retrieve()
    }
  }



  _search = () => {
    const { searchParameter } = this.props.state;
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          borderBottomColor: Color.primary,
          borderBottomWidth: 1
        }}>
         <Picker selectedValue={this.state.searchType}
          onValueChange={(searchType) => this.setState({searchType})}
          style={[BasicStyles.pickerStyleCreate, {
            width: '40%',
            transform: [{scaleX: 0.77}, {scaleY: 0.77}],
            textAlign: 'left',
            left: -15,
            marginRight: 0,
            paddingRight: 0
          }]}
          itemStyle={{fontSize: 11}}
          >
            {
              this.state.filterOptions.map((item, index) => {
                return (
                  <Picker.Item
                  key={index}
                  label={item.title} 
                  value={item.value}
                  />
                );
              })
            }
          </Picker>
        <TextInput
          style={{
            height: 50,
            width: '50%',
            marginLeft: 0,
            paddingLeft: 0,
            left: -30
          }}
          onChangeText={(searchValue) => this.setState({searchValue})}
          value={this.state.searchValue}
          placeholder={'Find something here...'}
        />
        <TouchableOpacity
          onPress={() => this.search()} 
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%'
          }}
          >
          <FontAwesomeIcon
            icon={ faSearch }
            size={BasicStyles.iconSize}
            style={{
              color: Color.primary
            }}
            />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  _peers = (peers, request) => {
    const { user } = this.props.state;
    return (
      <View>
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: Color.primary
          }}>
          <Text style={{
            paddingTop: 10,
            paddingBottom: 10,
            color: Color.primary
          }}>Peer request list</Text>
        </View>
        <View>
          {
            peers.peers.map((item, index) => {
              return (
                <View>
                  {this._header(item, 'rating')}
                  <View style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10
                  }}>
                    <View style={{
                      width: '50%'
                    }}>
                      <Text style={Style.text}>
                        Processing fee
                      </Text>
                      <Text style={{
                        fontWeight: 'bold',
                        color: Color.primary
                      }}>
                        {Currency.display(item.charge, item.currency)}
                      </Text>
                    </View>
                    {
                      peers.status === false && (
                        <View style={{
                          width: '50%',
                          alignItems: 'flex-end'
                        }}>
                            <TouchableHighlight
                              onPress={() => {this.acceptPeer(item, request)}}
                              underlayColor={Color.gray}
                              style={[Style.btn, {backgroundColor: Color.primary}]}
                            >
                              <Text style={{
                                color: Color.white
                              }}>Accept</Text>
                            </TouchableHighlight>
                        </View>
                      )
                    }
                    {
                      peers.status === false && (
                        <View style={{
                          width: '50%',
                          alignItems: 'flex-end'
                        }}>
                            <TouchableHighlight
                              onPress={() => {this.viewThread(item)}}
                              underlayColor={Color.gray}
                              style={[Style.btn, {backgroundColor: Color.secondary}]}
                            >
                              <Text style={{
                                color: Color.white
                              }}>View Thread</Text>
                            </TouchableHighlight>
                        </View>
                      )
                    }
                  </View>
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }

  _footer = (item) => {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          marginBottom: 10}}>
          <View style={{
            width: '50%'
          }}>
            <TouchableHighlight
              onPress={() => {this.bookmark(item)}}
              style={[Style.btn, {backgroundColor: Color.warning}]}
              underlayColor={Color.gray}
              >
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                {
                  item.bookmark == true && (
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        color: Color.white,
                        marginRight: 10
                      }}
                    />
                  )
                }
                <Text style={{
                  color: Color.white
                }}>Bookmark</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={{
            width: '50%'
          }}>
              <TouchableHighlight
                onPress={() => {this.connectRequest(item)}}
                underlayColor={Color.gray}
                style={[Style.btn, {backgroundColor: Color.primary}]}
              >
                <Text style={{
                  color: Color.white
                }}>Connect</Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    ); 
  }

  _body = (item) => {
    return (
      <View>
        <Text style={[Style.text, {
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: 'justify'
        }]}>{item.reason}</Text>
        {
          item.images != null && (
            <View>
              {
                item.images.map((image, imageIndex) => {
                  return (
                    <View></View>
                  );
                })
              }
            </View>
          )
        }
      </View>
    );
  }

  _subHeader = (item) => {
    return (
      <View>
        <Text style={{
          color: Color.primary,
        }}>{Helper.showRequestType(item.type)}</Text>
        <Text style={Style.text}>Posted on {item.created_at_human}</Text>
        <Text style={Style.text}>{item.location.route + ', ' + item.location.locality + ', ' + item.location.country}</Text>
        <Text style={Style.text}>Needed on {item.needed_on_human}</Text>
      </View>
    );
  }

  _header = (item, type) => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <UserImage user={item.account}/>
          <Text style={{
            color: Color.primary,
            lineHeight: 30,
            paddingLeft: 10,
            width: '40%'
          }}>{item.account.username}</Text>
          <View style={{
            width: '50%'
          }}>
            {
              type == 'amount' && (
                <Text style={{
                  color: Color.primary,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  lineHeight: 30,
                  width: '100%'
                }}>{Currency.display(item.amount, item.currency)}</Text>
              )
            }
            {
              type == 'rating' && (
                <Rating ratings={item.rating}></Rating>
              )
            }
          </View>
        </View>
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
      <View>
        {
          data != null && user != null && (
            <FlatList
              data={data}
              extraData={selected}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              style={{
                marginBottom: 100
              }}
              renderItem={({ item, index }) => (
                <View>
                  {this._header(item, 'amount')}
                  {this._subHeader(item)}
                  {this._body(item)}
                  <View>
                    <Rating ratings={item.rating}></Rating>
                  </View>
                  {item.account_id != user.id && (this._footer(item))}
                  {item.account_id == user.id && item.peers.peers != null && (this._peers(item.peers, item))}
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
    const { isLoading, connectModal, connectSelected, data } = this.state;
    return (
      <View>
        {/*this._search()*/}
        <ScrollView 
          style={[Style.ScrollView, {
            height: '100%'
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
            {data == null && (<Empty />)}
          </View>
        </ScrollView>
          <TouchableOpacity
              style={Style.floatingButton}
              onPress={() => this.redirect('createRequestStack')}
            >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: Color.white
              }}
              size={BasicStyles.iconSize}
            />
          </TouchableOpacity>
          {isLoading ? <Spinner mode="overlay"/> : null }
          <CustomModal
            visible={connectModal}
            title={'Charges'}
            payload={'charges'}
            actionLabel={{
              yes: 'Continue',
              no: 'Cancel'
            }}
            data={connectSelected}
            action={(flag) => this.connectAction(flag)}
          ></CustomModal>
      </View>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setUserLedger: (userLedger) => dispatch(actions.setUserLedger(userLedger)),
    setSearchParameter: (searchParameter) => dispatch(actions.setSearchParameter(searchParameter)),
    setMessengerGroup: (messengerGroup) => dispatch(actions.setMessengerGroup(messengerGroup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests);
