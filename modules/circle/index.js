import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { UserImage, Rating } from 'components';
import { Color } from 'common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
class Circle extends Component{
  constructor(props){
    super(props);
  }

  redirect = () => {
    console.log("Here")
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



      
      // <ScrollView>
      //   <View>
      //   <View style={{
      //     marginBottom: 100,
      //   }}>
      //     <TouchableHighlight style={{
      //           height: 50,
      //           backgroundColor: Color.primary,
      //           width: '100%',
      //           alignItems: 'center',
      //           justifyContent: 'center',
      //           borderRadius: 5,
      //         }}
      //         onPress={() => {
      //           this.redirect()
      //         }}
      //         underlayColor={Color.gray}
      //           >
      //         <Text style={{
      //           color: Color.white,
      //           textAlign: 'center',
      //         }}>Update</Text>
      //     </TouchableHighlight>
      //   </View>
      // </View>
      // </ScrollView>
    );
  }
}
export default Circle;
