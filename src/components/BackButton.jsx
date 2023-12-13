import React from 'react';
import { TouchableOpacity, Text, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Volver</Text>
    </Pressable>
  );
};

export default BackButton;
