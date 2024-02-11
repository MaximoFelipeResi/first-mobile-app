import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
      dispatch(removeItem({ id: item.id }));
    };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{item.title}</Text>
          <Text style={styles.text2}>Marca: {item.brand}</Text>
          <Text style={styles.text3}>Cantidad: {item.quantity} Price: $ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handleRemoveItem}>
          <Feather name="trash" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white3,
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
  },
  text1: {
    fontSize: 20,
    color: colors.black4,
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text2: {
    fontSize: 20,
    color: colors.darkRed,
    fontFamily: 'Inconsolata',
  },
  text3: {
    fontSize: 20,
    color: "#006400",
    fontFamily: 'Inconsolata',
    marginTop: 8,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.red,
  },
});
