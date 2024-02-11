import {Modal,View,Text,Button , StyleSheet} from "react-native"

const DeleteModal = ({ product, visible, onModal, deleteProd }) =>{

    return  (
            <Modal visible={visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Quiere borrar el producto?:</Text>
                        <Text style={styles.prod__title}>{product.productName}</Text>
                        <Button style={styles.btn} title="Confirmar" onPress={deleteProd} />
                        <Button style={styles.btn} title="Cancelar" onPress={()=> onModal(false)}/>
                    </View>        
                </View>
            </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",        
      },
      modalContent:{
        width:"80%",
        border: "1px solid #e5e5e5",
        padding:10,
        gap:10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      },
      modalText:{
        textAlign: "center",
        fontSize: "14px",
      },
      prod__title: {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
      },
      btn: {
        width: "100px",
        alignItems:"center",
        border: "none",
        padding: "20px", 
        borderRadius: "5px",
        backgroundColor: "#c00202",
        fontSize: "1rem",
      }
})
export default DeleteModal