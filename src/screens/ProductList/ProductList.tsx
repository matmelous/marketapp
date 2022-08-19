import react from "react"
import {Text, View, Image} from "react-native"
import { TextInput } from 'react-native';
import { Searchbar, } from "react-native-paper";
import ListAccordionGroup from "react-native-paper/lib/typescript/components/List/ListAccordionGroup";
import Header from "../../components/Header"
import { Entypo } from '@expo/vector-icons';
import { SearchBarProduct } from "../../components/SearchBar";
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