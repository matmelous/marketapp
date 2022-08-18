import react from "react"
import {Text, View, Image} from "react-native"
import { TextInput } from 'react-native';
import { Searchbar, } from "react-native-paper";
import ListAccordionGroup from "react-native-paper/lib/typescript/components/List/ListAccordionGroup";
import Header from "../../components/Header"
import {SearchBar } from "./styles";
import { Entypo } from '@expo/vector-icons';


export const ProductList = () => {
  return(

    <View>
      <Header/>
        <SearchBar>
          <Entypo name="magnifying-glass" size={18} color="black" />
            <TextInput placeholder="    Buscar produtos"/>
        </SearchBar>
    </View>
  )
}