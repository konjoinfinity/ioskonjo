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
                <View style={{ alignSelf: "flex-start", width: Dimensions.get('window').width * 0.8, padding: 15 }}>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", paddingTop: Dimensions.get('window').height * 0.55, fontSize: 18, textAlign: "left", fontWeight: "bold", paddingBottom: 3 }}>{this.props.text}</Text>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: 17, textAlign: "left", paddingBottom: 3 }}>{this.props.members}</Text>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: 14, textAlign: "left", paddingBottom: 3 }}>{this.props.desc}</Text>
                    <Text style={{ flexDirection: "row", alignContent: "flex-start", fontSize: 14, textAlign: "left" }}>{this.props.creator}</Text>
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
                <Text style={styles.noMoreCardsText}>No Konjos Nearby</Text>
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
    }

    handleRefresh() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        var cards = [
            {
                key: 0,
                text: 'DC Music Jam 🎶',
                members: 'Members: 8',
                desc: 'Description: Jam for local musicians',
                creator: 'Creator: konjo@konjo.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 1,
                text: 'Must Love Dogs 🦮',
                members: 'Members: 2',
                desc: 'Description: A group for dog lovers',
                creator: 'Creator: bow@wow.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 2,
                text: 'Pizza Lovers 🍕',
                members: 'Members: 3',
                desc: 'Description: Pupatella is the best!',
                creator: 'Creator: pizza@pizza.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 3,
                text: 'DC Developers 👨🏻‍💻',
                members: 'Members: 10',
                desc: 'Description: Learn to code, share your skills',
                creator: 'Creator: bill@gates.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 4,
                text: 'Running Enthusiasts 🏃🏻‍♂️',
                members: 'Members: 4',
                desc: 'Description: Lets go for a run',
                creator: 'Creator: running@shoe.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 5,
                text: 'Music Producers 🎧',
                members: 'Members: 1',
                desc: 'Description: Record and produce your music',
                creator: 'Creator: music@produce.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 6,
                text: 'Must Love Cats 🐈',
                members: 'Members: 5',
                desc: 'Description: Group for cat lovers',
                creator: 'Creator: meow@meow.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
            },
            {
                key: 7,
                text: 'Grease Monkeys 🚗',
                members: 'Members: 6',
                desc: 'Description: Fix up and talk about cars',
                creator: 'Creator: drive@cars.com',
                backgroundColor: "#" + ("000" + (Math.random() * (1 << 24) | 0).toString(16)).substr(-6)
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
        marginTop: Dimensions.get('window').height * 0.05,
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