import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem,
  View,
  Left,
  Right,
  Thumbnail,
  Button,
  Footer,
  FooterTab,
  Icon
} from 'native-base';

import {
  StyleSheet
} from 'react-native'


const convertRupiah = require('rupiah-format')
import Axios from 'axios'

import { ScrollView } from 'react-native-gesture-handler';

class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      yesterday: [],
      daynow: [],
      yearlast: [],
      yearnow: [],
      lastweek: [],
      weeknow: [],
    }
  }

  async componentDidMount() {
    await this.handleTable()
    await this.handleIncome()
  }

  handleTable = async () => {
    await Axios.get("http://54.175.58.201:5000/order")
      .then(result => {
        this.setState({
          table: result.data.data
        })
      })
  }


  handleIncome = async () => {
    await Axios.get("http://54.175.58.201:5000/order/getIncome")
      .then(result => {
        this.setState({
          yesterday: result.data.data[0].yesterday,
          daynow: result.data.data[0].daynow,
          yearlast: result.data.data[0].yearlast,
          yearnow: result.data.data[0].yearnow,
          lastweek: result.data.data[0].lastweek,
          weeknow: result.data.data[0].weeknow

        })

      })
  }

  render() {
    const state = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: "#27ae60" }} >
          <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 5, color: "white" }}>History</Text>
        </Header>
        <ScrollView>
          <Content>
            <Card style={styles.income}>
              <CardItem>
                <Body style={{alignItems: 'center'}}>
                  <Text>
                    Today's Income
                </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    {convertRupiah.convert(this.state.daynow)}
                  </Text>
                  <Text>
                    {Math.round(((this.state.daynow - this.state.yesterday) / this.state.yesterday) * 100)}% Yesterday
                </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.income}>
              <CardItem>
                <Body style={{alignItems: 'center'}}>
                  <Text>
                    Orders
                </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    {this.state.weeknow}
                  </Text>
                  <Text>
                    {(((this.state.weeknow - this.state.lastweek) / this.state.lastweek) * 100).toFixed(2)}% Last Week
                </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.income}>
              <CardItem>
                <Body style={{alignItems: 'center'}} >
                  <Text>
                    This Year's Income
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    {convertRupiah.convert(this.state.yearnow)}
                  </Text>
                  <Text>
                    {Math.round(((this.state.yearnow - this.state.yearlast) / this.state.yearlast) * 100)}% Last Year
                </Text>
                </Body>

              </CardItem>
            </Card>

            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 20, marginLeft: 32, fontWeight: 'bold' }}>Recent Orders</Text>
              {this.state.table.map((item) => {
                return (
                  <List>
                    <ListItem thumbnail>
                      <Body>
                        <Text>{item.id}</Text>
                        <Text note numberOfLines={1}>{item.product}</Text>
                        <Text note numberOfLines={2}>{convertRupiah.convert(item.amount)}</Text>
                      </Body>
                    </ListItem>
                  </List>)
              })}
            </View>

          </Content>
        </ScrollView>
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

export default Statistic

const styles = StyleSheet.create({
  list: {
    marginRight: 15,
  },
  income: {
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',

  }
})