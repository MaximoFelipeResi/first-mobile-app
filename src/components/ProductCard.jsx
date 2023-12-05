import {View , Text , Button,StyleSheet } from "react-native"

const ProductCard = ({ item, onModal }) => {
    return (
        <View style={styles.cardProduct}>
            <View style={styles.descProduct}>
                <Text style={styles.product__img}>Imagen Prod </Text>
                <Text style={styles.cardTitle}>{item.productName} </Text>
                <br />
                <Text> {item.price}U$D</Text>
            </View>
            <Button title="Borrar" onPress={() => onModal(item)}/>
        </View> 
    )
}
const styles = StyleSheet.create({
    cardProduct:{
        width: 'auto',
        display: 'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor: "#fff",
        border: '1px solid #e5e5e5',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 5,

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        },
        product__img: {
            display: "flex",
            flexDirection:"column",
        },
    descProduct: {
        flexDirection:"row",
        justifyContent:"space-around",
        textAlign: "center",
        marginBottom: 10,
        },
})
export default ProductCard