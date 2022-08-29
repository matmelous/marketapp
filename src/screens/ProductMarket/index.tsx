import { View,Image } from "react-native"

import Header from "../../components/Header"

import { ProductShow } from "../../components/ProductShow"
import { SearchBarProduct } from "../../components/Searchs/SearchBar"
import { SelectedMarket } from "../../components/SelectedMarket"

export const ProductMarket =()=>{
  return(
    <View>
      <Header/>
      <SearchBarProduct/>
      <SelectedMarket/>
      <ProductShow/>
    </View>
  )
}