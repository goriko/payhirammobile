import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Color, BasicStyles } from 'common'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faEnvelope, faPhoneAlt, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import styles from './Style';
class PersonalInformationCard extends Component {
    _renderTextIcon = (icon, text) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: 5 }} size={20} />
                <Text style={[{ fontWeight: 'bold', margin: 2, fontSize: 14 }]}>{text}</Text>
            </View>
        )
    }
    render() {
        let { _renderTextIcon } = this
        return (
            <View>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>Personal Information</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.rows}>
                        <View style={[styles.col, { paddingLeft: 20 }]}>
                            {_renderTextIcon(faUserCircle, 'John John Doe')}
                            {_renderTextIcon(faEnvelope, 'johndoe@gmail.com')}
                            {_renderTextIcon(faUserCircle, 'Male')}
                        </View>
                        <View style={[styles.col, { paddingRight: 25 }]}>
                            {_renderTextIcon(faPhoneAlt, '+63 977 123 4587')}
                            {_renderTextIcon(faCalendarAlt, 'January 29, 1999')}
                            {_renderTextIcon(faMapMarkerAlt, 'Cebu South Road, Cebu City, Philippines')}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default PersonalInformationCard;