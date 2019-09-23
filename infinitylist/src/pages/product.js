import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Product extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.title
    });

    render() {
        const { navigation } = this.props;
        return (
            <WebView source={{ uri: navigation.state.params.product.url }} />
        );
    }
}