import React, { Component } from 'react';

import {
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
import {BasicStyles , Colors} from 'common'
import QRCodeScanner from 'react-native-qrcode-scanner';

class Scanner extends Component {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                showMarker
                topContent={
                    <Text>
                        Scan QRCode
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity >
                        <Text >Go back</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}

export default Scanner;