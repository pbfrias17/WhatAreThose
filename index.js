import { Navigation } from 'react-native-navigation';
import MediaSetupView from './Views/MediaSetupView';
import ResultsView from './Views/ResultsView';

process.nextTick = setImmediate;

Navigation.registerComponent('WhatAreThose', () => MediaSetupView);
Navigation.registerComponent('ResultsView', () => ResultsView);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'WhatAreThose',
        title: 'Choose Media',
        animationType: 'slide-down',
    }
});
