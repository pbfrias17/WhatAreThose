import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ResultListHeader, ResultListItem } from '../Components/ResultList';

class ResultsView extends Component {
    constructor(props) {
        super(props);
    
        this.renderResults = this.renderResults.bind(this);
    }
    
    // Result objects are formatted the following way:
    //   Photo = results.concepts[]
    //   Video = results.frames[].data.concepts[] 
    renderResults() {
        let { results } = this.props;
        let dataExtractor;

        // Handling the result object depends on the media format.
        if (results.frames) {
            results = results.frames;
            dataExtractor = (result) => result.data.concepts;
        } else {          
            results = [results.concepts];
            dataExtractor = (result) => result;
        }

        return (
            results.map((result, i) => {
                return (
                    <View key={i} style={{width: '100%', height: '20%', flex: 1}}>
                        <ResultListHeader data={{title: 'Frame' + i}}/>
                        <FlatList 
                            data={dataExtractor(result)}
                            keyExtractor={
                                (item, index) => item.id
                            }
                            renderItem={
                                ({item}) => <ResultListItem result={item} />
                            }
                        />
                    </View>
                );
            })
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center',
            alignItems: 'center'}}>
                <Text style={styles.title}>r3sµ∫+5</Text>
                { this.renderResults() }
            </ScrollView>
        )
    }
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
    },
    title: {
        fontSize: 20,
        margin: 10,
    },
    list: {
        width: '100%',
        margin: 20,
    }
}

export default ResultsView;