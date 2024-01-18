import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import ProfileStack from "./ProfileStack";
import TabIcon from "../components/TabIcon";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

  return (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
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

             <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
              }}
             />
      </Tab.Navigator>
  )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: "#0e0e0e",
      elevation: 4,
      position: "absolute",
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90,
    }
})