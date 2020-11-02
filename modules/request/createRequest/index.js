import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faAsterisk} from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-community/picker';

import FullfilmentCard from 'modules/request/createRequest/FullfilmentCard';
import BalanceCard from 'modules/dashboard/BalanceCard';
import CustomButton from './CustomButton';
import styles from './Styles';

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'Philippine Peso - PHP',
    };
  }
  render() {
    return (
      <View style={styles.CreateRequestContainer}>
        <BalanceCard
          cardColor="#22B173"
          availableBalance={'PHP 25,000.00'}
          currentBalance={'PHP 52,000.00'}
        />
        <View style={styles.FillInDetailsContainer}>
          <Text style={styles.FillInDetailsTextStyle}>Fill in the details</Text>
        </View>
        <ScrollView>
          <View style={styles.SelectFullfilmentContainer}>
            <Text style={styles.SelectFullfilmentTextStyle}>
              Select type of fullfilment
            </Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.FullfilmentContainer}>
            <FullfilmentCard
              cardColor="#22B173"
              fullfilmentType={'Send'}
              fullfilmentDescription={
                'Allow other peer to fulfill your transaction when you to send money to your family, friends, or to businesses'
              }
            />
            <FullfilmentCard
              cardColor="#22B173"
              fullfilmentType={'Withdrawal'}
              fullfilmentDescription={
                'Allow other peer to fulfill your withdrawals from Payhiram'
              }
            />
          </View>
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {paddingLeft: '2%', paddingRight: '79%', paddingBottom: '3%'},
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>I need</Text>
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
            width="92%"
          />
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {paddingLeft: '1%', paddingRight: '60%', paddingTop: '5%'},
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>
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
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {paddingLeft: '1%', paddingRight: '73%', paddingTop: '5%'},
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>Amount</Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput />
          </View>
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {
                paddingLeft: '1%',
                paddingRight: '34%',
                paddingTop: '5%',
                alignItems: 'flex-start',
              },
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>
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
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {
                paddingLeft: '1%',
                paddingRight: '71%',
                paddingTop: '5%',
                alignItems: 'flex-start',
              },
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>Location</Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput />
          </View>
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {
                paddingLeft: '1%',
                paddingRight: '71%',
                paddingTop: '5%',
                alignItems: 'flex-start',
              },
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>Noted on</Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput />
          </View>
          <View
            style={[
              styles.SelectFullfilmentContainer,
              {
                paddingLeft: '1%',
                paddingRight: '75%',
                paddingTop: '5%',
                alignItems: 'flex-start',
              },
            ]}>
            <Text style={styles.SelectFullfilmentTextStyle}>Details</Text>
            <FontAwesomeIcon
              icon={faAsterisk}
              size={7}
              style={{paddingLeft: 15, color: '#FF2020'}}
            />
          </View>
          <View style={styles.TextInputContainer}>
            <TextInput />
          </View>
          <View style={styles.AmountContainer}>
            <View style={styles.AmountTextContainer}>
              <Text style={styles.AmountTextStyle}>Amount</Text>
            </View>
            <View style={styles.AmountDetailsContainer}>
              <Text style={styles.AmountDetailsStyle}>PHP</Text>
              <Text style={styles.AmountDetailsStyle}>0.00</Text>
            </View>
          </View>
          <CustomButton
            buttonColor="#22b173"
            fontColor="#fffff"
            buttonText="Promo"
            width="92%"
          />
          <View style={styles.ChangesContainer}>
            <Text style={styles.ChangesTextStyle}>
              Changes will vary to the processor
            </Text>
          </View>
        </ScrollView>
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
            width="92%"
          />
        </View>
      </View>
    );
  }
}

export default CreateRequest;
