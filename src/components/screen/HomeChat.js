import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import LayoutChat from './LayoutChat';
import Store from '../../Store';
import HeaderFunction from '../common/HeaderFunction';

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
          <TextInput
            placeholder='masukkan nama untuk diskusi'
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
            <Text style={{color: "#2da2e5"}}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 3,
    margin: 13,
    marginBottom: 7,
  },
  buttonContainer: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#2da2e5",
    margin: 13,
    alignItems: "center",
    justifyContent: 'center',
  }
})

export default HomeChat;
