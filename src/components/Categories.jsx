import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import categories from '../data/categories.json';

const Categories = ({ route, navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (index, value) => {
    setSelectedCategory(value);
    navigation.navigate('Category', { category: route.category });
  };

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={categories}
        onSelect={(index, value) => handleCategoryChange(index, value)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
        buttonStyle={styles.dropdown}
        buttonTextStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownText}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  dropdown: {
    width: '80%',
    backgroundColor: '#e9e9e9',
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 18,
    color: '#333',
  },
});
