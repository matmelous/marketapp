import React from "react"
import Header from "../../components/Header"
import { View } from "react-native"
import { SearchBarProduct } from "../../components/SearchBar"
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
