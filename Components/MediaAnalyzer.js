import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Button from 'apsl-react-native-button';
import FileSystem from 'react-native-fs';
import Clarifai from 'clarifai';
import { encodeBase64, analyze } from '../Services';

class MediaAnalyzer extends Component {
    constructor(props) {
        super(props);

        this.state = { analyzingInProgress: false };

        this.renderAnalyzeIndicator.bind(this);
        this.onPressAnalyze = this.onPressAnalyze.bind(this);
    }

    onPressAnalyze() {
        console.log('pressed');
        let { media } = this.props;
        
        if (this.props.media !== '') {
            let isVideo = this.props.mediaType == 'video';

            this.setState({ analyzingInProgress: true });
            encodeBase64(media).then(encoded => {
                analyze(encoded, isVideo).then(      
                    res => {
                        this.setState({ analyzingInProgress: false });  
                        this.props.onDoneAnalyze(res.outputs[0].data);
                    },
                    err => {
                        this.setState({ analyzingInProgress: false });  
                        console.log(err);         
                    }
                );
            });
        } else {
            console.log('choose media before analyzing');
        }
    }

    renderAnalyzeIndicator() {
        if (this.state.analyzingInProgress)
            return <ActivityIndicator animating={true} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() => this.onPressAnalyze()}>
                    ∆nå∫¥zE
                </Button>
                { this.renderAnalyzeIndicator() }
            </View>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#76f07e',
        borderRadius: 10,
        borderWidth: 0,
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff'
    }
};

export default MediaAnalyzer;