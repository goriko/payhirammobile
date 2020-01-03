import React, {Component} from 'react';
import Style from 'modules/messenger/Style.js';
import {Text, View, TouchableOpacity} from 'react-native';
import CreateRating from 'components/Rating/Create.js';
import {BasicStyles, Color} from 'common';
import { connect } from 'react-redux';
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    }
  }

  handler = (flag) => {
    this.setState({isModal: false})
    if(flag == true){
      this.props.refresh()
    }
  }


  render(){
    const { user, messengerGroup } = this.props.state;
    const { isModal } = this.state;
    return (
      <View>
        {
          messengerGroup.rating == null && (
            <View>
              <View>
                <Text style={Style.templateText}>Hi {user.username}! Please help {messengerGroup.title.username} by giving a review.</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ isModal: true})} 
                style={[Style.templateBtn, {
                  width: '50%',
                  marginLeft: '25%',
                  marginBottom: 50,
                  marginTop: 20
                }]}
                >
                <Text style={Style.templateText}>Submit review and rating</Text>
              </TouchableOpacity>
              <CreateRating
                visible={isModal}
                title={'Review'}
                actionLabel={{
                  yes: 'Submit',
                  no: 'Cancel'
                }}
                data={{
                  payload: 'profile',
                  payload_value: messengerGroup.title.id,
                  payload1: 'request',
                  payload_value1: messengerGroup.request.id
                }}
                action={(flag) => this.handler(flag)}
                ></CreateRating>
              </View>
          )
        }
        <View style={{
          marginBottom: 50
        }}>
          <Text style={{
            color: Color.normalGray,
            textAlign: 'center',
          }}>Transaction completed!</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
