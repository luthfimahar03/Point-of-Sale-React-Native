import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right,
  View
} from 'native-base';

import {AsyncStorage } from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }


  handleLogin = async () => {

    const data = {
      email: this.state.username,
      password: this.state.password
    }
    console.log(data)
    await axios.post("http://192.168.43.130:5000/users/login", data)
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('username', res.data.name)
        AsyncStorage.setItem('token', `Bearer ${res.data.token}`)
        console.log(AsyncStorage.getItem('token'));
        this.props.navigation.navigate('Home')
      })
      .catch(err => {
        console.log(err)
        alert('Username or Password Error')
      })
  }

  // handleLogin = async (event) => {
  //   event.preventDefault()
  //   const data = new FormData(event.target)
  //   console.log(data)
  //   Axios.post("http://localhost:5000/users/login", data)

  //     .then(res => {
  //       if (res.status === 200) {
  //         LocalStorage.set('token', (res.data.token))
  //         LocalStorage.get('token')
  //         window.location.href = "http://localhost:3000/products"
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }



  render() {
    return (
      <Container>
        <View>
          <Text
            style={{ fontSize: 40, textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
            Sign In
          </Text>
        </View>


        <Content>
          <Form >
            <Item stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setState({ username: text })} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({ password: text })} />
            </Item>
            <View
              style={{ alignItems: 'center' }}>
              <Content>
                <Button onPress={() => {this.handleLogin}} full style={{ backgroundColor: "#27ae60", borderRadius: 30, marginTop: 20 }}>
                  <Text>Sign In</Text>
                </Button>
                <Button onPress={() => {this.props.navigation.navigate('Home')}} full style={{ backgroundColor: "red", borderRadius: 30, marginTop: 20 }}>
                  <Text>Langsung Masuk</Text>
                </Button>
              </Content>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
