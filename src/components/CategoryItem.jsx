import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../redux/slices/shopSlice";

const CategoryItem = ({ category, navigation, route }) => {

  const dispatch = useDispatch();

  return (
    <Pressable onPress={()=>{ 
        dispatch(setCategoryFilter(category))
        navigation.navigate("Category",{category})
      }}>
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
        borderRadius: 10,
        backgroundColor:"red",
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
})