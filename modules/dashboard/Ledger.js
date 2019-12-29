import React, { Component } from 'react';
import Style from './Style.js';
import { View, Image, TouchableHighlight, Text, ScrollView, FlatList} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner } from 'components';
import Api from 'services/api/index.js';
import Currency from 'services/Currency.js';
import { connect } from 'react-redux';
class Ledger extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      selected: null
    }
  }

  componentDidMount(){
    const { user } = this.props.state;
    if(user != null){
      this.retrieve();
    }
  }

  redirect = (route) => {
    this.props.navigation.navigate(route)
  }


  retrieve = () => {
    const { user } = this.props.state;
    const { setLedger, setUserLedger } = this.props;
    let parameter = {
      account_id: user.id,
      offset: 0,
      limit: 50,
      sort: {
        column: 'created_at',
        value: 'desc'
      },
      value: '%',
      column: 'created_at'
    }
    this.setState({isLoading: true});
    Api.request(Routes.ledgerSummaryRetrieve, parameter, response => {
      this.setState({isLoading: false, data: response.data});
    });
  }


  redirect = (route) => {
    this.props.navigation.navigate(route);
  }
  

  
  FlatListItemSeparator = () => {
    return (
      <View style={BasicStyles.Separator}/>
    );
  };

  _summary = () => {
    const { selected, data } = this.state;
    return (
      <View>
        <FlatList
          data={data}
          extraData={selected}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          style={{
            marginBottom: 50
          }}
          renderItem={({ item, index }) => (
            <View>
              <TouchableHighlight
                onPress={() => {this.viewLedger(item)}}
                underlayColor={Color.gray}
                >
                <View style={[Style.TextContainer, {
                  backgroundColor: Color.white
                }]}>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <Text
                      style={[Style.titleTextSummary, {
                        paddingTop: 10,
                        width: '60%'
                      }]}>
                      {item.created_at_human}
                    </Text>
                    <Text
                      style={[Style.titleTextSummary, {
                        paddingTop: 10,
                        width: '40%',
                        fontWeight: 'bold',
                        color: item.amount > 0 ? Color.primary : Color.danger,
                        textAlign: 'right'
                      }]}>
                      {Currency.display(item.amount, item.currency)}
                    </Text>
                  </View>
                  <Text
                    style={Style.normalText}>
                    {item.description}
                  </Text>

                  <Text
                    style={[Style.normalText, {
                      paddingBottom: 10
                    }]}>
                    Transaction ID: {item.payload_value}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  render() {
    const { isLoading, data } = this.state;
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
          {data != null && (this._summary())}
        </View>
        {isLoading ? <Spinner mode="overlay"/> : null }
      </ScrollView>
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
)(Ledger);
