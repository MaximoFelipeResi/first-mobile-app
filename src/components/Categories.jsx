import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useGetCategoriesQuery } from "../redux/shopServices";
import SelectDropdown from "react-native-select-dropdown";
import CategoryItem from "../components/CategoryItem";

const Categories = ({ navigation, route }) => {
  const { data: categories } = useGetCategoriesQuery();

  const handleCategorySelect = (category) => {
    console.log("Categoría seleccionada:", category);
    navigation.navigate("Category", { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecciona una categoria:</Text>
      <SelectDropdown
        data={categories}
        onSelect={(selectedCategory) => handleCategorySelect(selectedCategory)}
        buttonTextAfterSelection={(selectedCategory) => selectedCategory}
        rowTextForSelection={(item) => item}
        buttonStyle={styles.dropdownButton}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.categoryItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },  
  dropdownButton: {
    width: "80%",
    height: 40,
    backgroundColor: "lightgray",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    width: "80%",
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 3,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});
