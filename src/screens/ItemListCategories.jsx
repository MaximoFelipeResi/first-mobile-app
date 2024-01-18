import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useGetProductsQuery } from "../redux/shopServices";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";

const ItemListCategories = ({ navigation, route }) => {

  const {category} = route.params;
  const {data,isLoading,error} = useGetProductsQuery(category);
  const [keyword,setKeyword] = useState("");
  const [products,setProducts] = useState(); 

  useEffect(()=>{
      if(!isLoading) {
        const dataArray = Object.values(data);
        const productsFiltered = dataArray.filter(product => product.title.includes(keyword));
        setProducts(productsFiltered);
      }
  }, [keyword,data])

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductCard item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%"
 }
})