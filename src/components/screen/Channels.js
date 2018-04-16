import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LayoutChat from './LayoutChat';
import HeaderFunction from '../common/HeaderFunction';

export default class Channels extends React.Component {

  state = { navigate: this.props.navigation.navigate }

  renderRow(channelName) {

    return (
      
      <TouchableOpacity
        onPress={() => {
          this.state.navigate('Chating', { channel: channelName })
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
        <Text style={LayoutChat.channelName}>
          {channelName}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderFunction text='Channels' onPress={() => this.props.navigation.goBack() }/>
        <ScrollView style={LayoutChat.channelsContainer}>
        {this.renderRow('diskusi sosial')}
        {this.renderRow('diskusi politik')}
        {this.renderRow('diskusi pemilihan')}
        {this.renderRow('diskusi santai')}
        {this.renderRow('diskusi partai')}
      </ScrollView>
      </View>
    );
  }
}