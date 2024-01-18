import React, { useEffect } from "react";
import { StyleSheet, Text, View,FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { usePostOrdersMutation } from "../redux/shopServices";
import CartItem from "../components/CartItem";

const Cart = () => {

const cart = useSelector(state => state.cart.value);
const [ triggerPostOrder ] = usePostOrdersMutation();

  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=> triggerPostOrder(cart)}>
                <Text style={styles.text}>Continuar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Cart;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:130
    },
    confirmContainer:{
        backgroundColor:"grey",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        fontSize: 18,
        color:"white",
        fontFamily:"PlayFair"
    }
})