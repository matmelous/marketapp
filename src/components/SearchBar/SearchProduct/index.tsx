import React from "react";
import { Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { 
  Contanier, 
  SearchDiv, 
  SearchText,
  Input
} from "./style";

export const SearchProduct = () => {
  return(
    <Contanier>
      <Input placeholder="Buscar Produtos"/>
    </Contanier>
  )
}