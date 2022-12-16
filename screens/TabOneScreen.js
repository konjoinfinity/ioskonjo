import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, LogBox
} from 'react-native';
import 'react-native-gesture-handler';
import SwipeCards from 'react-native-swipe-cards'
import * as Haptics from 'expo-haptics';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
                <View style={{ alignSelf: "flex-start", width: Dimensions.get('window').width * 0.8, padding: 25 }}>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: Dimensions.get('window').height * 0.04, textAlign: "left", padding: 5, fontStyle: "italic", marginBottom: 50 }}>{this.props.kind}</Text>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: Dimensions.get('window').height * 0.04, textAlign: "left", fontWeight: "bold", padding: 5, marginBottom: 10 }}>{this.props.title}</Text>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: Dimensions.get('window').height * 0.03, textAlign: "left", padding: 5 }}>{this.props.desc}</Text>
                </View>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={{ backgroundColor: "#81c784", borderRadius: 15, padding: 10, margin: 20 }} onPress={this.props.handleRefresh}>
                    <Text style={{ color: "white", fontSize: 22, textAlign: "center" }}>Refresh</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    componentDidMount() {
        this.handleRefresh()
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    handleRefresh() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        var cards = [
            {
                key: 0,
                kind: 'Exquisite Snow ❄️',
                title: 'Groomed',
                desc: '"Farmed" snow that is rolled, smoothed, tilled, manicured into a consistent surface.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 1,
                kind: 'Exquisite Snow ❄️',
                title: 'Windbuff',
                desc: 'Fine snow that is redistributed by the wind and consolidated.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 2,
                kind: 'Exquisite Snow ❄️',
                title: 'Groomed',
                desc: '"Farmed" snow that is rolled, smoothed, tilled, manicured into a consistent surface.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 3,
                kind: 'Ideal Snow ❄️',
                title: 'Windbuff',
                desc: 'Fine snow that is redistributed by the wind and consolidated.',
                backgroundColor: "#8EAADB"
            },
            ,
            {
                key: 4,
                kind: 'Ideal Snow ❄️',
                title: 'Windbuff',
                desc: 'Fine snow that is redistributed by the wind and consolidated.',
                backgroundColor: "#8EAADB"
            },
            ,
            {
                key: 5,
                kind: 'Ideal Snow ❄️',
                title: 'Windbuff',
                desc: 'Fine snow that is redistributed by the wind and consolidated.',
                backgroundColor: "#8EAADB"
            },
            
        ];
        this.setState({ cards: cards })
    }

    handleYup(card) {
        console.log(`Join for ${card.text}`)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
    handleNope(card) {
        console.log(`Nope for ${card.text}`)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
    handleMaybe(card) {
        console.log(`Maybe for ${card.text}`)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SwipeCards
                    cards={this.state.cards}
                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards handleRefresh={this.handleRefresh} />}
                    stack={true}
                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                    handleMaybe={this.handleMaybe}
                    hasMaybeAction={true}
                    smoothTransition={false}
                />
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    card: {
        marginTop: Dimensions.get('window').height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.75,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 15,
    },
    noMoreCardsText: {
        fontSize: 22,
    }
})