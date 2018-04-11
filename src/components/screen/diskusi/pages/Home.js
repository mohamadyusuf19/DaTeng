import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import firebase from "firebase";

export default class Home extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
    gesturesEnabled: false
  }
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      navigate: this.props.navigation.navigate,
    };
  }

  componentWillMount(){
    AsyncStorage.getItem('userName').then((value) => {
      this.setState({user: value})
    }).done();
  }


  handleChange(e) {
    this.setState({text: e})
  }


  onSubmit(){
    if (this.state.text != '') {
      AsyncStorage.setItem('userName', this.state.text);
      this.state.navigate('discus', {name: this.state.text});
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {marginTop: 40}]}>
          WELCOME
        </Text>
        <View style={styles.borderTextInput}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='masukkan nama untuk berdiskusi ...'
            placeholderTextColor='#adb3bc'
            style={styles.textInput}
            onChangeText={(text) => {
              this.handleChange(text)
            }}
            value={this.state.name}
          />
        </View>
        <TouchableOpacity
          style={styles.next}
          disabled={!this.state.text}
          onPress={() => {
            this.onSubmit()
          }}
        >
          <Text style={styles.label2}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 17,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    marginLeft: 5,
    marginRight: 5
  },
  next: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15
  },
  label2: {
    fontSize: 20,
    marginLeft: 17,
    justifyContent: 'center',
    color: '#42a1f4'
  },
  borderTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    borderRadius: 8
}
});