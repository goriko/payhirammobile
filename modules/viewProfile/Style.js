import { Color } from 'common';
import { Dimensions, StyleSheet } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
export default StyleSheet.create({
    container: {
        width: width,
    },
    headerContainer: {
        width: width,
        height: width - 110,
        backgroundColor: Color.primary,
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageContainer: {
        alignContent: 'center',
        paddingTop: 20
    },
    image: {
        width: 130,
        height: 130,
    },
    username: {
        color: Color.white,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16
    },
    ratings: {
        marginTop: 5,
    },
    verifiedContainer: {
        paddingTop: 10
    },
    verifiedText: {
        color: Color.white,
        fontStyle: 'italic'
    },
    headerButton: {
        position: 'absolute',
        left: 10,
        top: 20,
    },
    cardHeader: {
        borderBottomColor: Color.gray,
        borderBottomWidth: 1,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    cardHeaderText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1.2
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row"
    },
    col: {
        width: width / 2, 
    },
    rows: {
        height: 215,
        flexDirection: "row",
        flex: 1,
    }
});