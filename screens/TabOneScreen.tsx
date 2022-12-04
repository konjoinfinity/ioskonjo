import { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button, Avatar } from "react-native-elements"



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [users, setUsers] = useState("");

  const getData = async () => {
    await fetch("https://638bd25dd2fc4a058a4e6502.mockapi.io/user", {
      method: "GET"
    })
      .then(res => res.text())
      .then(res => {
        setUsers(res);
      }).catch(error => {
        console.log(String(error))
      });
    }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            flex: 1,
            flexDirection: 'column',
            borderRadius: 5,
            alignItems: 'center',
            marginHorizontal: 10,
            height: 250,
            marginBottom: 10,
          }}
        >
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                size={145}
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                }}
                activeOpacity={0.7}
                avatarStyle={{ borderRadius: 145 / 2 }}
                overlayContainerStyle={{ backgroundColor: 'transparent' }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    marginLeft: -15,
                  }}
                >
                  Paul Allen
                </Text>
              </View>
            </View>
          </View>
          <Button title={"Profile"}></Button>
          <View
            style={{
              width: 300,
              borderWidth: 0.5,
              borderColor: 'rgba(222, 223, 226, 1)',
              marginHorizontal: 20,
              height: 1,
              marginVertical: 10,
            }}
          />
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
