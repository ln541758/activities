import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "./Screens/Add";
import Home from "./Screens/Home";
import { ThemeProvider } from "./Components/ThemeContext";
import { DataProvider } from "./Components/DataContext";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ThemeProvider>
      <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3D348B",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={({ route }) => ({
              title:
                route.params?.type === "Activities"
                  ? "Add An Activity"
                  : "Add A Diet Entry",
              headerBackTitleVisible: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </DataProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
