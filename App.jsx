import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import uuid from 'react-native-uuid'
import Header from "./src/components/Header"
import DeleteModal from "./src/admin/DeleteModal"
import AddProduct from "./src/admin/AddProduct"
import ItemListContainer from "./src/components/ItemListContainer"


const App = () => {

    const [ enterTitle, setEnterTitle ] = useState("")
    const [ enterPrice, setEnterPrice ] = useState("")
    const [ products, setProducts ] = useState([])
    const [ productSelected, setProductSelected ] = useState({})
    const [ modalVisible, setModalVisible ] = useState(false)

    const handlerAddProduct = () => {

        const newProduct = {
          id: uuid.v4(),
          productName: enterTitle,
          price: enterPrice
        }
       
        setProducts(current => [...current, newProduct])
        setEnterTitle("")
        setEnterPrice("")
    }

    const handlerModal = (item) => {
        setProductSelected(item)
        setModalVisible(true)
    }
    const handlerDeleteProduct = () => {
      setProducts(current => current.filter(product => product.id !== productSelected.id))
      setModalVisible(false)
    }
    return (
            <View  style={styles.container}>
              <Header/>
              <AddProduct prodTitle = {enterTitle}
                prodPrice = {enterPrice}
                onChangeTitle = {setEnterTitle}
                onChangePrice = {setEnterPrice}
                addProduct = {handlerAddProduct}
              />
              <ItemListContainer
                products = {products}
                onModal = {handlerModal}
              />
              <DeleteModal
                product = {productSelected}
                visible={modalVisible}
                onModal = {handlerModal}
                deleteProd={handlerDeleteProduct}
              />
           </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    }

 
  })



export default App