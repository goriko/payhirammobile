import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { BasicStyles, Color } from 'common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCheckCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import styles from './Style';
import Config from 'src/config';
import PersonalInformationCard from './PersonalInformationCard';
class ViewProfile extends Component {
    goBack = () => {
        this.props.navigation.pop();
    };
    render() {
        const { user } = this.props.navigation.state.params
        const ratings = { stars: 5 }
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    icon={(ratings.stars > i) ? faStar : faStarRegular}
                    size={20}
                    style={{
                        color: Color.warning,
                        marginTop: 5,
                        marginHorizontal: 5
                    }}
                    key={i}
                />
            )
        }
        return (
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerButton}>
                            <TouchableOpacity onPress={this.goBack}>
                                <FontAwesomeIcon icon={faChevronLeft} color={Color.white} size={BasicStyles.iconSize} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageContainer}>
                        </View>
                        <View style={styles.sectionHeadingStyle}>
                            {
                                user.account_profile != null && user.account_profile.url != null && (
                                    <Image
                                        source={{ uri: Config.BACKEND_URL + user.account_profile.url }}
                                        style={[styles.image, {
                                            borderRadius: 70
                                        }]} />
                                )
                            }
                            {
                                (user.account_profile == null || (user.account_profile != null && user.account_profile.url == null)) && (
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        size={100}
                                        style={{
                                            color: Color.white
                                        }}
                                    />
                                )
                            }
                        </View>
                        <Text style={styles.username}>Kennette Canales</Text>
                        <View style={[styles.ratings, { flexDirection: 'row', alignItems: 'center', alignContent: 'center' }]}>
                            {stars}
                        </View>
                        <View style={[styles.verifiedContainer, { marginRight: 20, }]}>
                            <Text style={styles.verifiedText}>
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    size={16}
                                    style={{
                                        backgroundColor: Color.white,
                                        color: Color.info,
                                        borderRadius: 20,

                                    }}
                                />
                                <Text style={{ fontSize: 16 }}>{' '}Verified</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <PersonalInformationCard />
            </ScrollView>
        );
    }
}

export default ViewProfile
