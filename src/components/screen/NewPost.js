import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import TextField from './TextField';


class NewPost extends Component {
  render(){
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.input}>
            <TextField
              big
              name="What's up?"
            />
            <Button
              rounded
              style={styles.button}
            >
              <Text>Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    marginTop: 75,
  },
  input: {
    margin: 15,
    flex: 1,
  },
  button: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  formMsg: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
  }
};

export default NewPost;
