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
          <Text style={Style.templateText}>Hi {user.username}! Send the requirements below. Just click the button.</Text>
        </View>
        <ScrollView horizontal={true} style={[Style.ScrollView, {
          marginBottom: 50
        }]}>
          <View style={{
            flexDirection: 'row'
          }}>
          {
            messengerGroup.validations.requirements.map((item, index) => {
              if(item.validations != null){
                return (
                  <View style={{
                      width: (width / 2) - 20,
                      height: 50,
                      marginRight: 10
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        if(item.payload == 'signature'){
                          this.setState({sketchModal: true})
                        }else{
                          // image only
                        }
                      }} 
                      style={[Style.templateBtn, {
                        width: '100%',
                        height: 50,
                      }]}
                      key={index}
                      >
                      <Text style={Style.templateText}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
            })
          }
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
