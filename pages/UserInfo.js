import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Button,
  Center,
  Modal,
  FormControl,
  Input,
} from "native-base";
import { Text, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../context/actions/registerActions";

const UserInfoScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register);

  const firstName = registerData?.data?.first_name;
  const lastName = registerData?.data?.last_name;
  const emailAddress = registerData?.data?.email_address;

  const [updatedFirstName, setUpdatedFirstName] = useState(`${firstName}`);
  const [updatedLastName, setUpdatedLastName] = useState(`${lastName}`);
  const [updatedEmailAddress, setUpdatedEmailAddress] = useState(
    `${emailAddress}`
  );

  const handleUpdate = () => {
    dispatch(
      registerUser(updatedFirstName, updatedLastName, updatedEmailAddress)
    );
    setModalVisible(false);
  };

  const handleFirstNameChange = (Text) => {
    setUpdatedFirstName(Text);
  };
  const handleLastNameChange = (Text) => {
    setUpdatedLastName(Text);
  };

  const handleEmailChange = (Text) => {
    setUpdatedEmailAddress(Text);
  };

  return (
    <NativeBaseProvider>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Edit Details</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>First Name</FormControl.Label>
              <Input
                ref={initialRef}
                value={updatedFirstName}
                onChangeText={handleFirstNameChange}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Last Name</FormControl.Label>
              <Input
                value={updatedLastName}
                onChangeText={handleLastNameChange}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email Address</FormControl.Label>
              <Input
                value={updatedEmailAddress}
                onChangeText={handleEmailChange}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button isLoading={registerData?.loading} onPress={handleUpdate}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
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
          Welcome {firstName} {lastName}
        </Text>
      </Center>
      <Center>
        <Image
          source={require("../assets/lady1.png")}
          style={{ width: 360, height: 226 }}
        />
      </Center>
      <Center>
        <Button
          style={{ backgroundColor: "#1F41BB", marginTop: 16, maxWidth: 180 }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Click Here to Edit Details
        </Button>
      </Center>
      <Center>
        <Button
          style={{ backgroundColor: "#1F41BB", marginTop: 32, maxWidth: 180 }}
          onPress={() => navigation.navigate("Users View")}
        >
          View Other Users
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default UserInfoScreen;
