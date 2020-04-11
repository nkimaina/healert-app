import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

const Stack = createStackNavigator();

const HomeScreen = () =>  <Text>Home</Text>

const AppRoutes = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default AppRoutes;