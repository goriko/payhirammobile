import React, {Component} from 'react';
import Style from 'modules/messenger/Style.js';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {BasicStyles, Color} from 'common';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import Sketch from 'components/Modal/Sketch.js';
const width = Math.round(Dimensions.get('window').width);
class SendRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketchModal: false
    }
  }

  render(){
    const { user, messengerGroup } = this.props.state;
    const { sketchModal } = this.state;
    return (
      <View style={{
        marginBottom: 50
      }}>
        <View>
          <Text style={Style.templateText}>Hi {user.username}! Allow validation by clicking the options below.</Text>
        </View>
        <ScrollView horizontal={true} style={[Style.ScrollView, {
          marginBottom: 50
        }]}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
                width: (width / 2) - 20,
                height: 50,
                marginRight: 10
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({sketchModal: true})
                }} 
                style={[Style.templateBtn, {
                  width: '100%',
                  height: 50,
                }]}
                key={0}
                >
                <Text style={Style.templateText}>Send Signature</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Sketch
          visible={sketchModal}
          close={() => this.setState({sketchModal: false})}
        ></Sketch>
      </View>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendRequirements);
