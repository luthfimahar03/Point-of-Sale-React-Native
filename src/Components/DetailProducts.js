import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Body, View, Icon, Left, transparent, Col } from 'native-base';
import { BASE_URL } from 'react-native-dotenv'

class DetailProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_product: this.props.navigation.getParam('id')
        }
    }

    detailProduct = async () => {
        await Axios.get(`${BASE_URL}/products/` + (this.state.id_product))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    // async componentDidMount(){
    //     await this.detailProduct()
    // }

    // detailProduct = async () => {
    //     event.preventDefault()
    //     const data = new FormData(event.target)
    //     console.log(data)
    //     await Axios.get('http://192.168.43.1305432/products', data)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    render() {
        console.log(this.state.id_product)
        return (
            <Container>
                <Header>
                    <Col style={{marginTop: 5 }} >
                        <Button transparent light style={{paddingRight: 30}} >
                            <Icon name='arrow-back' />
                        </Button>
                    </Col>
                    <Col size={3}>
                    </Col>
                </Header>
                <Content>
                    <Card style={{ flex: 0, alignItems: 'center' }}>
                        <CardItem>
                            <Text>Judul Products</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={{ alignItems: 'center' }}>
                                <Image source={require('../Components/img/cart.png')} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>Price</Text>
                                <Text>Description</Text>
                                <Text>category</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 }}>
                                    <Button style={{ marginRight: 20, backgroundColor: "#27ae60", borderRadius: 20 }} onPress={() => {this.props.navigation.navigate('UpdateCart')}}><Text>Update</Text></Button>
                                    <Button style={{borderRadius: 20}}><Text>Delete</Text></Button>
                                </View>

                            </Body>
                        </CardItem>
                        <CardItem>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Text>Qty: </Text>
                                <Text>1,926 Items</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default DetailProducts