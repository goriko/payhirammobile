import React, {Component} from 'react';
import Style from 'modules/messenger/Style.js';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {BasicStyles, Color} from 'common';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import OtpModal from 'components/Modal/Otp.js';
const width = Math.round(Dimensions.get('window').width);
class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOtpModal: false
    }
  }

  transfer = (flag) => {
    this.setState({isOtpModal: false})
    if(flag == true){

    }
    console.log('transfer here')
  }

  render(){
    const { user, messengerGroup } = this.props.state;
    const { isOtpModal } = this.state;
    return (
      <View style={{
        marginBottom: 50
      }}>
        <View>
          <Text style={Style.templateText}>Hi {user.username}! {this.props.text}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10
          }}>
          <TouchableOpacity
            onPress={() => this.setState({isOtpModal: true})} 
            style={[Style.templateBtn, {
              width: '50%'
            }]}
            >
            <Text style={Style.templateText}>Transfer</Text>
          </TouchableOpacity>
        </View>
        <OtpModal
          visible={isOtpModal}
          title={'Authentication via OTP'}
          actionLabel={{
            yes: 'Authenticate',
            no: 'Cancel'
          }}
          action={(flag) => this.transfer(flag)}
        ></OtpModal>
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
)(Transfer);
