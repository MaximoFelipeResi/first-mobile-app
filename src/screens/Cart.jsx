import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { usePostOrdersMutation } from "../redux/shopServices";
import CartItem from "../components/CartItem";

const Cart = () => {

    const localId = useSelector(state => state.auth.value.localId);
    const cart = useSelector(state => state.cart.value);
    const [triggerPostOrder, {data, isSuccess, error, isError}] = usePostOrdersMutation();



  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable style={styles.btn} onPress={()=> triggerPostOrder({localId, order:cart})}>
                <Text style={styles.text}>Confirmar pedido</Text>
            </Pressable>
            <Text style={styles.btn}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Cart;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:90,
    },
    confirmContainer:{
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    btn: {
        backgroundColor:"red",
        borderRadius: 10,
        padding: 10,
        color: "white",
        textTransform: "uppercase",
    },
    text:{
        fontSize: 18,
        color:"white",
        fontFamily:"Inconsolata",
        textTransform: "uppercase",
    }
})