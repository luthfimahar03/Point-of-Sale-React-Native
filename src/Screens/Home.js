import React, { Component } from 'react';
import Axios from 'axios'
const convertRupiah = require('rupiah-format')
import { AsyncStorage } from 'react-native';
import { BASE_URL } from 'react-native-dotenv'
import { connect } from "react-redux"



import {
    Text,
    StyleSheet,
    Image
} from 'react-native';

import {
    Icon,
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Header,
    Item,
    Input,
    Card,
    CardItem,
    Body,
    View,
    Fab
} from 'native-base'
import { getData } from '../publics/actions/products';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            totalData: [],
            totalPage: 0,
            clicks: 0,
            cartItems: [],
            product: [],
            id: [],
            clicked: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    componentDidMount() {
        this.getProducts(), []
    }

    async getProducts() {
        const result = await getData(this.state.clicks)
        this.props.dispatch(result)
        this.setState({
            data: this.props.products.productList,
            totalPage: this.props.products.totalPage,
            totalData: this.props.products.totalData
        })        
    }

    handleAddToCart(item) {
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach(cp => {
                if (cp.id === item.id) {
                    cp.count += 1;
                    productAlreadyInCart = true;
                }
            });
            if (!productAlreadyInCart) {
                cartItems.push({ ...item, count: 1 });
            }
            AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };


        });
    }

    render() {
        return (
            <Container>

                <Header searchBar rounded style={{ backgroundColor: "#27ae60" }}>
                    <Item style={styles.search}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" style={{ marginTop: 5 }} />
                        <Icon name="ios-people" />
                    </Item>
                    <View style={styles.login}>
                        {/* <Button transparent light ><Icon active name="person"
                        /></Button> */}
                    </View>
                </Header>
                <Content>
                    {this.state.data.map((item) => {
                        return (
                            <Card style={styles.card}>
                                <View>
                                    <CardItem  >
                                        <Body style={{ alignItems: "center" }} >
                                            <Image source={{ uri: `${BASE_URL}/${item.image}` }} style={styles.image} />
                                            <Text style={styles.judul}>{item.name}</Text>
                                            <Text style={styles.harga}>{convertRupiah.convert(item.price)}</Text>
                                            <Button style={{ backgroundColor: "#27ae60" }} onPress={() => { this.handleAddToCart(item) }}>
                                                <Text style={styles.textbutton}>Add</Text>
                                                <Icon style={{ marginLeft: 1 }} name="cart" /></Button>
                                        </Body>
                                    </CardItem>
                                </View>
                            </Card>)
                    })}
                </Content>

                {/* <Button full rounded success style={{ width: 100 }} onPress={() => this.props.navigation.navigate('Cart', {
                    cart: {
                        data: this.state.cartItems
                    }
                })} >

                    <Text>Save Changes</Text>
                </Button> */}

                <Fab
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#ff5252', marginBottom: 50 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('Cart', {
                        cart: {
                            data: this.state.cartItems
                        }
                    })}>
                    <Icon name="cart" />
                </Fab>

                {/* FooterTabs */}
                <Footer >
                    <FooterTab style={{ backgroundColor: "#27ae60" }}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home" style={{color: "white"}} />
                            <Text style={{color: "white"}}>Home</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Manage')} >
                            <Icon name="paper"  style={{color: "white"}} />
                            <Text style={{color: "white"}}>Manage</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Statistic')}>
                            <Icon name="pie"  style={{color: "white"}} />
                            <Text style={{color: "white"}}>Statistic</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="setting" type="AntDesign"  style={{color: "white"}}/>
                            <Text style={{color: "white"}}>Setting</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
      products: state.products
    }
  }

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    card: {
        backgroundColor: "red",
        marginRight: 20,
        marginLeft: 10
    },

    judul: {
        fontSize: 25
    },

    harga: {
        fontSize: 25
    },

    search: {
        marginRight: 30
    },
    image: {
        height: 200,
        width: 200,
    },
    textbutton: {
        paddingHorizontal: 10,
        color: "white"
    },

    login: {
        marginTop: 10
    }
})
{/*   
<Container>
                    <Header />
                    <Content />
                    <Footer>
                        <FooterTab>
                            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name="home" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical >
                                <Icon name="camera" />
                                <Text>Manage</Text>
                            </Button>
                            <Button vertical active>
                                <Icon active name="person" />
                                <Text>Cart</Text>
                            </Button>
                            <Button vertical onPress={() => this.props.navigation.navigate('Statistic')}>
                                <Icon name="person" />
                                <Text>Statistic</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container> 

 <View style={{ flex: 1, position: "relative" }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
                            <TextInput placeholder="hello" style={{ borderWidth: 1, borderColor: "black", borderRadius: 40, paddingLeft: 45 }} />
                            <Image source={require("../Components/img/search.png")} style={{ position: "absolute", width: 30, height: 30, top: 10, left: 10 }} />
                        </View>

                        <View>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ paddingHorizontal: 20 }}>
                                    <Image source={require("../Components/img/plus.png")} style={{ width: "100%", height: 200, width: 200, borderRadius: 20 }} />
                                </View>
                            </View>
                            <View style={{}}>
                                <Text>Asus Zenfone</Text>
                                <Text>Harga</Text>
                                <View style={{ width: 50 }}>
                                    <Button success><Text style={{ fontSize: 15 }}> Add </Text></Button>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={{ height: 60, flexDirection: "row", backgroundColor: "#32ff7e" }} >
                        <Button>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Image source={require('../Components/img/house.png')} style={{ width: 30, height: 30, margin: 2 }} />
                                <Text style={{ fontSize: 15, color: "black" }}>
                                    Home
                        </Text>
                            </View>
                        </Button>

                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Components/img/plus.png')} style={{ width: 30, height: 30, margin: 2 }} />
                            <Text style={{ fontSize: 15, color: "black" }}>
                                Manage
                        </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Components/img/cart.png')} style={{ width: 30, height: 30, margin: 2 }} />
                            <Text style={{ fontSize: 15, color: "black" }}>
                                Cart
                     </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Components/img/diagram.png')} style={{ width: 30, height: 30, margin: 2 }} />
                            <Text style={{ fontSize: 15, color: "black" }}>
                                Statistic
                     </Text>
                        </View>
                    </View>
                </View> */}

