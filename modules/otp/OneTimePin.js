import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class OneTimePin extends Component {
  constructor(props) {
    super(props);
    var fieldCount = new Array(this.props.fieldCount).fill('');
    this.inputRefs = new Array(this.props.fieldCount).fill(React.createRef());
    this.state = {
      fields: fieldCount,
    };
  }

  inputHandler = (value, index) => {
    const {fields} = this.state;
    fields.splice(index, 1, value);
    this.props.pinHandler(fields);
    if (index + 1 < this.state.fields.length) {
      this.moveToNextField(index);
    }
  };

  moveToNextField = (index) => {
    this.inputRefs[index + 1].focus();
  };

  displayFields = () => {
    let fields = [];
    for (let i = 0; i <= this.props.fieldCount - 1; i++) {
      fields.push(
        <View style={styles.OtpFieldContainer} key={i}>
          <TextInput
            ref={(r) => (this.inputRefs[i] = r)}
            maxLength={1}
            style={styles.OtpFieldTextStyle}
            onChangeText={(value) => this.inputHandler(value, i)}
          />
        </View>,
      );
    }
    return fields;
  };

  handleFieldChange = (value, index) => {
    if (isNaN(value)) {
      return false;
    }
    console.log('Value', value);
    this.setState({
      fields: [
        ...this.state.fields.map((val, i) => (index === i ? value : val)),
      ],
    });

    console.log('Fields', this.state.fields);

    if (value.nextSibling) {
      value.nextSibling.focus();
    }
  };

  render() {
    return (
      <View style={styles.OneTimePinContainer}>{this.displayFields()}</View>
    );
  }
}

const styles = StyleSheet.create({
  OneTimePinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  OtpFieldContainer: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    marginHorizontal: '2%',
    marginVertical: '1%',
  },
  OtpFieldTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default OneTimePin;
