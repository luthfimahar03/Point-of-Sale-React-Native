import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Body,
  Footer,
  FooterTab,
  Button,
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  View,
  Image,
  Icon,
  Fab

} from 'native-base';

import { StyleSheet } from 'react-native'
import Axios from 'axios'
import { FAB } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
const convertRupiah = require('rupiah-format')

class Manage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    this.getProducts()
  }

  async getProducts() {
    await Axios.get("http://54.175.58.201:5000/products")
      .then(result => {
        this.setState({ data: result.data.data })
        console.log("Data ini terhubung")
      })
      .catch(err => {
        console.log(err)
      })
    // const fetch = await getAll(this.state.clicks)
    // this.props.dispatch(fetch)
    // this.setState({
    //     data: this.props.products.productList,
    //     totalPage: this.props.products.totalPage,
    //     totalData: this.props.products.totalData
    // })
  }

  handleDelete = async (product) => {
    fetch("http://54.175.58.201:5000/products/" + product,
      {
        method: "DELETE",
      })
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#27ae60" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 5, color: "white" }}>Manage</Text>
        </Header>
        <ScrollView>
          <Content>
            {this.state.data.map(item => {
              return (
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: `http://54.175.58.201:5000/${item.image}` }} />
                    </Left>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note numberOfLines={1}>{convertRupiah.convert(item.price)}</Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={() => this.handleDelete(item.id)}>
                        <Icon name="trash" />
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              )
            })}
          </Content>
        </ScrollView>
        <Fab

          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#ff5252', marginBottom: 50 }}
          position="bottomRight"
          onPress={() => { this.props.navigation.navigate('AddCart') }}>
          <Icon name="add" />
        </Fab>
        {/* <View>
          <FAB small style={styles.fab} onPress={() => this.props.navigation.navigate('')} >
            <Icon active name="plus" />
          </FAB>
        </View> */}


        {/* FooterTabs */}
        <Footer>
          <FooterTab style={{ backgroundColor: "#27ae60" }}>
            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Manage')} >
              <Icon name="paper" />
              <Text>Manage</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Statistic')}>
              <Icon name="pie" />
              <Text>Statistic</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Login')}>
              <Icon name="setting" type="AntDesign" />
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Manage

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    marginBottom: 20,
    marginRight: 10,
    right: 0,
    bottom: 0,
  },
})