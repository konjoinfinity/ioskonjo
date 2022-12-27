/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabSixScreen from '../screens/TabSixScreen';
import ModalEditNoteScreen from '../screens/ModalEditNoteScreen';
import ModalAddNoteScreen from '../screens/ModalAddNoteScreen';
import TabFiveScreen from "../screens/TabFiveScreen"

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ title: "Periodic Table Of Snow" }} />
        <Stack.Screen name="ModalAddNote" component={ModalAddNoteScreen} options={{ title: "Add Note" }} />
        <Stack.Screen name="ModalEditNote" component={ModalEditNoteScreen} options={{ title: "Edit Note" }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

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
          headerTitle: "Periodic Table of Snow"
        })}
      />
      <BottomTab.Screen
        name="TabFive"
        component={TabFiveScreen}
        options={({ navigation }: RootTabScreenProps<'TabFive'>) => ({
          title: 'Weather Types',
          tabBarIcon: ({ color }) => <MCIcon name="weather-snowy-heavy" color={color} />,
          headerTitle: "Periodic Table of Snow"
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Snow Notes',
          tabBarIcon: ({ color }) => <MIcon name="notes" color={color} />,
          headerTitle: "Periodic Table of Snow"
  })}
      />
       {/* <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
          title: 'Bad Snow',
          tabBarIcon: ({ color }) => <Icon name="snowflake-3" color={color} />,
          headerTitle: "Periodic Table of Snow"
        })}
      /> */}
      {/* <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={({ navigation }: RootTabScreenProps<'TabFour'>) => ({
          title: 'Notes',
          tabBarIcon: ({ color }) => <MIcon name="notes" color={color} />,
          headerTitle: "Periodic Table of Snow"
        })}
      />  */}
      <BottomTab.Screen
        name="TabSix"
        component={TabSixScreen}
        options={({ navigation }: RootTabScreenProps<'TabSix'>) => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <MIcon name="search" color={color} />,
          headerTitle: "Periodic Table of Snow"
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
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

