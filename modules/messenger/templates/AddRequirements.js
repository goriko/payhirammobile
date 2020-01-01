import React, {Component} from 'react';
import Style from 'modules/messenger/Style.js';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {BasicStyles, Color} from 'common';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
class AddRequirements extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { user, messengerGroup } = this.props.state;
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
          {
            messengerGroup.validations.requirements.map((item, index) => {
              if(item.validations === null){
                return (
                  <View style={{
                      width: (width / 2) - 20,
                      height: 50,
                      marginRight: 10
                    }}>
                    <TouchableOpacity
                      onPress={() => console.log('test')} 
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
)(AddRequirements);