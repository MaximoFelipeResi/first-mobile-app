import { StyleSheet, Text, View, Image, Pressable } from 'react-native'



const ProductCard = ({ item }) => {
  return (
    <Pressable style={styles.container}>
        <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
   container:{
        height: '250px',
        width: "auto",
        backgroundColor: "#e5e5e5", /* no me aplica el color a la tarjeta no se xq */
        marginHorizontal:"20%",
        marginVertical:40,
        borderRadius:5,
        flexDirection:"column",
        alignItems:"center",
        gap:20
    },
    image:{
      borderRadius:5,
      width: "100%",
      height: "100%",
    },
    details:{
      flexDirection:"row",
      gap:40
    },
    title:{
      fontSize: 16,
      fontWeight: 500,
    },
    price:{
      color: "green",
      fontWeight: 500,
      fontSize: 16,
    },
})