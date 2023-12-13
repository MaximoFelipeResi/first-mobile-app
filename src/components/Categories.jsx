import React from 'react';
import { StyleSheet } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import SelectDropdown from 'react-native-select-dropdown';

const Categories = ({ setCategorySelected }) => {
  const categoryItems = categories.map(category => ({ value: category }));

  return (
    <SelectDropdown
      data={categoryItems}
      onSelect={(selectedItem, index) => {
        setCategorySelected(selectedItem.value);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.value;
      }}
      rowTextForSelection={(item, index) => {
        return item.value;
      }}
      buttonStyle={styles.dropdown}
      buttonTextStyle={styles.dropdownText}
      defaultValueByIndex={0}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  dropdown: {
    width: '80%',
    backgroundColor: '#eee',
    marginTop: '10px',
    padding: 10,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
});