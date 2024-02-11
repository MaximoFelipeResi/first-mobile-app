import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useGetOrdersQuery } from "../redux/shopServices";
import OrderItem from "../components/OrderItem";
import LoadingSpinner from "../components/LoadingSpinner";


const Orders = () => {

  const localId = useSelector(state => state.auth.value.localId);
  const { data, error, isSuccess, isError, isLoading } = useGetOrdersQuery(localId);
  const [ info, setInfo ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if(isSuccess && data.lenght === 0) setInfo(false);
    if(isSuccess && data) setLoading(false);
    if(isError && error) setErrorMessage(error.error);
  }, [data, error, isSuccess, isError])

  if(!info) return <View><Text>No se han agregado pedidos</Text></View>
  if(errorMessage) return  <View><Text>Error</Text></View>
  if(loading) return <LoadingSpinner/>

  return (
    <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
  )
}

export default Orders;

const styles = StyleSheet.create({});