import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faAsterisk} from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';

import FullfilmentCard from 'modules/request/createRequest/FullfilmentCard';
import BalanceCard from 'modules/dashboard/BalanceCard';
import CustomButton from './CustomButton';
import styles from './Styles';
import {BasicStyles} from 'common';
import DateTime from 'components/DateTime';

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'Philippine Peso - PHP',
    };
  }

  redirect = (route) => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.CreateRequestContainer}>
        <ScrollView>
          <BalanceCard
            cardColor="#22B173"
            availableBalance={'PHP 25,000.00'}
            currentBalance={'PHP 52,000.00'}
          />
          <View style={styles.FillInDetailsContainer}>
            <Text style={styles.FillInDetailsTextStyle}>
              Fill in the details
            </Text>
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Select type of fullfilment
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={{height: 200, width: '100%'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FullfilmentCard
                cardColor="#22B173"
                fullfilmentType={'Send'}
                fullfilmentDescription={
                  'Allow other peers to fulfill your transaction when you to send money to your family, friends, or to businesses'
                }
              />

              <FullfilmentCard
                cardColor="#22B173"
                fullfilmentType={'Withdrawal'}
                fullfilmentDescription={
                  'Allow other peers to fulfill your withdrawals from Payhiram'
                }
              />
              <FullfilmentCard
                cardColor="#22B173"
                fullfilmentType={'Deposit'}
                fullfilmentDescription={
                  'Allow other peers to find your deposits Payhiram'
                }
              />
              <FullfilmentCard
                cardColor="#22B173"
                fullfilmentType={'Bills and Payment'}
                fullfilmentDescription={
                  "Don't have time and want to pay your bills? Allow other peers to pay your bills."
                }
              />
            </ScrollView>
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              I need
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <CustomButton
            buttonColor="#22b173"
            fontColor="#fffff"
            buttonText="Cash"
            width="100%"
          />
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Select Currency
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <Picker
              selectedValue={this.state.language}
              style={{
                fontSize: BasicStyles.titleText.fontSize,
                height: 60,
                width: '90%',
                borderRadius: 5,
                borderColor: '#EOEOEO',
                borderWidth: 1,
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({currency: itemValue})
              }>
              <Picker.Item
                label="Philippine Peso - PHP"
                value="Philippine Peso - PHP"
              />
              <Picker.Item label="US Dollar - USD" value="US Dollar - USD" />
            </Picker>
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Amount
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput value="0" />
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Maximum processing charge
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput value="Optional" style={{textAlign: 'justify'}} />
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Location
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput
              value="Please type meetup address"
              onFocus={() => {
                this.redirect('addLocationStack');
              }}
            />
          </View>
          <View style={styles.SelectFullfilmentContainer}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Needed on
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <DateTime />
          <View style={[styles.SelectFullfilmentContainer, {paddingTop: 0}]}>
            <Text
              style={[
                styles.SelectFullfilmentTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Details
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={[styles.TextInputContainer, {height: 120}]}>
            <TextInput value="Add details here" />
          </View>
          <View style={styles.AmountContainer}>
            <View style={styles.AmountTextContainer}>
              <Text
                style={[
                  styles.AmountTextStyle,
                  {fontSize: BasicStyles.titleText.fontSize},
                ]}>
                Subtotal
              </Text>
            </View>
            <View style={styles.AmountDetailsContainer}>
              <Text
                style={[
                  styles.AmountDetailsStyle,
                  {fontSize: BasicStyles.titleText.fontSize},
                ]}>
                PHP
              </Text>
              <Text
                style={[
                  styles.AmountDetailsStyle,
                  {fontSize: BasicStyles.titleText.fontSize},
                ]}>
                0.00
              </Text>
            </View>
          </View>
          <View style={styles.ChangesContainer}>
            <Text
              style={[
                styles.ChangesTextStyle,
                {fontSize: BasicStyles.titleText.fontSize},
              ]}>
              Changes will vary to the processor
            </Text>
          </View>
          <View style={styles.TotalContainer}>
            <View style={styles.AmountContainer}>
              <View style={styles.AmountTextContainer}>
                <Text style={styles.AmountTextStyle}>Total</Text>
              </View>
              <View style={styles.AmountDetailsContainer}>
                <Text style={styles.AmountDetailsStyle}>PHP</Text>
                <Text style={styles.AmountDetailsStyle}>0.00</Text>
              </View>
            </View>
            <CustomButton
              buttonColor="#3F0050"
              fontColor="#fffff"
              buttonText="Post"
              width="100%"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    // updateUser: (user) => dispatch(actions.updateUser(user)),
    setLocation: (location) => dispatch(actions.setLocation(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);
