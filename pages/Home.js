import React from "react";
import { View, Text, Image } from "react-native";
import { NativeBaseProvider, Button, Box, HStack, Center } from "native-base";

const Homescreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <Center>
          <Image
            source={require("../assets/welcome1.png")}
            style={{ width: 363, height: 370, marginBottom: 30 }}
          />
        </Center>
        <Center>
          <Text
            style={{
              marginBottom: 80,
              fontSize: 30,
              fontWeight: "bold",
              color: "#1F41BB",
              marginTop: 16,
            }}
          >
            Enjoy the experience
          </Text>
        </Center>
        <HStack space={3} justifyContent="center">
          <Box alignItems="center">
            <Button
              style={{
                minWidth: 150,
                backgroundColor: "#1F41BB",
                minHeight: 50,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>Login</Text>
            </Button>
          </Box>
          <Box alignItems="center">
            <Button
              style={{
                minWidth: 150,
                backgroundColor: "#1F41BB",
                borderColor: "#1F41BB",
                fontWeight: "bold",
                minHeight: 50,
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                {" "}
                Create User
              </Text>
            </Button>
          </Box>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};

export default Homescreen;
