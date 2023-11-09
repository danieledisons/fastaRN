import React, { useEffect } from "react";
import { NativeBaseProvider, Center, VStack } from "native-base";
import { Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../context/actions/userActions";

const Displayscreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <NativeBaseProvider>
      <Center>
        <Image
          source={{ uri: `${data?.data?.avatar}` }}
          style={{ width: 200, height: 200, marginTop: 16 }}
        />
      </Center>
      <Center>
        <VStack>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#1F41BB",
              marginBottom: 16,
              marginTop: 16,
            }}
          >
            {data ? data?.data?.email : "No data available"}
          </Text>
          <Center>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#1F41BB",
                marginBottom: 16,
                marginTop: 16,
              }}
            >
              {data ? data?.data?.first_name : "No data available"}
              {data ? data?.data?.last_name : "No data available"}
            </Text>
          </Center>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Displayscreen;
