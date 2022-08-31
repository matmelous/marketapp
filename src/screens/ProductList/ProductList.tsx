import { View } from "react-native"
import Header from "../../components/Header"
import { SearchBarProduct } from "../../components/Searchs/SearchBar";
import { ProductShow } from "../../components/ProductShow";

export const ProductList = () => {
  
  return(
    <View>
      <Header/>
      <SearchBarProduct/>
      <ProductShow/>
    </View>
  )
}