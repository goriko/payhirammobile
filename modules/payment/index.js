import React, { Component } from 'react';
import { Color, BasicStyles } from 'common';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView, Switch, Image, TextInput, Dimensions } from 'react-native';
import PaymentAccountTile from './PaymentAccountTile';
import styles from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width);
class AddPayment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const res = {
            creditCard: require('assets/credit-card.png'),
            debitCard: require('assets/debit-card.png'),
            wallet: require('assets/wallet.png')
        };
        return (
            <ScrollView contentContainerStyle={styles.MainContainer}>
                <View style={styles.PaymentMethodsContainer}>
                    <PaymentAccountTile src={res.creditCard} />
                    <PaymentAccountTile src={res.debitCard} />
                    <PaymentAccountTile src={res.wallet} />

                </View>
                <TouchableOpacity style={styles.floatingButton} onPress={()=>{
                    this.props.navigation.push("addPaymentStack")
                }}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{
                            color: Color.white,
                        }}
                        size={BasicStyles.iconSize}
                    />

                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default AddPayment;
