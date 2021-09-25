import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { HomeScreen, ProfileScreen } from "../src/screens/home/HomeScreen";
import SettingsScreen from "../src/screens/home/SettingsScreen";
import DashboardScreen from "../src/screens/home/DashboardScreen";

export const LoginContext = React.createContext("value");

// set the defaults
export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {}
});

function App() {
  //  const [value, setValue] = useState("Yes");
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  const updateValue = (newValue) => {
    //  setValue(newValue);
    // console.log(value);
    // <ProfileScreen updateValueParent={updateValue} />
    //<SettingsScreen />
    //
  };
  const delayCall = (delay) => {
    let interveal;
    clearInterval(interveal);
    interveal = setTimeout(() => {
      console.log("This is called");
    }, delay);
  };

  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function saveInput() {
    console.log("Saving data");
  }

  const processChange = debounce(() => saveInput());

  const onChangeSearch = (value) => {
    console.log(value);
    processChange();
  };

  return (
    <LanguageContext.Provider value={value}>
      <View style={styles.app}>
        <Text>This is for React Native </Text>
        <HomeScreen updateValueParent={updateValue} />
        <TextInput placeholder="Search here" onChangeText={onChangeSearch} />
      </View>
    </LanguageContext.Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
