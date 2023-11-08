import React from "react";
import { NativeBaseProvider, Button } from "native-base";
import { Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { getUserData } from "../context/actions/userActions";

import { connect } from "react-redux";
import { getUserDataRequest } from "../context/actions/userActions";

// import { getUserDataRequest } from "../context/actions/userActions";

const Displayscreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  console.log(777, data);

  return (
    <NativeBaseProvider>
      <Text>Display User Info</Text>
      <Text>{data ? data?.data?.email : "No data available"}</Text>
      <Button
        onPress={() => {
          dispatch(getUserData());
        }}
      >
        Click to use redux
      </Button>
    </NativeBaseProvider>
  );
};

// const mapStateToProps = (state) => ({
//   user: state.user.data,
// });

// const mapDispatchToProps = {
//   getUserDataRequest,
// };

export default Displayscreen;
