import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, View } from 'native-base';
import { Text } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'

import {
    StyleSheet,
} from 'react-native';

class UpdateCart extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            //   console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#27ae60" }} >
                    <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 5, color: "white" }}>Update Product</Text>
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Product</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Price</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Description</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Image</Label>
                            <Button onPress={this.chooseFile.bind(this)} style={{ width: 100, borderRadius: 40, marginRight: 120 }}>
                                <Text style={{marginLeft: 12}}>Choose File</Text></Button>
                        </Item>
                        <Item stackedLabel>
                            <Label>Category</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Quantity</Label>
                            <Input />
                        </Item>
                        <View style={styles.Button}>
                            <Button full rounded success  >
                                <Text>Save Changes</Text>
                            </Button>
                        </View>

                    </Form>
                </Content>
            </Container>
        );
    }
}

export default UpdateCart

const styles = StyleSheet.create({
    Button: {
        width: 100,
        marginLeft: 130,
        marginTop: 20

    }
})