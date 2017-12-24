import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ResultListHeader extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text>{this.props.data.title}</Text>
            </View>
        );
    }
}

class ResultListItem extends Component {
    render() {
        let { result } = this.props;
        let value = Math.trunc(Number.parseFloat(result.value) * 1000) / 1000;

        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        );
    }
}

styles = {
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#cff9b1',
        height: 40,
        width: '100%',
        marginTop: 8,
        marginBottom: 3,
        padding: 10
    },
    itemContainer: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        margin: 5,
        padding: 10
    },
    name: {
        flex: 2,
        fontSize: 16,
    },
    value: {
        flex: 1,
        fontSize: 16,        
    }

};

export {
    ResultListHeader,
    ResultListItem,
};