import { useState } from "react"
import { StatusBar, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { colors } from "./src/Global/colors"
import Navigator from "./src/navigation/Navigator"



const App = () => {

  const [ fontsLoaded ] = useFonts({
    "Inconsolata": require('../first-mobile-app/assets/fonts/Inconsolata_Condensed-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

    return (
      <>
        <StatusBar
          backgroundColor={colors.lightred2}
        />
        <Navigator/>
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