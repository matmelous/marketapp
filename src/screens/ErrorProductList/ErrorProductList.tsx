import React from "react"
import { ErrorBox,BoxContent, InfoText,} from "./styled";

import {View, Text} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import Header from "../../components/Header";
import { SearchBarProduct } from "../../components/SearchBar";
export function ErrorProductList(){
  return (  
  <View>
<Header/>
<SearchBarProduct/>
  
  <BoxContent>
    <ErrorBox>
    
        <MaterialIcons name="error-outline" size={70} color="black" style={{marginBottom: 45}} />
        <InfoText>
          Busque seu produto
        </InfoText>
    </ErrorBox>
    </BoxContent>
    </View>
  )
}
