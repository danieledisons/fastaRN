import React, { useState, useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../context/actions/registerActions";

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register);

  console.log(8080, registerData);

  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailAddressState, setEmailAddressState] = useState("");
  const [loadingToggle, setLoadingToggle] = useState(false);

  const handleClick = () => {
    setLoadingToggle(true);
    dispatch(registerUser(firstNameState, lastNameState, emailAddressState));
  };

  useEffect(() => {
    if (registerData.data !== null) {
      setLoadingToggle(false);
      // navigation.navigate("Home");
    }
  }, [registerData.data]);
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
            placeholder="First Name"
            variant="rounded"
            onChangeText={(text) => setFirstNameState(text)}
          />
          <Input
            size="xl"
            placeholder="Last Name"
            variant="rounded"
            onChangeText={(text) => setLastNameState(text)}
          />
          <Input
            size="xl"
            placeholder="Email Address"
            variant="rounded"
            onChangeText={(text) => setEmailAddressState(text)}
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
