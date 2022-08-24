import React from "react"
import { View } from "react-native"
import { SearchBarProduct } from "../../components/SearchBar"
import Header from "../../components/Header"
import { ComponentError } from "../../components/ComponentError"

export function ErrorProductList(){
  return (  
  <View>
    <Header/>
    <SearchBarProduct/>
    <ComponentError/>
  </View>
  )
}
