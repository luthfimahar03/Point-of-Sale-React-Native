import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'


class FooterTabs extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Manage')} >
                            <Icon name="camera" />
                            <Text>Manage</Text>
                        </Button>
                        <Button vertical active onPress={() => this.props.navigation.navigate('Cart')}>
                            <Icon active name="person" />
                            <Text>Cart</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Statistic')}>
                            <Icon name="person" />
                            <Text>Statistic</Text>
                        </Button>
                    </FooterTab>
                </Footer>

        );
    }
}
export default FooterTabs 