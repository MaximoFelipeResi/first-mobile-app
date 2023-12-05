import {View,FlatList,Text,Button,StyleSheet} from "react-native"
import ProductCard from "./ProductCard"

const ItemListContainer = ({ products, onModal }) => {
    return (
    <View style={styles.listContainer}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <ProductCard item={item} onModal={onModal}/> }
                />
            </View>
    )
}
const styles = StyleSheet.create({
    listContainer : {
        width:"100%",
        alignItems: "center",
      }
})

export default ItemListContainer