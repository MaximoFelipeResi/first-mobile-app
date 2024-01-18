import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => {

  const [ fontsLoaded ] = useFonts({
    "Inconsolata": require('../first-mobile-app/assets/fonts/Inconsolata_Condensed-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

    return (
      <>
        <StatusBar backgroundColor={colors.lightRed}/>
        <Provider store={store}>
          <MainNavigator/>
        </Provider>
      </>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    }
  })

export default App