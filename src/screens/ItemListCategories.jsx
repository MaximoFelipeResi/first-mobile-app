import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import ProductCard from '../components/ProductCard'
import allProducts from "../Data/products.json"


const ItemListCategories = ({ navigation, route }) => {

  const { category } = route.params;
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ products, setProducts ] = useState(allProducts)

  useEffect(() => {
    const formattedSearchTerm = searchTerm.toLowerCase(); 
  
    if (category) {
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.toLowerCase().includes(formattedSearchTerm)) 
      setProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product => product.title.toLowerCase().includes(formattedSearchTerm))
      setProducts(productsFiltered)
    }
  }, [searchTerm, category])

  return (
    <>
      <Header/>
      <Search setSearchTerm={setSearchTerm}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductCard item={item} navigation={navigation} route={route}/>}
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