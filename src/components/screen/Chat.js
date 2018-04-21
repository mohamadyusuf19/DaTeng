import React from 'react';
import {
  View,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../../Backend';
import Store from '../../Store';
import LayoutChat from './LayoutChat';
import HeaderFunction from '../common/HeaderFunction';

class Chat extends React.Component {
  state = {
    messages: []
  };
  componentWillMount() {
    Backend.loadMessages(this.props.navigation.state.params.channel, (message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
  render() {

    return (
      <View style={{ flex: 1}}>
        <HeaderFunction text={this.props.navigation.state.params.channel} onPress={() => this.props.navigation.goBack() }/>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => {
            Backend.sendMessages(messages);
          }}
          user={{
            _id: Store.getUid(),
            name: Store.getName(),
            avatar: Store.getAvatar(),
          }}
          {...LayoutChat.GiftedChat}
        />
      </View>
    );
  }
}

export default Chat;
