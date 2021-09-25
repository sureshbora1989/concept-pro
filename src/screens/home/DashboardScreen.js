import { useContext } from "react";
import { View, Text, Button } from "react-native";
import React from "react";
import { LanguageContext } from "../../App";

const DashboardScreen = (props) => {
  //const { ModalBtn } = useModal();
  //const isLogin = useContext(LoginContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const updateValue = () => {
    // props.updateValueParent("No");
    setLanguage("hindi");
  };

  return (
    <View>
      <Text> {language} DashboardScreen</Text>
      <Button title="Set to Sett" onPress={updateValue} />
    </View>
  );
};

export default DashboardScreen;
