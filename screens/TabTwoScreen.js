import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function TabTwoScreen() {
    const [list, setlist] = useState(Array(5)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` })));

    const deleteItem = (todel) => {
      var filteredArray = list.filter(item => {
        return (item.key !== todel)})
      alert(`Deleted" ${todel}`)
      setlist(filteredArray)
    }
  return (
    <View style={{display: "flex", flexDirection: "column"}}>
      <SwipeListView
            data={list}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>Item {data.item.text}</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
              <View style={{display: "flex", flexDirection:"row"}}>
              <TouchableHighlight onPress={() => deleteItem(data.item.key)}
                    style={styles.rowBack2}>
              <Text style={{paddingLeft: 15, color: "white", width: "50%"}}>Edit</Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => deleteItem(data.item.key)}
                    style={styles.rowBack}>
                      <Text style={{paddingRight: 15, color: "white", width: "50%"}}>Delete</Text></TouchableHighlight>
                      </View>
            )}
            leftOpenValue={100}
            rightOpenValue={-120}
        />
</View>
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
     padding: 10,
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
  padding: 30
},
rowBack2: {
  backgroundColor: "#FECB2E",
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  justifyContent: "flex-start",
  padding: 30
}
});