import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';

export function Card({navigation, cardData}){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, margin: 0.5}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.027, fontWeight: "bold", padding: 5, marginTop: 10, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([
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
        {
            key: 9,
            anum: "10",
            acronymn: "DE",
            kind: 'Exquisite Snow ❄️',
            title: 'Deep',
            desc: "Extremely deep snow, often knee/waist/chest; Not only in ski movies.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 10,
            anum: "11",
            acronymn: "BT",
            kind: 'Exquisite Snow ❄️',
            title: 'Bottomless',
            desc: "Snow so deep and light (4%-6%), it has minimal flotation and skiis sink through it.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 11,
            anum: "12",
            acronymn: "FR",
            kind: 'Exquisite Snow ❄️',
            title: 'Free Refills',
            desc: "Snowing so hard that the powder fills-in all previous tracks between each run.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 12,
            anum: "13",
            acronymn: "WR",
            kind: 'Exquisite Snow ❄️',
            title: 'White Room',
            desc: "Powder run with so many faces shots, it's truly disorienting.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 13,
            anum: "14",
            acronymn: "PG",
            kind: 'Exquisite Snow ❄️',
            title: 'Pow Pow Gnar Gnar',
            desc: "Fresh, light, dry, soft, loose, and GOOD!",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 14,
            anum: "15",
            acronymn: "ES",
            kind: 'Exquisite Snow ❄️',
            title: 'Ego Snow',
            desc: "Snow so good, it's very easy to turn on, thereby boosting ones perceived skill level.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 15,
            anum: "16",
            acronymn: "CC",
            kind: 'Exquisite Snow ❄️',
            title: 'Creamed Corn',
            desc: 'Smooth "corn" snow occuring during that precious period: after frozen & before slush.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 16,
            anum: "17",
            acronymn: "DD",
            kind: 'Exquisite Snow ❄️',
            title: 'Diamond Dust',
            desc: 'Small snow crystals that fall on a clear day and sparkle in direct sunshine;  Magical!',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 17,
            anum: "18",
            acronymn: "BL",
            kind: 'Exquisite Snow ❄️',
            title: 'Blower',
            desc: 'Very light low-density snow, it can blow into the air, and blows into face, while skiing.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 18,
            anum: "19",
            acronymn: "VR",
            kind: 'Exquisite Snow ❄️',
            title: 'Virgin',
            desc: 'Un-skied, trackless, uncompacted snow; Exciting stuff, for sure.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 19,
            anum: "20",
            acronymn: "FL",
            kind: 'Exquisite Snow ❄️',
            title: 'Fluff',
            desc: 'Fresh, soft snow, very light and fluffy; Exciting and dreamy!',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 20,
            anum: "21",
            acronymn: "GF",
            kind: 'Exquisite Snow ❄️',
            title: 'Goose Feathers',
            desc: 'A Vermont term for large flakes of fresh snow;  An excellent ski.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 21,
            anum: "22",
            acronymn: "SW",
            kind: 'Exquisite Snow ❄️',
            title: 'Sweet',
            desc: 'Very very good snow, easy to turn on, or in, or do most anything; Perfect for your taste.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 22,
            anum: "23",
            acronymn: "UTA",
            kind: 'Exquisite Snow ❄️',
            title: '"Greatest Snow On Earth"',
            desc: 'Slogan appears Utah license plates in 1985; Debatable claim ** Said the man from Colorado.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 23,
            anum: "24",
            acronymn: "PP",
            kind: 'Ideal Snow ❄️',
            title: 'Packed Powder',
            desc: 'New snow compacted by grooming or skier traffic;  Delightful!',
            backgroundColor: "#8EAADB"
        },
        {
            key: 24,
            anum: "25",
            acronymn: "CY",
            kind: 'Ideal Snow ❄️',
            title: 'Corduroy',
            desc: 'Freshly groomed snow exhibiting ridges or ribbed surface, soft much like the cloth.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 25,
            anum: "26",
            acronymn: "C",
            kind: 'Ideal Snow ❄️',
            title: 'Corn',
            desc: 'Course niblets of snow forming during brief period between frozen and slushy surface.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 26,
            anum: "27",
            acronymn: "CH",
            kind: 'Ideal Snow ❄️',
            title: 'Chaulk',
            desc: 'Wind-driven snow that is smoothly distributed, lightly packed and delightful.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 27,
            anum: "28",
            acronymn: "BU",
            kind: 'Ideal Snow ❄️',
            title: 'Butter (Cream)',
            desc: 'Smooth and silky like the dairy product, but can change quickly.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 28,
            anum: "29",
            acronymn: "WS",
            kind: 'Ideal Snow ❄️',
            title: 'White Suede',
            desc: 'Smooth hard snow w/ a mysterious surface that allows for easy, smooth carving;  Nice!',
            backgroundColor: "#8EAADB"
        },
        {
            key: 29,
            anum: "30",
            acronymn: "SU",
            kind: 'Ideal Snow ❄️',
            title: 'Sugar',
            desc: 'Small granules but smooth and sweet like a confection, only colder and quicker.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 30,
            anum: "31",
            acronymn: "CO",
            kind: 'Ideal Snow ❄️',
            title: 'Chop',
            desc: 'Cut-up powder with many lines tracted, but still nice & enjoyable.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 31,
            anum: "32",
            acronymn: "SK",
            kind: 'Ideal Snow ❄️',
            title: 'Skift',
            desc: 'Very light new snow, in such small amount it will not drift;  Nice.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 32,
            anum: "33",
            acronymn: "SD",
            kind: 'Ideal Snow ❄️',
            title: 'Soufflé Dure',
            desc: 'Naturally packed, usually by the wind, firm but lovely snow; Tasty as the name says.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 33,
            anum: "34",
            acronymn: "SQ",
            kind: 'Ideal Snow ❄️',
            title: 'Squeaky (Screaming Lobsters)',
            desc: 'Very cold, very dry, emitting a high pitch sound as walked on.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 34,
            anum: "35",
            acronymn: "VL",
            kind: 'Ideal Snow ❄️',
            title: 'Velvet',
            desc: 'Smooth hard snow w/ forgiving firm surface that allows for easy, smooth carving; A joy.',
            backgroundColor: "#8EAADB"
        },
        {
            key: 35,
            anum: "36",
            acronymn: "G",
            kind: 'Good Snow ❄️',
            title: 'Groomed',
            desc: '"Farmed" snow that is rolled, smoothed, tilled, manicured into a consistent surface.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 36,
            anum: "37",
            acronymn: "SL",
            kind: 'Good Snow ❄️',
            title: 'Sluff',
            desc: 'Loose snow set into motion by a skier; but NOT an avalanche.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 37,
            anum: "38",
            acronymn: "FG",
            kind: 'Good Snow ❄️',
            title: 'Frozen Granular',
            desc: 'Cold sugary snow whose granules have frozen together.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 38,
            anum: "39",
            acronymn: "GR",
            kind: 'Good Snow ❄️',
            title: 'Granular',
            desc: 'Like Frozen Granular, but with larger-sized loose granules.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 39,
            anum: "40",
            acronymn: "SH",
            kind: 'Good Snow ❄️',
            title: 'Surface Hoar',
            desc: 'Needle-like shaped crystals of frost, forms on clear nights when snow is colder than air.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 40,
            anum: "41",
            acronymn: "FF",
            kind: 'Good Snow ❄️',
            title: 'Fluffernutter',
            desc: '3-6 inches of fluff on top of a chunky sub-surface, alternating the ride as smooth and not.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 41,
            anum: "42",
            acronymn: "WN",
            kind: 'Good Snow ❄️',
            title: 'Windbuff',
            desc: 'Fine snow that is redistributed by the wind and consolidated.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 42,
            anum: "43",
            acronymn: "MM",
            kind: 'Good Snow ❄️',
            title: 'Machine-Made (Man-Made)',
            desc: 'Snow manufactured by water, compressed air, snow guns; Dense.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 43,
            anum: "44",
            acronymn: "TO",
            kind: 'Good Snow ❄️',
            title: 'Tracked Out',
            desc: 'Late-day powder, very cut-up and uneven, you will be bounced around; need to groom.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 44,
            anum: "45",
            acronymn: "B",
            kind: 'Good Snow ❄️',
            title: 'Base',
            desc: 'Completely consolidated snow; Reported depth of snow cover by ski area.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 45,
            anum: "46",
            acronymn: "FS",
            kind: 'Good Snow ❄️',
            title: 'Flour-sifter Snow',
            desc: 'A Montana term for fine small-flaked snow.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 46,
            anum: "47",
            acronymn: "LP",
            kind: 'Marginal Snow ❄️',
            title: 'Loud Powder',
            desc: 'Euphemism for "Ice" or "Blue" or extreme hardpack; Noisy snow.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 47,
            anum: "48",
            acronymn: "LG",
            kind: 'Good Snow ❄️',
            title: 'Loose Granular',
            desc: 'Smaller-sized loose granules, or pellets, of snow, uncohesive.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 48,
            anum: "49",
            acronymn: "HP",
            kind: 'Good Snow ❄️',
            title: 'Hardpack',
            desc: 'Firmly consolidated and compressed old snow; slick and fast; Bring your edges...',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 49,
            anum: "50",
            acronymn: "GP",
            kind: 'Good Snow ❄️',
            title: 'Graupel',
            desc: '"Soft hail" occurs when flakes form a lumpy mass, also a heavily rimed particle.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 50,
            anum: "51",
            acronymn: "N",
            kind: 'Good Snow ❄️',
            title: 'Neve',
            desc: 'Young granular snow, partly melted, refrozen and compacted; At times, soft and nice.',
            backgroundColor: "#9CC3E5"
        },
        {
            key: 51,
            anum: "52",
            acronymn: "SP",
            kind: 'Marginal Snow ❄️',
            title: 'Sposh',
            desc: "Many years ago, a New Englander's term for a soft slushy snow",
            backgroundColor: "#DEEAF6"
        },
        {
            key: 52,
            anum: "53",
            acronymn: "MC",
            kind: 'Marginal Snow ❄️',
            title: 'Marble Crust',
            desc: "Extremely hard icy snow surface, usually found in small, round patches; Like the stone.",
            backgroundColor: "#DEEAF6"
        },
        {
            key: 53,
            anum: "54",
            acronymn: "CR",
            kind: 'Marginal Snow ❄️',
            title: 'Crud',
            desc: 'Heavily skied and cut-up powder, uneven consistency & depth; Needs grooming, now!',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 54,
            anum: "55",
            acronymn: "BO",
            kind: 'Marginal Snow ❄️',
            title: 'Boilerplate',
            desc: 'Dense hardpack, solid frozen;  Hard to set an edge = "slip & slide".',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 55,
            anum: "56",
            acronymn: "VA",
            kind: 'Marginal Snow ❄️',
            title: 'Variable',
            desc: 'Experiencing different conditions during a single run; (e.g., Pow to Crud to Slop to...).',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 56,
            anum: "57",
            acronymn: "SC",
            kind: 'Marginal Snow ❄️',
            title: 'Sierra Cement',
            desc: 'Very heavy, wet, snow often brought by Pacific storms;  Ugh!',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 57,
            anum: "58",
            acronymn: "CSC",
            kind: 'Marginal Snow ❄️',
            title: 'Colorado Super Chunk',
            desc: 'Heavy, wet snow a few days after a spring snow storm.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 58,
            anum: "59",
            acronymn: "WP",
            kind: 'Marginal Snow ❄️',
            title: 'Wind Packed',
            desc: 'Firm and consolidated, wind shaped and packed; Keeps your attention if odd shapes.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 59,
            anum: "60",
            acronymn: "CD",
            kind: 'Marginal Snow ❄️',
            title: 'Chunder',
            desc: 'Powder with large chunks of ice*** and snow cluttering an otherwise fine ski run. ***Sometimes left behind by grooming machine.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 60,
            anum: "61",
            acronymn: "MP",
            kind: 'Marginal Snow ❅',
            title: 'Mashed Potatoes',
            desc: 'Soft lumpy spring snow, heavy like the namesake side dish.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 61,
            anum: "62",
            acronymn: "MA",
            kind: 'Marginal Snow ❅',
            title: 'Mank',
            desc: 'Older powder, cooked by the spring sun; so very heavy & tough.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 62,
            anum: "63",
            acronymn: "SoF",
            kind: 'Marginal Snow ❅',
            title: 'Salt on Formica',
            desc: 'Feels, looks like salt granules on a cold, icy, hardpack surface.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 63,
            anum: "64",
            acronymn: "CL",
            kind: 'Marginal Snow ❅',
            title: 'Chocolate Chip',
            desc: 'A nasty mix of loose, gravel or the tips of buried rocks poking through top of snow.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 64,
            anum: "65",
            acronymn: "BS",
            kind: 'Marginal Snow ❅',
            title: 'Brown Snow',
            desc: 'Spring conditions with mud showing through, and mixing in; Blech!',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 65,
            anum: "66",
            acronymn: "STY",
            kind: 'Marginal Snow ❅',
            title: 'Styrofoam',
            desc: 'Hollow-sounding snow, with same feel if skiing on this stuff.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 66,
            anum: "67",
            acronymn: "EF",
            kind: 'Marginal Snow ❅',
            title: 'Eastern Firm',
            desc: 'A public relations spin that aims to make the conditions seem more palatable; Means "Ice".',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 67,
            anum: "68",
            acronymn: "DoC",
            kind: 'Marginal Snow ❅',
            title: 'Dust on Crust',
            desc: 'A thin layer of new snow topping an icy, hardpack below.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 68,
            anum: "69",
            acronymn: "WB",
            kind: 'Marginal Snow ❅',
            title: 'Washboard',
            desc: 'Frozen corduroy, that makes unusual hum sounds and vibrations.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 69,
            anum: "70",
            acronymn: "CW",
            kind: 'Marginal Snow ❅',
            title: 'Chowder',
            desc: 'Heavy, wet, lumpy snow, chunky like the name says, thick soup.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 70,
            anum: "71",
            acronymn: "CA",
            kind: 'Marginal Snow ❅',
            title: 'Cascade Concrete',
            desc: 'Very heavy wet dense snow, typical of the Pacific NW maritme.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 71,
            anum: "72",
            acronymn: "FN",
            kind: 'Marginal Snow ❅',
            title: 'Firn',
            desc: 'Multi-year-old snow, a well-bonded snow, frozen solid; Can be difficult to ski on.',
            backgroundColor: "#DEEAF6"
        },
        {
            key: 72,
            anum: "73",
            acronymn: "CF",
            kind: 'Tricky Snow ❅',
            title: 'Cauliflower',
            desc: 'Lumpy, ungroomed and dense snow located near recently operating snow gun.',
            backgroundColor: "#ECECEC"
        },
        {
            key: 73,
            anum: "74",
            acronymn: "SPR",
            kind: 'Tricky Snow ❅',
            title: 'Spring Conditions',
            desc: 'Highly variable snow found late in season, prone to freeze/thaw.',
            backgroundColor: "#ECECEC"
        },
        {
            key: 74,
            anum: "75",
            acronymn: "BC",
            kind: 'Tricky Snow ❅',
            title: 'Breakable Crust',
            desc: 'A hard layer that gives way to soft snow underneath; a tough go.',
            backgroundColor: "#ECECEC"
        }
    ]);

    useEffect(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      }, [])

        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (<Card key={cardData.key} cardData={cardData} navigation={navigation} /> )) : ("")}               
                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.8,
      backgroundColor: "#1c1c1e",
      borderRadius: 5,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
      fontSize: Dimensions.get('window').height * 0.08
    }
  });