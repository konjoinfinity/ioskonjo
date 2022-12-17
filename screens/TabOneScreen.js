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
            // add global component for all screens
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
                anum: "1",
                acronymn: "P",
                kind: 'Exquisite Snow ❄️',
                title: 'Powder (Pow)',
                desc: 'Fresh, uncompacted, light snow;  8%-11% avg. moisture across North America; Yum!',
                backgroundColor: "#5B9BD5",
            },
            {
                key: 1,
                anum: "2",
                acronymn: "CP",
                kind: 'Exquisite Snow ❄️',
                title: 'Champagne Powder®*',
                desc: 'Fresh, light very dry, loose, uncompacted; 6% average moisture - *Registered Trademark of Steamboat Ski Resort.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 2,
                anum: "3",
                acronymn: "OP",
                kind: 'Exquisite Snow ❄️',
                title: 'Optimal Powder',
                desc: 'Medium density 8%; Light for easy turns w/ “body" for floatation.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 3,
                anum: "4",
                acronymn: "UT",
                kind: 'Exquisite Snow ❄️',
                title: 'Untracted Powder',
                desc: 'Fresh, light, dry, uncompacted snow without tracks. None!',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 4,
                anum: "5",
                acronymn: "CS",
                kind: 'Exquisite Snow ❄️',
                title: 'Cold Smoke',
                desc: 'Very cold light snow, a plume behind rider appears to float in air.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 5,
                anum: "6",
                acronymn: "F",
                kind: 'Exquisite Snow ❄️',
                title: 'Fresh (Freshies)',
                desc: 'New-fallen soft snow, untracked, ready to go.',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 6,
                anum: "7",
                acronymn: "CK",
                kind: 'Exquisite Snow ❄️',
                title: 'Chokable',
                desc: 'Powder so fine and eep = hard to breath; Might need a snorkel!',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 7,
                anum: "8",
                acronymn: "HS",
                kind: 'Exquisite Snow ❄️',
                title: 'Hero Snow',
                desc: 'Snow so deep & soft you get super powers; So forgiving it will make you feel like a...',
                backgroundColor: "#5B9BD5"
            },
            {
                key: 8,
                anum: "9",
                acronymn: "SO",
                kind: 'Exquisite Snow ❄️',
                title: 'New Snow',
                desc: "Snow that has fallen since the previous day's report made by a ski resort or website.",
                backgroundColor: "#5B9BD5"
            },
            // {
            //     key: 9,
            //     anum: "5",
            //     acronymn: "CS",
            //     kind: 'Exquisite Snow ❄️',
            //     title: 'Cold Smoke',
            //     desc: 'Very cold light snow, a plume behind rider appears to float in air.',
            //     backgroundColor: "#5B9BD5"
            // },
            // {
            //     key: 10,
            //     anum: "5",
            //     acronymn: "CS",
            //     kind: 'Exquisite Snow ❄️',
            //     title: 'Cold Smoke',
            //     desc: 'Very cold light snow, a plume behind rider appears to float in air.',
            //     backgroundColor: "#5B9BD5"
            // },
            // {
            //     key: 5,
            //     anum: "2",
            //     acronymn: "CP",
            //     kind: 'Ideal Snow ❄️',
            //     title: 'Windbuff',
            //     desc: 'Fine snow that is redistributed by the wind and consolidated.',
            //     backgroundColor: "#8EAADB"
            // },
            
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


// add global style component for all screens
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