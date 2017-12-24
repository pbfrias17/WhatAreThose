import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View
} from 'react-native';
import MediaBrowser from '../Components/MediaBrowser';
import MediaAnalyzer from '../Components/MediaAnalyzer';

class MediaSetupView extends Component {
    constructor(props) {
        super(props);

        this.state = { media: '', mediaType: '' };

        this.onPicked = this.onPicked.bind(this);
        this.onDoneAnalyze = this.onDoneAnalyze.bind(this);
    }

    onPicked(media, mediaType) {
        this.setState({ media, mediaType });
    }

    onDoneAnalyze(results) {
        this.props.navigator.push({
            screen: 'ResultsView',
            passProps: {
                results
            },
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.message}>Choose a photo/video where you wondered:</Text>
            <Text style={styles.title}>WHAT ARE THOSE?!</Text>
            <MediaBrowser onPicked={ (media, type) => this.onPicked(media, type) } />
            <MediaAnalyzer 
                media={ this.state.media }
                mediaType={ this.state.mediaType }
                onDoneAnalyze={ results => this.onDoneAnalyze(results) }/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: '100%',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        margin: 20,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 15,
    },
});

export default MediaSetupView;