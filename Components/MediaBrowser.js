import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tab from 'react-native-segmented-control-tab';
import MediaPicker from 'react-native-image-picker';
import Button from 'react-native-button';

class MediaBrowser extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedIndex: 0, mediaPicked: false, media: '' };
        this.showPicker = this.showPicker.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.handlePicker = this.handlePicker.bind(this);
        this.renderMediaInfo = this.renderMediaInfo.bind(this);
    }
    
    showPicker() {
        const mediaType = (this.state.selectedIndex == 0) ? 'photo' : 'video';
        const pickerOptions = { mediaType };
        MediaPicker.showImagePicker(pickerOptions, (res) => this.handlePicker(res));
    }

    handleTab(index) {
        this.setState({
            ...this.state,
            selectedIndex: index,
        })
    }

    handlePicker(res) {
        if (!res.didCancel) {
            let mediaType = (this.state.selectedIndex == 0) ? 'photo' : 'video';
            this.setState({ media: res });
            this.props.onPicked(res, mediaType);
        }
    }

    renderMediaInfo() {
        let fileName = this.state.media !== '' ? 
                        this.state.media.fileName : 
                        'No Media Selected';

        return <Text style={styles.textStyle}>{fileName}</Text>;
    }

    render() {
        return (
            <View style={styles.container}>
                <Tab 
                    values={['Photo', 'Video']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={ (index) => this.handleTab(index)}
                />
                <View style={styles.browser}>
                    { this.renderMediaInfo() }
                    <Button style={styles.buttonStyle} onPress={ () => this.showPicker() }>
                        [˚o]
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        width: '95%',
        margin: 10,
        padding: 10,
    },
    browser: {
        backgroundColor: '#E5ECEE',
        borderRadius: 10,
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
    },
    textStyle: {
        flex: 2,
        margin: 10,
    },
    buttonStyle: {
        flex: 1,
        margin: 10,
        color: 'blue',
    }
}

export default MediaBrowser;