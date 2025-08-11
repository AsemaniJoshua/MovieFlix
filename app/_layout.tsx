import { Stack } from "expo-router";
import "./global.css"; // Import global styles
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>

      {/* Hidding the Device Status App */}
      <StatusBar hidden={true} />

      {/* Global Stack for navigation */}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="movies/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
