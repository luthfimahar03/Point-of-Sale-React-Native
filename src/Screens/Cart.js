import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Footer, FooterTab, Button, Icon, Item, List, ListItem, Right } from 'native-base';


const convertRupiah = require('rupiah-format')

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: this.props.navigation.getParam('cart')
        }
    }


    render() {
        const cart = this.state.cartItem.data
        return (
            <Container>
                <Header style={{ backgroundColor: "#27ae60" }} >
                    <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 5, color: "white" }}>Cart</Text>
                </Header>
                <Content>
                    {cart.map(item => {
                        return (
                            <List>
                                <ListItem avatar>
                                    <Body style={{ marginLeft: -5 }}>
                                        <Text>{item.name}</Text>
                                        <Text note>{item.count} x {convertRupiah.convert(item.price)}</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ marginTop: 20 }}>{convertRupiah.convert(item.count * item.price)}</Text>
                                    </Right>
                                </ListItem>
                                <Button full light onPress={this.checkout}>
                                    <Text>Check Out</Text>
                                </Button>
                            </List>
                        )
                    })}

                </Content>
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