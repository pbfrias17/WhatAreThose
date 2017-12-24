import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

class HomeView extends Component {
    constructor(props) {
        super(props);

        this.onStart = this.onStart.bind(this);
    }
    
    onStart() {
        this.props.navigator.push({
            screen: 'MediaSetupView',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    WHAT ARE THOSE?!
                </Text>
                <Button onPress={ () => this.onStart() }>Start</Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        margin: 10,
    }
}

export default HomeView;