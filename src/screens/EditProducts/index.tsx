import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {View} from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision";
import { ImageData } from "../../components/DataProducts/ImageData";
import Header from "../../components/Header";
import { ImageProducts } from "../../components/ScreenEdit/ImageProducts";
import { SelectedProducts } from "../../components/ScreenEdit/SelectedProducts";
import { ValueProducts } from "../../components/ScreenEdit/ValueProducts";
import PAGES from "../../constants/pages";
import { useApi } from "../../hooks/useApi";
import { NavigationType } from "../../navigation";

export const EditProducts = (props) => {

const [nome, setNome] = useState<string>()
const name = props.route.params.name
const id = props.route.params.id
const navigation = useNavigation<NavigationType>()
const api = useApi();

const editProduct = async()=>{
  const data = await api.AlterProduct( nome, id)
  console.log(data)
}

  return(
    <View>
      <Header/>
    <View 
      style={{
      padding:15, 
      justifyContent: "space-between",
      }}
    >
      <SelectedProducts
       label= {name}
      />
      <ValueProducts 
        placeholder= "Digite novo valor"
        onChangeText={(text) => setNome(text.toLowerCase())}
      />
      <ImageProducts/>
    </View> 
     <ButtonDecision
      onPress={()=>editProduct()} 
    />
    </View>
  )
}