import React from "react";
import { NativeBaseProvider } from "native-base";
import { Text } from "react-native";

export const Display = () => {
  return (
    <NativeBaseProvider>
      <Text>Display User Info</Text>
    </NativeBaseProvider>
  );
};
