import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import LayoutChat from './LayoutChat';
import Store from '../../Store';
import HeaderFunction from '../common/HeaderFunction';

const avatar = require('../../icon/user.png');
class HomeChat extends React.Component {
  state = {
    name: '',
    navigate: this.props.navigation.navigate
  };

  componentWillMount() {
    AsyncStorage.getItem('user', (error, result) => {
      if (result) {
          const resultParsed = JSON.parse(result);
          this.setState({
              name: resultParsed,
          });
      }
    });
  }

  render() {
    return (
      <View style={LayoutChat.homeContainer}>
        <HeaderFunction text='Diskusi' onPress={() => this.props.navigation.goBack()}/>
        <View style={styles.textInputContainer}>
          <Image source={avatar} style={{height: 20, width: 20}}/>
          <TextInput
            placeholder='Masukkan nama untuk diskusi'
            value={this.state.name}
            onChangeText={(name) => {
              this.setState({name});
            }}
            {...LayoutChat.textInput}
          />
        </View>
        <TouchableOpacity 
              style={styles.buttonContainer} 
              disabled={!this.state.name}
              onPress={() => {
                Store.setName(this.state.name);
                Keyboard.dismiss()
                this.state.navigate('Channel')
                AsyncStorage.setItem('user', JSON.stringify(this.state.name))
              }}>
            <Text style={{color: "#000"}}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#2da2e5',
    borderRadius: 50,
    paddingLeft: 15,
    margin: 13,
    marginBottom: 7,
    height: 40,
  },
  buttonContainer: {
    height: 40,
    borderRadius: 50,
    backgroundColor: "#2da2e5",
    margin: 13,
    alignItems: "center",
    justifyContent: 'center',
  }
})

export default HomeChat;
