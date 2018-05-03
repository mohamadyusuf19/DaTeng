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

  onPress(selected) {
    if (selected == "Bot") {
      this.state.navigate("ChatBot", { channel: selected})
    }else{
      this.state.navigate("Chating", { channel: selected})
    }
  }
  renderRow(channelName) {

    return (
      
      <TouchableOpacity
        onPress={() => this.onPress(channelName)}
      >
      <View style={{
            borderRadius: 20,              
            backgroundColor: "#2da2e5", 
            height: 40, 
            margin: 10,
            marginBottom: 10, 
            justifyContent: 'center',
            elevation: 1,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset:{width: 0, height: 0}}}>
        <Text style={[LayoutChat.channelName, {alignSelf: 'center'}]}>
          {channelName}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderFunction text='Channels' onPress={() => this.state.navigate("Home") }/>
        <ScrollView style={LayoutChat.channelsContainer}>
        {this.renderRow('Diskusi Sosial')}
        {this.renderRow('Diskusi Politik')}
        {this.renderRow('Diskusi Pemilihan')}
        {this.renderRow('Diskusi Partai')}
        {this.renderRow('Diskusi Santai')}
        {this.renderRow('Diskusi Permainan')}
        {this.renderRow('Bot')}
      </ScrollView>
      </View>
    );
  }
}