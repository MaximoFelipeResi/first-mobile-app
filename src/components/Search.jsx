import { StyleSheet, View, Pressable, TextInput, Text } from 'react-native'
import { AntDesign , Entypo } from "@expo/vector-icons"
import { useState } from 'react'


const Search = ({ setSearchTerm, category, allProducts, setProducts }) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const search = () =>{
        const expression = /[!@#$%^&*(),.?":{}|<>]/
        if(expression.test(input)){
           setError("Error: El input contiene caracteres especiales")
        }else{
            setSearchTerm(input)
        } 
    }

    const resetSearchAndRemoveItem = () => {
        setSearchTerm("");
        if (category) {
            const productsCategory = allProducts.filter(product => product.category === category);
            setProducts(productsCategory);
        } else {
            setProducts(allProducts);
        }
        setInput(""); 
        setError("");
    };

  return (
    <View style={styles.main_container}>
         <View style={styles.container_input}> 
            <TextInput style={styles.input} placeholder='Buscar...' value={input} onChangeText={(t)=> setInput(t)}/>
            <Pressable onPress={search}>
                <AntDesign name='search1' color="black" size={20}/>
            </Pressable>
            <Pressable onPress={resetSearchAndRemoveItem} >
                <Entypo name="cross" size={25} color="black" />
            </Pressable>
        </View>
        {error ? <Text style={styles.error_input}>{error}</Text> : null}
    </View>
   
  )
}

export default Search

const styles = StyleSheet.create({
    main_container:{
        backgroundColor: "#e6e6e6",
        width:"100%"
    },
    container_input:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    input:{
      backgroundColor: "white",
      width:"80%",
      borderWidth:2,
      borderRadius:4,
      paddingHorizontal:20,
      paddingVertical:5,
      margin:15
    },
    error_input:{
        color:"red",
        fontWeight: 600,
        fontSize: 20,
        paddingHorizontal:10
    }
})