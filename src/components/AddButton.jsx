import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../global/colors';

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default AddButton;

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.lightRed,
      width:"70%",
      paddingVertical:8,
      margin:10
  },
  text:{
      color:"white",
      textAlign:"center",
      fontSize:18
  }
})