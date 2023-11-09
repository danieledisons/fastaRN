import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, ScrollView } from "react-native";
import {
  Text,
  View,
  Box,
  NativeBaseProvider,
  AspectRatio,
  Stack,
  Heading,
  Center,
} from "native-base";

const UsersViewScreen = () => {
  const [usersData, setUsersData] = useState(null);
  const fetchOtherUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsersData(response?.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("page loaded");
    fetchOtherUsers();
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        {usersData?.map((user) => {
          return (
            <Center>
              <Box
                Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box alignItems="center" style={{ marginTop: 8 }}>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{ uri: `${user?.avatar}` }}
                      alt="users image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Center space={2}>
                    <Heading size="md" ml="-1">
                      {user?.first_name}
                      {user?.last_name}
                    </Heading>
                    <Text fontWeight="400">{user?.email}</Text>
                  </Center>
                </Stack>
              </Box>
            </Center>
          );
        })}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default UsersViewScreen;
