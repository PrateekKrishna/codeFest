import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Home from "./app/screen/Home.js";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Codeforces from "./app/screen/Codeforces.js";
import Leetcode from "./app/screen/Leetcode.js";
import Atcoder from "./app/screen/Atcoder.js";
import Codechef from "./app/screen/Codechef.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import icon from './asset/icon.png'
import imagePath from "./constants/imagePath.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer

    >
      <Tab.Navigator
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} 
          options={{
            title: 'Code Fest',
            tabBarIcon: ({focused}) =>{
              return (
                <Image source={imagePath.home} />
              )
            }
          }}
        />
        <Tab.Screen name="Codeforces" component={Codeforces} 
          options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) =>{
              return (
                <Image source={imagePath.codeforces} />
              )
            }
          }}
        />
        <Tab.Screen name="LeetCode" component={Leetcode} 
          options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) =>{
              return (
                <Image source={imagePath.leetcode} />
              )
            }
          }}
        />
        <Tab.Screen name="Atcoder" component={Atcoder} 
          options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) =>{
              return (
                <Image source={imagePath.atcoder} style = {styles.imageAtcoder} />
              )
            }
          }}
        />
        <Tab.Screen name="Codechef" component={Codechef} 
          options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) =>{
              return (
                <Image source={imagePath.codechef} />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageAtcoder:{
    width: 24,
    height: 24,
  }
});
