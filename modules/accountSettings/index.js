import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import AccountSettingsInput from 'modules/accountSettings/AccountSettingsInput.js';
import AccountSettingsButton from 'modules/accountSettings/AccountSettingsButton.js';
import styles from 'modules/accountSettings/Styles.js';
import PasswordWithIcon from 'components/InputField/Password.js';
import Api from 'services/api/index.js';
import {Spinner} from 'components';

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
  }

  updatePassword = () => {
    if (
      this.state.password != null &&
      this.state.password != '' &&
      this.state.confirmPassword != null &&
      this.state.confirmPassword != '' &&
      this.state.password === this.state.confirmPassword
    ) {
      const {user} = this.props;
      console.log('Update password user', user);
      let parameters = {
        id: user.account_information.account_id,
        password: this.state.password,
      };
      this.setState({isLoading: true});
      Api.request(
        Routes.accountUpdatePassword,
        parameters,
        (response) => {
          console.log('update password response', response);
          this.setState({isLoading: false});
          alert('Password updated!');
        },
        (error) => {
          console.log('update password error', error);
          this.setState({isLoading: false});
        },
      );
    } else {
      alert("Passwords don't match!");
    }
  };

  render() {
    let {user} = this.props;
    const Label = ({label}) => {
      return (
        <View
          style={{
            textAlign: 'left',
            alignSelf: 'flex-start',
          }}>
          <Text style={{marginBottom: 5}}>{label}</Text>
        </View>
      );
    };

    return (
      <ScrollView style={{flex: 1, paddingTop: 10}}>
        <View style={[styles.AccountSettingsContainer]}>
          {this.state.isLoading ? <Spinner mode="overlay" /> : null}
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
            placeholder={'Enter Email address'}
            onChange={(e) => this.setState({email: e.target.value})}
          />
          <TouchableHighlight
            style={[BasicStyles.btn, BasicStyles.btnSecondary]}
            onPress={() => {}}
            underlayColor={Color.gray}>
            <Text style={BasicStyles.textWhite}>Update Email</Text>
          </TouchableHighlight>
          <Label label={'Password'} />
          <PasswordWithIcon
            onTyping={(input) =>
              this.setState({
                password: input,
              })
            }
          />
          <Label label={'Confirm Password'} />
          <PasswordWithIcon
            onTyping={(input) =>
              this.setState({
                confirmPassword: input,
              })
            }
          />
          <TouchableHighlight
            style={[BasicStyles.btn, BasicStyles.btnSecondary]}
            onPress={() => {
              this.updatePassword();
            }}
            underlayColor={Color.gray}>
            <Text style={BasicStyles.textWhite}>Change Password</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(AccountSettings);
