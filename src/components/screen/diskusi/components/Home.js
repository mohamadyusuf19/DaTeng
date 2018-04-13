import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Keyboard
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Layout from '../libs/Layout';
import Store from '../libs/Store';

class Home extends React.Component {
  state = {
    name: '',
  };

  render() {
    return (
      <View style={Layout.homeContainer}>
        <Text
          style={{
            marginTop: 60,
            color: '#000',
            fontSize: 16,
            marginLeft: 15,
            fontFamily: 'Lato-Semibold',
          }}
        >
          masukkan nama disini :
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder='orang jujur'
            value={this.state.name}
            onChangeText={(name) => {
              this.setState({name});
            }}
            {...Layout.textInput}
          />
        </View>
        <View style={{
          alignItems: 'flex-end',
          marginRight: 15,
          marginTop: 10,
        }}>
          <Button
            style={{
              fontSize: 22,
              color: '#1622ce',
              fontFamily: 'Lato-Semibold',
              textDecorationLine: 'underline',
            }}
            styleDisabled={{
              opacity: 0.3,
            }}
            disabled={this.state.name.trim() ? false : true}
            onPress={() => {
              Store.setName(this.state.name);
              Keyboard.dismiss()
              Actions.channels();
            }}
          >
            Masuk
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 3,
    margin: 13,
  }
})

export default Home;
