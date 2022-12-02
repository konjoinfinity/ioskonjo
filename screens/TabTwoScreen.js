import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Dialog from "react-native-dialog";

export default function TabTwoScreen() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
    const [list, setlist] = useState(Array(5)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` })));

    const deleteItem = (todel) => {
      var filteredArray = list.filter(item => {
        return (item.key !== todel)})
      alert(`Deleted" ${todel}`)
      setlist(filteredArray)
    }

    const editItem = (toedit) => {
      var toEdit = list.filter(item => {
        return (item.key == toedit)})
      // alert(`Deleted" ${todel}`)
      // setlist(filteredArray)
      console.log(toEdit[0].text)
      setVisible(true)
      setText(toEdit)
    }

    const handleCancel = () => {
      setVisible(false);
    };
  
    const handleSubmit = () => {
      // The user has pressed the "Delete" button, so here you can do your own logic.
      // ...Your logic
      setVisible(false);
    };

  return (
    <View>
      <Dialog.Container visible={visible}>
      <Dialog.Title>Account delete</Dialog.Title>
      <Dialog.Description>
        Do you want to delete this account? You cannot undo this action.
      </Dialog.Description>
      <Dialog.Input label={text[0].text}>
      </Dialog.Input>
      <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Submit" onPress={handleSubmit} />
    </Dialog.Container>
      <SwipeListView
            data={list}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>Item {data.item.text}</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
              <View style={{display: "flex", flexDirection:"row"}}>
              <TouchableHighlight onPress={() => editItem(data.item.key)}
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