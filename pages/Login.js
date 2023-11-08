import React from "react";
import { View, Text } from "react-native";
import {
  NativeBaseProvider,
  VStack,
  Box,
  Stack,
  Input,
  Center,
  Button,
} from "native-base";

const Loginscreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <VStack space={4} alignItems="center">
          <Box>
            <VStack alignItems="center">
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#1F41BB",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              >
                Login Here
              </Text>

              <Text
                style={{ fontSize: 20, color: "black", textAlign: "center" }}
              >
                Welcome back you've been missed
              </Text>
            </VStack>
            {"\n"}
            <Input size="xl" placeholder="Email" variant="rounded" />
            {"\n"}
            <Input size="xl" placeholder="Password" variant="rounded" />
            <Stack direction="column">
              <Center>
                <Button variant="link" isDisabled>
                  <Text
                    style={{
                      color: "#1F41BB",
                      fontWeight: "700",
                      marginTop: 16,
                    }}
                  >
                    Forgot your password?
                  </Text>
                </Button>
              </Center>
              <Center>
                <Button
                  style={{
                    minWidth: 357,
                    backgroundColor: "#1F41BB",
                    minHeight: 50,
                    marginTop: 16,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Sign In
                  </Text>
                </Button>
              </Center>
              <Center>
                <Button
                  variant="link"
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontWeight: "700",
                      marginTop: 16,
                    }}
                  >
                    Create a new account
                  </Text>
                </Button>
              </Center>
            </Stack>
          </Box>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};

export default Loginscreen;
