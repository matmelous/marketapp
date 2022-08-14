import React from "react";
import { View } from "react-native";
import { ContentProduct } from "../components/ContentProduct";
import Header from "../components/Header";
import { SearchProduct } from "../components/SearchBar/SearchProduct";

const ProductList = () => {
  return(
    <View style={{ padding: "16px"}}> 
      <Header/>
      <SearchProduct/>
      <ContentProduct/>
    </View>
  )
}

export default ProductList;