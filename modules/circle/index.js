import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { UserImage, Rating } from 'components';
import { Color } from 'common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
class Circle extends Component{
  constructor(props){
    super(props);
  }

  redirect = () => {
    const { user } = this.props.state
    this.props.navigation.push("viewProfileStack", { user })
  }
  render() {
    return (
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faCheckCircle } style={{color: 'blue', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesomeIcon icon={ faTimesCircle } style={{color: 'red', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faCheckCircle } style={{color: 'blue', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesomeIcon icon={ faTimesCircle } style={{color: 'red', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faCheckCircle } style={{color: 'blue', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.redirect()}} underlayColor={Color.gray}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <UserImage user={""} style={[{flex: 3}]}/>
              <View style={[{flex: 3, marginLeft: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesomeIcon icon={ faTimesCircle } style={{color: 'red', marginRight: 5}} size={15} />
                  <Text style={[{fontWeight: 'bold', margin: 2}]}>Kennette Canales</Text>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
              </View>
              <Rating ratings={""} style={[{flex: 3}]}></Rating>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({ state: state });

export default connect(mapStateToProps)(Circle);
