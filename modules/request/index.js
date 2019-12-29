import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, TouchableHighlight, Text, ScrollView, FlatList} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner, Rating, CustomModal } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
import Config from 'src/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
class Requests extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      selected: null,
      connectModal: false,
      connectSelected: null
    }
  }

  componentDidMount(){
    this.retrieve();
  }

  retrieve = () => {
    const { user } = this.props.state;
    const { setUserLedger } = this.props;
    let parameter = {
      account_id: user.id,
      offset: 0,
      limit: 10,
      sort: {
        column: 'created_at',
        value: 'desc'
      },
      value: '%',
      column: 'created_at',
      type: user.account_type
    }
    this.setState({isLoading: true});
    Api.request(Routes.requestRetrieve, parameter, response => {
      this.setState({isLoading: false});
      console.log('requests', response.data)
      setUserLedger(response.ledger)
      if(response.data.length > 0){
        this.setState({data: response.data})
      }else{
        this.setState({data: null})
      }
    });
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
                    <Image source={{uri: Config.BACKEND_URL  + item.account.profile.url}} style={[BasicStyles.profileImageSize]}/>
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
  _header = (item) => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image source={{uri: Config.BACKEND_URL  + item.account.profile.url}} style={[BasicStyles.profileImageSize]}/>
          <Text style={{
            color: Color.primary,
            lineHeight: 30,
            paddingLeft: 10,
            width: '40%'
          }}>{item.account.username}</Text>
          <Text style={{
            color: Color.primary,
            fontWeight: 'bold',
            textAlign: 'right',
            lineHeight: 30,
            alignItems: 'flex-end',
            width: '50%'
          }}>{Currency.display(item.amount, item.currency)}</Text>
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
                marginBottom: 50
              }}
              renderItem={({ item, index }) => (
                <View>
                  {this._header(item)}
                  {this._subHeader(item)}
                  {this._body(item)}
                  <View>
                    <Rating ratings={item.rating}></Rating>
                  </View>
                  {item.account_id != user.id && (this._footer(item))}
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
    const { isLoading, connectModal, connectSelected } = this.state;
    return (
      <ScrollView 
        style={Style.ScrollView}
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setUserLedger: (userLedger) => dispatch(actions.setUserLedger(userLedger))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests);
