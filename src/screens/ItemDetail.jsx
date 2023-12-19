import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Header from '../components/Header';
import allProduct from '../Data/products.json';
import { colors } from '../Global/colors';

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});
  const images = product.images ? product.images : [];

  useEffect(() => {
    const productFound = allProduct.find((product) => product.id === id);
    setProduct(productFound);
  }, [id]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[2] }}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Comprar</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkRed,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.darkRed,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.darkRed,
  },
  buyNowButton: {
    backgroundColor: colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buyNowText: {
    color: colors.white2,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
