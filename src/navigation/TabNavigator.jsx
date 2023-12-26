import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import OrdersStack from './OrdersStack'
import TabIcon from '../Components/TabIcon'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="list" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
            name="CartStack" 
            component={CartStack}
            options={{
              tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
             }}
             />
             <Tab.Screen 
            name="OrdersStack" 
            component={OrdersStack}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="shopping-bag" label="Pedidos" focused={focused}/> 
             }}
             />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor: "#0e0e0e",
      elevation:4,
      position:"absolute",
      bottom:25,
      left:20,
      right:20,
      borderRadius:15,
      height:90


    }
})