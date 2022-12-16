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
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-between", alignItems:"center", marginBottom: Dimensions.get('window').height * 0.1}}>
            <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold"}}>#88</Text> 
            <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold"}}>CR</Text>
            </View>
                <Text style={{ fontSize: Dimensions.get('window').height * 0.04, padding: 5, fontStyle: "italic", marginBottom: Dimensions.get('window').height * 0.1 }}>{this.props.kind}</Text>
                <Text style={{ fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold", padding: 5, marginBottom: 10 }}>{this.props.title}</Text>
                <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 5 }}>{this.props.desc}</Text>
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
        LogBox.ignoreLogs(['Animated.event']);
        LogBox.ignoreLogs(['componentWillReceiveProps']);
    }

    handleRefresh() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        var cards = [
            {
                key: 0,
                kind: 'Good Snow ❄️',
                title: 'Groomed',
                desc: '"Farmed" snow that is rolled, smoothed, tilled, manicured into a consistent surface.',
                backgroundColor: "#6A9ED0"
            },
            {
                key: 1,
                kind: 'Good Snow ❄️',
                title: 'Windbuff',
                desc: 'Fine snow that is redistributed by the wind and consolidated.',
                backgroundColor: "#6A9ED0"
            },
            {
                key: 2,
                kind: 'Good Snow ❄️',
                title: 'Crud',
                desc: 'Heavily skied and cut-up powder, uneven consistency & depth; Needs grooming, now!',
                backgroundColor: "#6A9ED0"
            },
            {
                key: 3,
                kind: 'Marginal Snow ❅',
                title: 'Mashed Potatoes',
                desc: 'Soft lumpy spring snow, heavy like the namesake side dish.',
                backgroundColor: "#B5C4D7"
            },
            {
                key: 4,
                kind: 'Marginal Snow ❅',
                title: 'Breakable Crust',
                desc: 'A hard layer that gives way to soft snow underneath; a tough go.',
                backgroundColor: "#B5C4D7"
            },
            {
                key: 5,
                kind: 'Marginal Snow ❅',
                title: 'Bulletproof',
                desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
                backgroundColor: "#B5C4D7"
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
        height: Dimensions.get('window').height * 0.75,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 15,
        padding: 15
    },
    noMoreCardsText: {
        fontSize: 22,
    }
})