import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../pages/styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    const d = new Date()
    const time = `${d.getHours()} : ${d.getMinutes()}`
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liTextName}>{this.props.item.name}</Text>
          <Text style={styles.liText}>{this.props.item.title}</Text>
          <View style={styles.liTimeWrapper}>
            <Text style={styles.liTime}>{this.props.item.time}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;