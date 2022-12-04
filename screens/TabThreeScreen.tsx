import { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button, Avatar } from "react-native-elements"

interface Props {
  name: string;
  avatar: string;
  genre: string;
  lyrics: string;
}

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [songs, setSongs] = useState([]);

  const getData = async () => {
    await fetch("https://638bd25dd2fc4a058a4e6502.mockapi.io/song", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        setSongs(res);
      }).catch(error => {
        console.log(String(error))
      });
    }

  useEffect(() => {
    getData();
  }, []);

  function Songs({ name, avatar, genre, lyrics}: Props) {
    return (
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
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Avatar
        size={100}
        source={{
          uri: `${avatar}`,
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
          {name}
        </Text>
      </View>
    </View>
  </View>
  <View style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", width: "60%"}}>
  <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          {genre}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          {lyrics}
        </Text>
  </View>
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
    )
}
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {songs.length !== 0 ? (
          songs.map(({name, avatar, genre, lyrics, id}) => (
          <Songs name={name} avatar={avatar} genre={genre} lyrics={lyrics} key={lyrics} />
          ))
          ):("")}
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
