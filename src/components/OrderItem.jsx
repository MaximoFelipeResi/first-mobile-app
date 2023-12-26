import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../Global/colors';

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const formattedDate = new Date(order.createdAt).toLocaleString();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{formattedDate}</Text>
          <Text style={styles.text2}>Total: $ {total.toFixed(2)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather name="check" size={25} color="green" />
          <Feather name="trash" size={25} color="red" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white3,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inconsolata',
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Inconsolata',
    color: colors.darkGray,
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
