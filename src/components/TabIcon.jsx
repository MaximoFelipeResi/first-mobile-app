import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const TabIcon = ({ icon, label, focused }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={40} color={focused ? "#e53935" : "#efebe9"}/>
      <Text style={{...styles.text, ...{color: focused ? "#e53935" : "#efebe9"}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"#fff",
        textAlign:"center"
    }
})