import React, {Component} from 'react';
import styles from './Style.js';
import { View, TouchableOpacity, TouchableHighlight, Text} from 'react-native';
import Modal from "react-native-modal";
import { Color , BasicStyles} from 'common';
import Config from 'src/config.js';
class RequestOptions extends Component {
  constructor(props){
    super(props);
  }

  action = () => {
    this.props.action()
  }

  redirect = (route) => {
    this.props.close()
    this.props.navigate(route);
  }

  render(){
    return (
      <View style={{
        backgroundColor: Color.secondary,

      }}>
        <Modal isVisible={this.props.visible} style={{
          padding: 0,
          margin: 0
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingTop: 10,
              backgroundColor: Color.white,
              width: '100%',
              borderRadius: 5
            }}>
              <TouchableHighlight style={{
                  height: 75,
                  backgroundColor: Color.primary,
                  width: '100%',
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                }}
                onPress={() => {
                  this.redirect('createRequestStack')
                }}
                underlayColor={Color.gray}
                  >
                <Text style={{
                  color: Color.white,
                  textAlign: 'center',
                }}>Sending cash</Text>
              </TouchableHighlight>

              <TouchableHighlight style={{
                  height: 75,
                  backgroundColor: Color.primary,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  marginBottom: 10
                }}
                onPress={() => {
                  this.redirect('createBorrowStack')
                }}
                underlayColor={Color.gray}
                  >
                <Text style={{
                  color: Color.white,
                  textAlign: 'center',
                }}>Borrow</Text>
              </TouchableHighlight>


              <TouchableHighlight style={{
                  height: 50,
                  backgroundColor: Color.gray,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                }}
                onPress={() => {
                  this.props.close()
                }}
                underlayColor={Color.gray}
                  >
                <Text style={{
                  color: Color.white,
                  textAlign: 'center',
                }}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default RequestOptions
