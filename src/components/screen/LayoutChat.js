import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Text,
  View,
} from 'react-native';

import { Bubble, Send } from 'react-native-gifted-chat';

const mainColor = '#eae7e3';
const darkColor = '#1d59c1';

const screen = {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 50 : 30,
};

export default {
  homeContainer: {
    ...screen,
    backgroundColor: mainColor,
    paddingTop: Platform.OS === 'ios' ? 22 : 0,
  },
  channelsContainer: {
    ...screen,
    backgroundColor: mainColor,
  },
  chatContainer: {
    ...screen,
    backgroundColor: '#78c6e2',
  },
  navigationBar: {
    navigationBarStyle: {
      backgroundColor: "#eae7e3",
      borderBottomWidth: 0,
    },
    titleStyle: {
      color: '#fff',
      fontSize: 17,
      fontWeight: '600',
      fontFamily: 'Lato-Semibold',
      lineHeight: 18,
    },
  },
  textInput: {
    style: {
      color: '#000',
      fontSize: 22,
      marginLeft: Platform.select({
        ios: 15,
        android: 10,
      }),
      marginRight: 15,
      fontFamily: 'Lato-Semibold',
    },
    placeholderTextColor: '#A89ED1',
    clearButtonMode: 'while-editing',
    underlineColorAndroid: 'transparent',
  },
  channelName: {
    color: '#000',
    fontSize: 18,
    marginLeft: 15,
    fontFamily: 'Lato-Semibold',
  },
  GiftedChat: {
    renderBubble(props) {
      return (
        <View>
          {!props.isSameUser(props.currentMessage, props.previousMessage) ?
            <Text style={{
              color: '#aaa4a4',
              marginBottom: 3,
              fontSize: 16,
              textAlign: props.currentMessage.user._id === props.user._id ? 'right' : 'left',
              marginLeft: props.currentMessage.user._id === props.user._id ? 0 : 10,
              marginRight: props.currentMessage.user._id === props.user._id ? 10 : 0,
            }}>{props.currentMessage.user.name}</Text>
            :
            null
          }
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#2974f4',
              },
              left:{
                backgroundColor: "#7886e2",
              }
            }}
          />
        </View>
      );
    },
    renderAvatar(props) {
      return (
        <Image
          source={{uri: `https://firebasestorage.googleapis.com/v0/b/meetupchat-dbce1.appspot.com/o/${props.currentMessage.user.avatar.replace('/', '%2F')}?alt=media`}}
          style={{
            height: 36,
            width: 36,
            borderRadius: 8,
          }}
        />
      );
    },
    renderLoading() {
      return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ActivityIndicator/>
        </View>
      )
    },
    renderSend(props) {
      return (
        <Send
          {...props}
          textStyle={{
            color: darkColor,
          }}
        />
      );
    },
  },
};
