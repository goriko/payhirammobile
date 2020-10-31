import React, {Component} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { BasicStyles, Color } from 'common';
import { UserImage, Rating } from 'components';

class Request extends Component {
  render() {
    return (
        <View>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row', alignItems: 'center', borderColor: Color.gray, borderWidth: 1, borderRadius: 5, margin: 5}}>
              <TextInput style={[BasicStyles.formControl, {marginBottom: 0, borderWidth: 0}]} placeholder={'Search'} />
              <TouchableOpacity>
                <FontAwesomeIcon icon={ faSearch } style={{color: Color.secondary, marginRight: 5}} size={BasicStyles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
                  <TouchableHighlight underlayColor={Color.gray} style={[{backgroundColor: Color.primary, width: '50%', alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 5,}]}>
                    <Text style={{ color: Color.white}}>Connect</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>    
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
                  <TouchableHighlight underlayColor={Color.gray} style={[{backgroundColor: Color.primary, width: '50%', alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 5,}]}>
                    <Text style={{ color: Color.white}}>Connect</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>  
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', margin: 10}}>
              <View style={[{width: '100%'}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UserImage user={""} style={[{flex: 1}]} />
                  <Text style={[{fontWeight: 'bold', margin: 2, flex: 4}]}>Kennette Canales</Text>
                  <Rating ratings={""} style={[{flex: 2}]} ></Rating>
                  <TouchableOpacity style={[{marginRight: 10, marginLeft: 10, alignItems: 'center'}]}>
                    <FontAwesomeIcon icon={ faEllipsisH } style={{color: Color.black}} size={BasicStyles.iconSize} />
                  </TouchableOpacity>
                </View>
                <Text style={[{margin: 2}]}>Cebu South Road, Cebu City, Philippines</Text>
                <Text style={[{margin: 2}]}>Needed on: September 25, 2020</Text>
                <Text style={[{margin: 2}]}>THIS IS A TEST.</Text>
                <Text style={[{margin: 2, fontSize: 10}]}>September 23, 2020</Text>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
                  <TouchableHighlight underlayColor={Color.gray} style={[{backgroundColor: Color.primary, width: '50%', alignItems: 'center', justifyContent: 'center', height: 40, borderRadius: 5,}]}>
                    <Text style={{ color: Color.white}}>Connect</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>          
          </ScrollView>
        </View>
    );
  }
}

export default Request;
