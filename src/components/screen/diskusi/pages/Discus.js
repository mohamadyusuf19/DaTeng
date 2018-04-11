'use strict';

import React, {Component} from 'react';
const firebase = require('firebase');
const StatusBar = require('../components/StatusBar');
const MessageInput = require('../components/MessageInput');
const ListItem = require('../components/ListItem');
const styles = require('./styles.js')
import {
  ListView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableHighlight,
  Alert,
  Keyboard,
  ScrollView
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBX1cLE87RIaJg4GXUSbVfndp8SIXO5BuA",
  authDomain: "chatgroup-316dc.firebaseapp.com",
  databaseURL: "https://chatgroup-316dc.firebaseio.com",
  projectId: "chatgroup-316dc",
  storageBucket: "chatgroup-316dc.appspot.com",
  messagingSenderId: "928673920770"
};
firebase.initializeApp(config);

export default class Discus extends Component {
static navigationOptions = {
    headerMode: 'none',
    header: null,
    gesturesEnabled: false
  }
  constructor(props) {
    super(props);
    const params = this.props.navigation.state.params;
    this.state = {
      text: '',
      time: '',
      user: params.name,
      navigate: this.props.navigation.navigate,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row2, row1) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }


  getRef() {
    return firebase.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      console.log(snap)
      var itemsListView = [];
      snap.forEach((child) => {
        itemsListView.push({
          title: child.val().title,
          _key: child.key,
          name: child.val().name,
          time: child.val().time
        });
      });
      var rowIds = itemsListView.map((row, index) => index).reverse();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(itemsListView, rowIds)
      });
    });
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
    this.scrollView.scrollToEnd();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow (e) {
    this.scrollView.scrollToEnd();
  }

  //When the keyboard dissapears, this gets the ScrollView to move the last message back down.
  keyboardDidHide (e) {
    this.scrollView.scrollToEnd();
  }


  getTime() {
    const d = new Date()    
    const hour = d.getHours()
    const minute = d.getMinutes()
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return `${weekday[d.getDay()]} ~ ${('0'+ hour).slice(-2)}:${( '0'+ minute).slice(-2)}`
  }

  _addItem() {    
    this.itemsRef.push({ title: this.state.text, name: this.state.user, time: this.getTime()})
    this.setState({text: ''})
    this.scrollView.scrollToEnd() 
  }


  _renderItem(item) {
    // const deleteMessage = () => {
    //   if (this.itemsRef.child(item.name) == this.state.user) {
    //     this.itemsRef.child(item._key).remove()
    //   }
    // }

    // const onPress = () => {
    //   Alert.alert(
    //     'DELETE MESSAGE',
    //     null,
    //     [
    //       {text: 'Delete', onPress: (text) => this.deleteMessage},
    //       {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
    //     ]
    //   );
    // };

    return (
       <ListItem item={item} />
    );
  }
  
  render() {
    return (
       <View style={styles.container}>
        <StatusBar title="Diskusi" />
        <ScrollView ref={(ref) => { this.scrollView = ref }} style={{ flex: 1 }}>
          <ListView
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
            style={styles.listview}/>
        </ScrollView>
         <MessageInput onPress={this._addItem.bind(this)} title="Send" onChangeText={(text) => this.setState({text})} value={this.state.text}/>
      </View>
    )
  }

}