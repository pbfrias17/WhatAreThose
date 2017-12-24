import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeView from './Views/HomeView';
import MediaSetupView from './Views/MediaSetupView';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView />;
    }
}
