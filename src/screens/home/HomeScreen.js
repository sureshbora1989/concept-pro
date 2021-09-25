import { useContext } from "react";
import { View, Text, Button } from "react-native";
import React from "react";
import { LoginContext } from "../../App";

export const HomeScreen = (props) => {
  //const { ModalBtn } = useModal();
  const isLogin = useContext(LoginContext);

  const updateValue = () => {
    props.updateValueParent("No");
  };

  return (
    <View>
      <Text> {isLogin} HomeScreen</Text>
      <Button title="Set to No" onPress={updateValue} />
    </View>
  );
};

export const ProfileScreen = (props) => {
  const isLogin = useContext(LoginContext);

  const updateValue = () => {
    props.updateValueParent("Undefined");
  };

  return (
    <View>
      <Text> {isLogin} Profile Screen</Text>
      <Button title="Set to Undefiend" onPress={updateValue} />
    </View>
  );
};
