import React, { useState } from "react";
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
import registerAPI from "../api/axiosRegister";

const RegisterScreen = ({ navigation }) => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [loadingToggle, setLoadingToggle] = useState(false);

  const handleClick = () => {
    setLoadingToggle(true);
    if (passwordState === confirmPasswordState) {
      registerAPI(emailState, passwordState);
    }
  };
  return (
    <NativeBaseProvider>
      <View>
        <VStack space={4} alignItems="center">
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#1F41BB",
              marginBottom: 16,
              marginTop: 16,
            }}
          >
            Create account
          </Text>
          <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>
            Create an account so you can explore all the existing jobs
          </Text>

          <Input
            size="xl"
            placeholder="Email"
            variant="rounded"
            onChangeText={(text) => setEmailState(text)}
          />
          <Input
            size="xl"
            placeholder="Password"
            variant="rounded"
            onChangeText={(text) => setPasswordState(text)}
          />
          <Input
            size="xl"
            placeholder="Confirm Password"
            variant="rounded"
            onChangeText={(text) => setConfirmPasswordState(text)}
          />
          <Center>
            <Button
              style={{
                minWidth: 357,
                backgroundColor: "#1F41BB",
                minHeight: 50,
                marginTop: 16,
              }}
              onPress={handleClick}
              isLoading={loadingToggle}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sign Up
              </Text>
            </Button>
          </Center>
          <Center>
            <Button variant="link" onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: "grey",
                  fontWeight: "700",
                  marginTop: 16,
                }}
              >
                Already have an account?
              </Text>
            </Button>
          </Center>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};

export default RegisterScreen;
