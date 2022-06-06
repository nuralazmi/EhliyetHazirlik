import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import components from "./src/components";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { setConnect } from "./src/store/app";

import screens from "./src/screens";

const Stack = createNativeStackNavigator();


const App = () => {
  const netInfo = useNetInfo();

  return (
    netInfo.isConnected ? <NavigationContainer>
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
        <Stack.Screen
          name="Result"
          component={screens.Result}
          options={{ title: "Result" }}
        />
        <Stack.Screen
          name="Wait"
          component={screens.Wait}
          options={{ title: "Wait" }}
        />
      </Stack.Navigator>
    </NavigationContainer> : <components.Offline />
  );
};

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxProvider;
