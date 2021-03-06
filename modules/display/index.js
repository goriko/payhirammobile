import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import ThemeSettingTile from 'modules/display/ThemeSettingTile.js';

const dummyThemeData = [
  {
    title: 'Increment',
    details: 'Magenta, Light Green, Yellow, Black',
    colors: ['#3F0050', '#22B173', '#F2C94C', '#000000'],
  },
  {
    title: 'Night Mode',
    details: 'Black, Yellow, White, Gray',
    colors: ['#000000', '#F2C94C', '#F2F2F2', '#828282'],
  },
  {
    title: 'Daylight Mode',
    details: 'White, Yellow, Gray, Black',
    colors: ['#FFFFFF', '#F2C94C', '#4F4F4F', '#000000'],
  },
];
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTile: 0,
    };
  }

  selectHandler = (index) => {
    this.setState({selectedTile: index});
  };

  displayThemeTiles = () => {
    return dummyThemeData.map((data, index) => {
      return (
        <ThemeSettingTile
          id={index}
          key={index}
          selectedTile={index === this.state.selectedTile ? true : false}
          onSelect={this.selectHandler}
          themeTitle={data.title}
          colors={data.details}
          circles={data.colors}
        />
      );
    });
  };
  render() {
    return <View>{this.displayThemeTiles()}</View>;
  }
}

export default Display;
