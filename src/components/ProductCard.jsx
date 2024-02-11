import { StyleSheet, Text, Image, useWindowDimensions, Pressable, View } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../redux/slices/shopSlice'

const ProductCard = ({ item, navigation, route }) => {

    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    return (
        <Pressable style={styles.container} onPress={() => {
            dispatch(setProductSelected(item.id))
            navigation.navigate("Product", { id: item.id })
        }} >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    resizeMode='cover'
                    source={{ uri: item.thumbnail }}
                />
            </View>
            <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
            <Text style={width > 350 ? styles.textPrice : styles.text}>U$D {item.price}</Text>
        </Pressable>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.white1,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 20
    },
    textMin: {
        textAlign: "center",
        fontSize: 15
    },
    textPrice: {
      color: "green",
      fontSize: 18,
    },  
    image: {
        minWidth: 90,
        height: 100,
        width: "100%",
        objectFit: "contain",
    }
})
