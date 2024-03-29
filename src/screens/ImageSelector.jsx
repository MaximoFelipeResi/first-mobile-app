import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../redux/shopServices";
import { useGetProfileImageQuery } from "../redux/shopServices";
import * as ImagePicker from "expo-image-picker";
import AddButton from "../components/AddButton";

const ImageSelector = ({ navigation }) => {

  const [ image, setImage ] = useState("");
  const [ triggerProfileImage ] = usePostProfileImageMutation();
  const localId = useSelector(state => state.auth.value.localId);
  const { data, isSuccess } = useGetProfileImageQuery(localId);

  useEffect(()=>{
      if(isSuccess && data) setImage(data.image);
  }, [isSuccess])

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

      if (granted) {
          let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 0.5,
              base64: true,
            })
          if (!result.canceled) {
            setImage('data:image/jpeg;base64,' + result.assets[0].base64);
          }
      }
   }
  const confirmImage = () => {
      triggerProfileImage({localId,image})
      navigation.goBack()
  }

  return (
    <View style={styles.container}>
       <Image
            source={image ? { uri: image } : require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <AddButton title="Tomar foto" onPress={pickImage} />
        <AddButton title="Confirm photo" onPress={confirmImage} />
    </View>
  )
}

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center",
      marginTop:20
  },
  image: {
      width:200,
      height:200
  },
})