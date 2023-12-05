import {View, Text, TextInput, Button, StyleSheet} from "react-native"

const AddProduct = ({ prodTitle, prodPrice, onChangeTitle,  onChangePrice, addProduct }) => {

    return (    
      <View style={styles.addproduct__form}>
            <View style={styles.form__group}>
              <Text style={styles.input__title}>Ingresar Nombre</Text>
              <TextInput 
              style={styles.input}
              placeholder="Nombre..."
              value={prodTitle}
              onChangeText={(t)=> onChangeTitle(t)}
              />
            </View>
            <View style={styles.form__group}>
              <Text style={styles.input__title}>Ingresar Precio</Text>
              <TextInput 
              style={styles.input}
              placeholder="Precio..."
              value={prodPrice}
              onChangeText={(t)=> onChangePrice(t)}
              required />
          </View>
        <Button style={styles.btn} title="Añadir" onPress={addProduct}/>
      </View>
    )             
}
const styles = StyleSheet.create({
    addproduct__form: {
      backgroundColor: "#e5e5e5",
      borderRadius: "5px",
      padding: "40px",
      alignItems: "center"
    },
    form__group:{
        width:"100%",
        padding: "15px",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around"
      },
      input__title: {
        fontWeight: "600",
        fontSize: "20px",
        paddingBottom: "10px",
      },
      input:{
        border: "2px solid coral",
        paddingHorizontal:10,
        paddingVertical:5,
        width:150
      },
      btn: {
        border: "none",
        padding: "20px", 
        borderRadius: "5px",
        backgroundColor: "#c00202",
        fontSize: "1rem",
      }
})

export default AddProduct