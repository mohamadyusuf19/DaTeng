import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Layout from '../libs/Layout';

export default class Channels extends React.Component {

  renderRow(channelName) {

    return (
      
      <TouchableOpacity
        onPress={() => {
          Actions.chat({
            channelName,
            title: channelName.toUpperCase(),
          });
        }}

      >
      <View style={{borderRadius: 4, 
            borderWidth: 1, 
            borderColor: "black", 
            height: 40, margin: 18, 
            justifyContent: 'center',
            elevation: 1,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset:{width: 0, height: 0}}}>
        <Text style={Layout.channelName}>
          {channelName}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView style={Layout.channelsContainer}>
        {this.renderRow('diskusi sosial')}
        {this.renderRow('diskusi politik')}
        {this.renderRow('diskusi pemilihan')}
        {this.renderRow('diskusi santai')}
        {this.renderRow('diskusi partai')}
      </ScrollView>
    );
  }
}