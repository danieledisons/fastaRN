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
  Alert,
  IconButton,
  CloseIcon,
  HStack,
  Collapse,
} from "native-base";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetState } from "../context/actions/authActions";

// dispatch(resetState())

const Loginscreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);

  const [loadingToggle, setLoadingToggle] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [screenOpen, setScreenOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setScreenOpen(true);
    dispatch(resetState());
  }, []);

  const handleEmailInput = (Text) => {
    setEmailInput(Text);
  };
  const handlePasswordInput = (Text) => {
    setPasswordInput(Text);
  };

  const handleLogin = () => {
    setLoadingToggle(true);
    dispatch(loginUser(emailInput, passwordInput));
  };

  useEffect(() => {
    if (authData.token !== null) {
      setLoadingToggle(false);
      navigation.navigate("Display");
    }
  }, [authData.token]);

  useEffect(() => {
    if (authData?.error) {
      setShow(true);
      setDisplayError(true);
      setErrorMessage(`${authData.error}`);
      setLoadingToggle(false);
    }
  }, [authData?.error]);
  console.log("error", authData?.error);

  return (
    <NativeBaseProvider>
      {displayError ? (
        <Center>
          <Collapse isOpen={show}>
            <Alert
              maxW="400"
              status="error"
              colorScheme="error"
              style={{ minWidth: "100vw" }}
            >
              <VStack space={2} flexShrink={1} w="100%">
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="coolGray.800"
                    >
                      Error Message
                    </Text>
                  </HStack>
                  <IconButton
                    onPress={() => setShow(false)}
                    variant="unstyled"
                    _focus={{
                      borderWidth: 0,
                    }}
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "coolGray.600",
                    }}
                  />
                </HStack>
                <Box
                  pl="6"
                  _text={{
                    color: "coolGray.600",
                  }}
                >
                  Input the Correct Email and Password. {errorMessage}
                </Box>
              </VStack>
            </Alert>
          </Collapse>
        </Center>
      ) : null}
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
            <Input
              onChangeText={handleEmailInput}
              size="xl"
              placeholder="Email"
              variant="rounded"
            />
            {"\n"}
            <Input
              onChangeText={handlePasswordInput}
              size="xl"
              placeholder="Password"
              variant="rounded"
            />
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
                  onPress={handleLogin}
                  isLoading={loadingToggle}
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
