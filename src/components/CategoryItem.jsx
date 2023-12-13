import { Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryItem = ({ category ,setCategorySelected }) => {
  return (
    <Pressable onPress={()=> setCategorySelected(category)}>
      <View style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"60%",
        marginHorizontal:"20%",
        borderRadius: "10px",
        backgroundColor:"#f0f0f0f0",
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
})