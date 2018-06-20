import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.hello}>Hello from Hello.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        color: '#00FF00',
        backgroundColor: '#000000',
        fontSize: 24
    }
})