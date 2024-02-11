import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ItemDetail = ({ route }) => {

  const dispatch = useDispatch();
  const product = useSelector((state)=> state.shop.value.productSelected);
  const images = product.images ? product.images : [];

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[1]}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>U$D {product.price}</Text>
            <Pressable style={styles.buyNowButton} onPress={()=> dispatch(addItem(product)) }>
              <Text style={styles.buyNowText}>Agregar al Carrito</Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    paddingHorizontal: 20,
    padding: 20,
    backgroundColor: colors.white2,
    borderRadius: 30,
    marginTop: 30,
  },
  containerText:{
    gap:20,
    paddingHorizontal:5,
    paddingVertical:20,
   },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkRed,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.darkRed,
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "green",
    paddingVertical: 3,
  },
  buyNowButton: {
    backgroundColor: colors.red2,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyNowText: {
    color: colors.white2,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
