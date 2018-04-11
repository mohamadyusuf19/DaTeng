'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../pages/styles.js')
import AutogrowInput from 'react-native-autogrow-input';
const constants = styles.constants;
const { StyleSheet,TextInput, Text, View, TouchableHighlight} = ReactNative;

class MessageInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      newValue: '',
      height: 40,
      width: 280,
    }
  }

  updateSize = (height) => {
    this.setState({
      height
    });
  }
  render() {
    const {newValue, height, width} = this.state;

    let newStyle = {
      height,
      width
    }
    const value = this.props.value

    return (
      <View style={styles.inputBar}>
      <AutogrowInput style={styles.textBox}
                  ref={(ref) => { this.autogrowInput = ref }}
                  placeholder='Ketik disini untuk memulai diskusi ...'
                  placeholderTextColor='#b3b6bc'
                  multiline={true}
                  defaultHeight={40}
                  onChangeText={this.props.onChangeText}
                  onContentSizeChange={this.props.onSizeChange}
                  underlineColorAndroid='transparent'
                  value={value}/>
      <TouchableHighlight style={styles.sendButton} onPress={this.props.onPress} disabled={!value && value.length < 5}>
          <Text style={{color: 'white'}}>Send</Text>
      </TouchableHighlight>
    </View>
   );
  }
}

module.exports = MessageInput;
