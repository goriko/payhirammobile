import React, {Component} from 'react';
import Style from 'modules/messenger/Style.js';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {BasicStyles, Color, Routes} from 'common';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import OtpModal from 'components/Modal/Otp.js';
import Api from 'services/api/index.js';
const width = Math.round(Dimensions.get('window').width);
class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOtpModal: false,
      blockedFlag: false,
      otpData: null,
      errorMessage: null
    }
  }

  transfer = () => {
    this.setState({isOtpModal: false})
    const { messengerGroup, user} = this.props.state;
    let parameter = {
      code: messengerGroup.thread,
      account_id: user.id,
      messenger_group_id: messengerGroup.id
    }
    this.props.onLoading(true);
    Api.request(Routes.requestManageByThread,  parameter, response => {
      this.props.onLoading(false);
      this.props.onFinished();
    })
  }

  updateOtp = () => {
    const { user } = this.props.state;
    let parameter = {
      account_id: user.id
    }
    this.props.onLoading(true);
    Api.request(Routes.notificationSettingOtp, parameter, response => {
      this.setState({otpData: response})
      this.props.onLoading(false);
      if(response.error == null){
        this.setState({blockedFlag: false, errorMessage: null})
      }else{
        this.setState({blockedFlag: true})
        this.setState({errorMessage: response.error})
      }
      setTimeout(() => {
        this.setState({isOtpModal: true})
      }, 500)
    });
  }

  render(){
    const { user, messengerGroup } = this.props.state;
    const { isOtpModal, blockedFlag, errorMessage } = this.state;
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
            onPress={() => this.updateOtp()} 
            style={[Style.templateBtn, {
              width: '50%'
            }]}
            >
            <Text style={Style.templateText}>Transfer</Text>
          </TouchableOpacity>
        </View>
        <OtpModal
          visible={isOtpModal}
          title={blockedFlag == false ? 'Authentication via OTP' : 'Blocked Account'}
          actionLabel={{
            yes: 'Authenticate',
            no: 'Cancel'
          }}
          onCancel={() => this.setState({isOtpModal: false})}
          onSuccess={() => this.transfer()}
          onResend={() => this.updateOtp()}
          error={errorMessage}
          blockedFlag={blockedFlag}
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
