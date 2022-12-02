import { StyleSheet, SectionList, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Component, useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function TabTwoScreen() {
    const [list, setlist] = useState(Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` })));

    const deleteItem = (todel) => {
      var filteredArray = list.filter(item => {
        return (item.key !== todel)})
      alert(`Deleted" ${todel}`)
      setlist(filteredArray)
    }
  return (
    <SwipeListView
    disableRightSwipe={true}
            data={list}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>I am {data.item.text} in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                    <TouchableHighlight onPress={() => deleteItem(data.item.key)}
                    style={styles.rowBack}>
                      <Text style={{paddingRight: 20}}>Delete</Text></TouchableHighlight>
            )}
            leftOpenValue={100}
            rightOpenValue={-100}
        />
  );
            }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     color: "black",
     padding: 10,
     backgroundColor: "red"

   },
   rowFront: {
    backgroundColor: '#eeeeee',
    flex: 1,
    flexDirection: "column",
    padding: 30
},
rowBack: {
  backgroundColor: "#FC3D39",
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  justifyContent: "flex-end",
},
});