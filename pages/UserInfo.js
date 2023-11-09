import React, { useState } from "react";
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

const UserInfoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [loadingToggle, setLoadingToggle] = useState(false);

  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register);

  const firstName = registerData?.data?.first_name;
  const lastName = registerData?.data?.last_name;
  const emailAddress = registerData?.data?.email_address;

  console.log(9123, registerData);

  const handleUpdate = () => {
    // setLoadingToggle(true);
    dispatch(
      registerUser(updatedFirstName, updatedLastName, emailAddressState)
    );
    setModalVisible(false);
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
              <Input ref={initialRef} value={firstName} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Last Name</FormControl.Label>
              <Input value={lastName} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email Address</FormControl.Label>
              <Input value={emailAddress} />
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
              <Button onPress={handleUpdate}>Save</Button>
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
      <Image
        source={require("../assets/lady1.png")}
        style={{ width: 360, height: 226 }}
      />
      <Center>
        <Button
          style={{ backgroundColor: "#1F41BB", marginTop: 16, maxWidth: 200 }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Click Here to Edit Details
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default UserInfoScreen;
