import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store";
import { Provider } from "react-redux";


import screens from "./src/screens";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={screens.HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Start"
          component={screens.Start}
          options={{ title: "Start" }}
        />
        <Stack.Screen
          name="List"
          component={screens.List}
          options={{ title: "List" }}
        />
        <Stack.Screen
          name="Info"
          component={screens.Info}
          options={{ title: "Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxProvider;
