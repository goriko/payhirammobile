import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common'
import AccountSettingsInput from 'modules/accountSettings/AccountSettingsInput.js';
import AccountSettingsButton from 'modules/accountSettings/AccountSettingsButton.js';
import styles from 'modules/accountSettings/Styles.js';
import PasswordWithIcon from 'components/InputField/Password.js';

class AccountSettings extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  render() {
    let { user } = this.props;
    const Label = ({ label }) => {
      return (
        <View style={{
          textAlign: 'left',
          alignSelf: 'flex-start',

        }}>
          <Text style={{ marginBottom: 5 }}>{label}</Text>
        </View>)
    }

    return (
      <ScrollView style={{flex:1 , paddingTop:10}}>
        <View style={[styles.AccountSettingsContainer]}>
          <Label label={'Username'} />
          <TextInput
            style={BasicStyles.formControl}
            editable={false}
            value={user.username}
          />
          <Label label={'Email'} />
          <TextInput
            style={BasicStyles.formControl}
            value={this.state.email || user.email || ''}
            placeholder={"Enter Email address"}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <TouchableHighlight
            style={[BasicStyles.btn, BasicStyles.btnSecondary]}
            onPress={() => { }}
            underlayColor={Color.gray}>
            <Text style={BasicStyles.textWhite}>
              Update Email
          </Text>
          </TouchableHighlight>
          <Label label={'Password'} />
          <PasswordWithIcon onTyping={(input) => this.setState({
            password: input
          })} />
          <Label label={'Confirm Password'} />
          <PasswordWithIcon onTyping={(input) => this.setState({
            confirmPassword: input
          })} />
          <TouchableHighlight
            style={[BasicStyles.btn, BasicStyles.btnSecondary]}
            onPress={() => { }}
            underlayColor={Color.gray}>
            <Text style={BasicStyles.textWhite}>
              Change Password
          </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(AccountSettings);
