import { StyleSheet, Platform } from 'react-native'
import { Color } from 'common'
export default StyleSheet.create({
    MainContainer: {
        flexGrow: 1
    },
    PaymentMethodsContainer: {
        flex: 1,
        padding: 25,
    },
    PaymentTileContainer: {
        flexDirection: 'row',
        borderWidth: 0.4,
        borderRadius: 10,
        marginVertical: 10,
        padding: 20
    },
    PaymentTileImage: {
        marginRight: 15
    },
    PaymentTileText: {
        fontWeight: 'bold'
    },
    floatingButton: {
        backgroundColor: Color.primary,
        height: 70,
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 25,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFloatingBtn: {
        color: Color.white
    }
})