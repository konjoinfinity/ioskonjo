import React, { Component, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Modal,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import { Card, Text, Input, Button } from '@ui-kitten/components';
import GestureRecognizer from "react-native-swipe-gestures"

const logskey = "logs";
var eachlog;

export default function TabTwoScreen({ navigation }) {
const [logmodal, setLogmodal] = useState(false)
const [log, setLog] = useState("")
const [logs, setLogs] = useState([])
const [textinputheight, setTextinputheight] = useState(0)
const [editlog, setEditlog] = useState("")
const [editlogmodal, setEditlogmodal] = useState(false)
const [position, setPosition] = useState("")
const [logselected, setLogselected] = useState("")
const [location, setLocation] = useState("")
const [weather, setWeather] = useState("")
const [companions, setCompanions] = useState("")
const [occasion, setOccasion] = useState("")

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        getLogs();
      });
      return unsubscribe;
  }, [navigation])


  const getLogs = async() => {
    try {
      await AsyncStorage.getItem(logskey, (error, result) => {
        result !== null && result !== "[]"
          ? setLogs(JSON.parse(result))
          : setLogs([]);
      });
    } catch (error) {
      console.log(error);
    }
  }

//   async addLog() {
//     try {
//       if (log !== "") {
//         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//         var newLog = logs;
//         var logDate = new Date().toLocaleDateString();
//         newLog.unshift({ log: log, dateCreated: logDate, location: location, weather: weather, companions: companions, occasion: occasion });
//         this.setState({ log: "", logmodal: false, logs: newLog, location: "", weather: "", companions: "", occasion: "" });
//         await AsyncStorage.setItem(logskey, JSON.stringify(newLog));
//         setTimeout(() => {
//           this.scrolltop.scrollTo({ y: 90, animated: true });
//         }, 750);
//       } else {
//         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//         Alert.alert(
//           "Please enter some text.",
//           "",
//           [
//             {
//               text: "Ok",
//               onPress: () =>
//                 Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
//             },
//           ],
//           { cancelable: false }
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async deleteLog(log) {
//     try {
//       var filtered = logs.filter((deleted) => deleted !== log);
//       this.setState({
//         log: "",
//         editlogmodal: false,
//         logs: filtered,
//         editlog: "",
//       });
//       await AsyncStorage.setItem(logskey, JSON.stringify(filtered));
//       setTimeout(() => {
//         this.scrolltop.scrollTo({ y: 0, animated: true });
//       }, 750);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   scrollToLogRef(id) {
//     try {
//       this.refs["log" + id].measure((ox, oy, width, height, px, py) => {
//         const offsetY = oy + 90;
//         this.scrolltop.scrollTo({ y: offsetY });
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async editLog(position) {
//     try {
//       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//       var editlogs = logs;
//       editlogs[position] = {log: editlog, location: location, weather: weather, companions: companions, occasion: occasion};
//       this.setState({ logs: editlogs, editlog: "", editlogmodal: false, location: "", weather: "", companions: "", occasion: "" });
//       await AsyncStorage.setItem(logskey, JSON.stringify(editlogs));
//       setTimeout(() => {
//         this.scrollToLogRef(position);
//       }, 750);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   confirmDelete(log) {
//     try {
//       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//       Alert.alert(
//         "Are you sure you want to delete this log?",
//         "Please confirm.",
//         [
//           {
//             text: "Yes",
//             onPress: () => {
//                 Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
//               this.deleteLog(log);
//             },
//           },
//           {
//             text: "No",
//             onPress: () => {
//               Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//             },
//           },
//         ],
//         { cancelable: false }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }

return (
    <View>
        {/* <GestureRecognizer
  style={{flex: 1}}
  onSwipeUp={ () => this.setState({logmodal: true}) }
  onSwipeDown={ () => {this.setState({logmodal: false}), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); } }
>
        <Modal
          animationType="slide"
          visible={logmodal}
          presentationStyle="formSheet"
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 10,
              backgroundColor: "#1c1c1e"
            }}
            onStartShouldSetResponder={() => this.loginput.blur()}
          >
            <View
              style={{
                margin: 10,
                width: Dimensions.get("window").width * 0.9,
                height: Dimensions.get("window").height * 0.56,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "400",
                  marginBottom: 10,
                }}
              >
                Add New Snow Note
              </Text>
              <Input
                placeholder="Notes"
                value={log}
                ref={(input) => {
                  this.loginput = input;
                }}
                onFocus={() => this.loginput.focus()}
                onChangeText={(log) => this.setState({ log })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
              <Input
                placeholder="Location"
                value={location}
                ref={(input) => {
                  this.locationinput = input;
                }}
                onChangeText={(location) => this.setState({ location })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
               <Input
                placeholder="Weather"
                value={weather}
                ref={(input) => {
                  this.weatherinput = input;
                }}
                onChangeText={(weather) => this.setState({ weather })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
              <Input
                placeholder="Companions"
                value={companions}
                ref={(input) => {
                  this.companionsinput = input;
                }}
                onChangeText={(companions) => this.setState({ companions })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
               <Input
                placeholder="Occasion"
                value={occasion}
                ref={(input) => {
                  this.occasioninput = input;
                }}
                onChangeText={(occasion) => this.setState({ occasion })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 25,
                  paddingBottom: 5,
                }}
              >
                <Button
                style={{margin: 5}}
                appearance="filled"
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    this.setState({ log: "", logmodal: false });
                  }}
                >
                  <Text>
                    Cancel
                  </Text>
                </Button>
                <Button
                style={{margin: 5}}
                  onPress={() => this.addLog()}
                >
                  <Text>
                    Save
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
        </GestureRecognizer>
        <GestureRecognizer
  style={{flex: 1}}
  onSwipeUp={ () => this.setState({editlogmodal: true}) }
  onSwipeDown={ () => {this.setState({editlogmodal: false}), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); } }
>
        <Modal
          animationType="slide"
          visible={editlogmodal}
          presentationStyle="formSheet"
        >
          <View
            style={{
                backgroundColor:"#1c1c1e",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onStartShouldSetResponder={() => this.editloginput.blur()}
          >
            <View
              style={{
                margin: 10,
                width: Dimensions.get("window").width * 0.9,
                height: Dimensions.get("window").height * 0.56,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "400",
                  margin: 20,
                }}
              >
                Edit Snow Note
              </Text>
              <Input
                value={editlog}
                ref={(input) => {
                  this.editloginput = input;
                }}
                onFocus={() => this.editloginput.focus()}
                onChangeText={(editlog) => this.setState({ editlog })}
                multiline={true}
                onBlur={() => {
                  Keyboard.dismiss();
                }}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
               <Input
                placeholder="Location"
                value={location}
                ref={(input) => {
                  this.locationinput = input;
                }}
                onChangeText={(location) => this.setState({ location })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
               <Input
                placeholder="Weather"
                value={weather}
                ref={(input) => {
                  this.weatherinput = input;
                }}
                onChangeText={(weather) => this.setState({ weather })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
              <Input
                placeholder="Companions"
                value={companions}
                ref={(input) => {
                  this.companionsinput = input;
                }}
                onChangeText={(companions) => this.setState({ companions })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
               <Input
                placeholder="Occasion"
                value={occasion}
                ref={(input) => {
                  this.occasioninput = input;
                }}
                onChangeText={(occasion) => this.setState({ occasion })}
                multiline={true}
                blurOnSubmit={false}
                onContentSizeChange={(event) => {
                  this.setState({
                    textinputheight: event.nativeEvent.contentSize.height,
                  });
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 25,
                  paddingBottom: 5,
                }}
              >
                <Button
                style={{margin: 5}}
                appearance="filled"
                  onPress={() => {
                    this.confirmDelete(logselected);
                  }}
                >
                  <Text>
                    Delete
                  </Text>
                </Button>
                <Button
                style={{margin: 5}}
                appearance="filled"
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    this.setState({ editlog: "", editlogmodal: false });
                  }}
                >
                  <Text>
                    Cancel
                  </Text>
                </Button>
                <Button
                style={{margin: 5}}
                appearance="filled"
                  onPress={() => this.editLog(position)}
                >
                  <Text>
                    Save
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
        </GestureRecognizer> */}
        <View>
        <ScrollView>
            <View alignItems="center" justifyContent="center">
            <Text style={{ color: "white", fontSize: 28, padding: 10 }}>
                Snow Notes
              </Text>
              </View>
              {logs && logs.length > 0 ? (eachlog = logs.map((log, id) => {
        return (
          <View
            key={id}>
            <Card status='info'>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems:"left" }}>
              <Text>
                {log.log}
              </Text>
              <Text>
                Location: {log.location}
              </Text>
              <Text>
                Weather: {log.weather}
              </Text>
              <Text>
                Companions: {log.companions}
              </Text>
              <Text>
                Occasion: {log.occasion}
              </Text>
              <Text>
                {log.dateCreated}
              </Text>
            </View>
            <Button
            style={{height: Dimensions.get("window").height * 0.08}}
            size="giant"
            appearance="filled"
              onPress={() => {
                    this.setEditlogmodal(true),
                    this.setEditlog(log.log)
                    this.setPosition(id),
                    this.setLogselected(log),
                    this.setLocation(log.location) 
                    this.setWeather(log.weather) 
                    this.setCompanions(log.companions), 
                    this.setOccasion(log.occasion)
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}>
              <Icon
              color={"white"}
                name="playlist-edit" />
            </Button>
            </View>
            </Card>
          </View>
          
        )
      })) : ("")}
      </ScrollView>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
              appearance="filled"
                onPress={() =>
                navigation.navigate("ModalAddNote")

                }
              >
                <MIcon color={"white"} name="add-circle" size={50} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
}
