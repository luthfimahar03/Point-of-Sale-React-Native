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
  View
} from 'native-base';
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#686de0"}}>
          <Text style={{marginTop: 20}}>
            Sign Up
          </Text>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <View style={{ alignItems: 'center' }}>
              <Content>
                <Button style={{ width: 100, marginTop: 20, backgroundColor: "#686de0" }} primary><Text > Sign Up </Text></Button>
              </Content>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}