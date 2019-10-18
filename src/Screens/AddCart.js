import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'

import ImagePicker from 'react-native-image-picker';

import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button
} from 'native-base';

class AddCart extends Component {
    constructor(props) {
        super(props);

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
                <Header style={{ backgroundColor: "#27ae60" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 5, color: "white" }}>Add Product</Text>
                </Header>

                <Content>
                    <View style={{ marginTop: 20 }}>
                        <Form>
                            <Item stackedLabel >
                                <Label>Product Name</Label>
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
                                <Button primary onPress={this.chooseFile.bind(this)} style={{ elevation: 0, width: 130, marginTop: 10, marginLeft: 15 }}><Text>Choose File</Text></Button>
                            </Item>
                            
                            <Item stackedLabel>
                                <Label>Category</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Quantity</Label>
                                <Input />
                            </Item>
                            <Button full style={{ backgroundColor: "#27ae60", borderRadius: 20, width: 100, alignSelf: 'center', marginTop: 30 }}>
                                <Text>Save Changes</Text>
                            </Button>
                        </Form>
                    </View>

                </Content>
            </Container>
        );
    }
}
export default AddCart