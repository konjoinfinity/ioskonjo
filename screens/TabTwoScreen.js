import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Dialog from "react-native-dialog";
import { Button } from '@rneui/themed';

export default function TabTwoScreen() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [text, setText] = useState("");
  const [textref, setTextref] = useState("");
    var [list, setlist] = useState(Array(5).fill("").map((_, i) => ({ key: `${i}`, text: `Item #${i}` })));

    const deleteItem = (todel) => {
      var filteredArray = list.filter(item => {
        return (item.key !== todel)})
      alert(`Deleted" ${todel}`)
      setlist(filteredArray)
    }

    const editItem = (toedit) => {
      var toEdit = list.filter(item => {
        return (item.key == toedit)})
      setVisible(true)
      setText(toEdit)
      setTextref(toEdit)
    }

    const addItem = () => {
      setVisible1(true)
    }

    const handleCancel = (which) => {
      which == "edit" ? setVisible(false) : setVisible1(false)
    };

    const handleInput = (input) => {
      setText(input)
    };
  
    const handleSubmit = (which) => {
      if (which == "edit") {
      list[textref[0].key] = {"key": `${textref[0].key}`, "text": `${text}`}
      setVisible(false);
      } else {
        list.push({"key": `${list.length}`, "text": `${text}`})
        setVisible1(false)
      }
      
    };

  

  return (
    <SafeAreaView>
      <Dialog.Container visible={visible}>
      <Dialog.Title>Edit</Dialog.Title>
      <Dialog.Description>
        Modify Note
      </Dialog.Description>
      <Dialog.Input id="input" onChangeText={handleInput} defaultValue={text !== "" ? (text[0].text) : ("")}>
      </Dialog.Input>
      <Dialog.Button label="Cancel" onPress={()=>handleCancel("edit")} />
        <Dialog.Button label="Submit" onPress={()=>handleSubmit("edit")} />
    </Dialog.Container>
    <Dialog.Container visible={visible1}>
      <Dialog.Title>Add</Dialog.Title>
      <Dialog.Description>
        Add Note
      </Dialog.Description>
      <Dialog.Input id="input" onChangeText={handleInput} defaultValue={""}>
      </Dialog.Input>
      <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Submit" onPress={()=>handleSubmit("add")} />
    </Dialog.Container>
      <SwipeListView
            style={{maxHeight: "90%"}}
            data={list}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>{data.item.text}</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
              <View style={{display: "flex", flexDirection:"row"}}>
              <TouchableHighlight onPress={() => {editItem(data.item.key); rowMap[data.item.key].closeRow()}}
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
<Button raised={true} title='Add New' color={"success"} onPress={addItem}><Ionicon color={"white"} size={40} name="add-outline"></Ionicon></Button>
</SafeAreaView>
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
    padding: 30,
    alignItems: "center"
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