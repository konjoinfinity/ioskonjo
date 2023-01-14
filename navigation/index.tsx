import { Fontisto, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, Platform, View, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import InfoModalScreen from '../screens/InfoModalScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabFourScreen from '../screens/TabFourScreen';
import ModalEditNoteScreen from '../screens/ModalEditNoteScreen';
import ModalAddNoteScreen from '../screens/ModalAddNoteScreen';
import TabTwoScreen from "../screens/TabTwoScreen"

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ title: "Periodic Table of Snow©" }} />
        <Stack.Screen name="InfoModal" component={InfoModalScreen} options={{ title: "Info" }} />
        <Stack.Screen name="ModalAddNote" component={ModalAddNoteScreen} options={{ title: "Add Note" }} />
        <Stack.Screen name="ModalEditNote" component={ModalEditNoteScreen} options={{ title: "Edit Note" }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Periodic Table',
          tabBarIcon: ({ color }) => <Icon name="snowflake-4" color={color} />,
          headerTitle: () => (
            <View style={{display: "flex", alignItems: "center", flexDirection:"row", justifyContent: "center"}}>
              <Text style={{fontSize: Dimensions.get('window').width * 0.06, fontWeight:"500", color: colors.text}}>Periodic Table of Snow</Text><Text style={{color: colors.text}}>©</Text></View>),              
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('InfoModal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Weather Types',
          tabBarIcon: ({ color }) => <MCIcon name="weather-snowy-heavy" color={color} />,
          headerTitle: () => (
            <View style={{display: "flex", alignItems: "center", flexDirection:"row", justifyContent: "center"}}>
              <Text style={{fontSize: Dimensions.get('window').width * 0.06, fontWeight:"500", color: colors.text}}>Periodic Table of Snow</Text><Text style={{color: colors.text}}>©</Text></View>),  
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
          headerTitle: () => (
          <View style={{display: "flex", alignItems: "center", flexDirection:"row", justifyContent: "center"}}>
            <Text style={{fontSize: Dimensions.get('window').width * 0.06, fontWeight:"500", color: colors.text}}>Periodic Table of Snow</Text><Text style={{color: colors.text}}>©</Text></View>),  
          title: 'Snow Notes',
          tabBarIcon: ({ color }) => <MIcon name="notes" color={color} />
  })}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <MIcon name="search" color={color} />,
          headerTitle: () => (
            <View style={{display: "flex", alignItems: "center", flexDirection:"row", justifyContent: "center"}}>
              <Text style={{fontSize: Dimensions.get('window').width * 0.06, fontWeight:"500", color: colors.text}}>Periodic Table of Snow</Text><Text style={{color: colors.text}}>©</Text></View>),  
        })}
      />
    </BottomTab.Navigator>
  );
}

function Icon(props: {
  name: React.ComponentProps<typeof Fontisto>['name'];
  color: string;
}) {
  return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;
}

function MIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function MCIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}