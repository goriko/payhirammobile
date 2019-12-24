import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Color } from 'common';

import { connect } from 'react-redux';
class NavigationDrawerStructureRight extends Component {
  constructor(props){
    super(props);
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  moveToTrash = () => {
    removeProduct();
  }

  goTo = (screen) => {
    this.props.navigationProps.navigate(screen)
  }
  render() {
    const { selection } = this.props.state;
    if(selection.length > 0){
      return (
        <View style={{ flexDirection: 'row' }}>
          <View>
            <TouchableOpacity onPress={this.moveToTrash.bind()}>
              {/*Donute Button Image */}
              <FontAwesomeIcon icon={ faTrashAlt } style={{color: Color.danger, paddingLeft: 20, paddingRight: 20}}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.goTo('merchantStack')}>
              <FontAwesomeIcon icon={ faChevronRight } style={{color: Color.white, paddingLeft: 20, paddingRight: 20}}/>
            </TouchableOpacity>   
          </View>
          
          <View>
            <TouchableOpacity onPress={() => this.goTo('bundleStack')}>
              <FontAwesomeIcon icon={ faCopy } style={{color: Color.white, paddingLeft: 20, paddingRight: 20}}/>
            </TouchableOpacity>   
          </View>
        </View>
      );
    }else{
      return (
        <View></View>
      );
    }
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    removeProduct: () => dispatch(actions.removeProduct())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(NavigationDrawerStructureRight);