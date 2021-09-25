import { useContext } from "react";
import { View, Text, Button } from "react-native";
import React from "react";
import { LanguageContext } from "../../App";
import DashboardScreen from "../home/DashboardScreen";

export const ProMainScreen = (props) => {
  //const { ModalBtn } = useModal();
  //const isLogin = useContext(LoginContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const updateValue = () => {
    // props.updateValueParent("No");
    setLanguage("team");
  };

  return (
    <View>
      <Text> {language} ProMainScreen</Text>
      <Button title="Set to Pro Main" onPress={updateValue} />
      <DashboardScreen />
    </View>
  );
};

const SettingsScreen = (props) => {
  //const { ModalBtn } = useModal();
  //const isLogin = useContext(LoginContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const updateValue = () => {
    // props.updateValueParent("No");
    setLanguage("jp");
  };

  return (
    <View>
      <Text> {language} SettingsScreen</Text>
      <Button title="Set to Sett" onPress={updateValue} />
      <ProMainScreen />
    </View>
  );
};

export default SettingsScreen;
