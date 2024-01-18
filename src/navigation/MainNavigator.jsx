import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const MainNavigator = () => {

const idToken = useSelector(state => state.auth.value.idToken);

  return (
    <NavigationContainer>
        { idToken ? <TabNavigator/> : <AuthStack/> }
    </NavigationContainer>
  )
}

export default MainNavigator;