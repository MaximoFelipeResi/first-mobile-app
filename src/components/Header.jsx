import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Tienda online</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        width: "100%",
        height: "70px",
        lineHeight: "70px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 5px #e5e5e5",
        paddingBottom: "20px",
    },
    logo: {
        fontSize: 30,
    }
})