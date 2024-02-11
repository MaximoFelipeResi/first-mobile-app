import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../global/colors";

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:colors.white1 }}>
      <ActivityIndicator size={80} color="white" />
    </View>
  )
}

export default LoadingSpinner;