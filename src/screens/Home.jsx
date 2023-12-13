import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({ setCategorySelected }) => {
  return (
    <>
        <Header title="Categorias"/>
        <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({

})