import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { getAll } from '../../publics/actions/products'
import Axios from 'axios'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            totalData: [],
            totalPage: 0,
            clicks: 0,
        }
    }

    async componentDidMount() {
        this.getProducts()
    }

    async getProducts() {
        
        await Axios.get('http://192.168.43.130:5000/products')
        .then(result => {
            console.log("dahdkad")
            console.log(result)
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

    render() {
        return (
            <View>
                <Text>
                    sjias
                    ojfsjcsmsc
                </Text>
            </View>
        )
    }

}

const mapStateToProps = state => {
    console.log(this.state)
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products) ;
