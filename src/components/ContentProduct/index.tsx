import React from "react";
import { View,  } from "react-native";
import { Text } from "react-native-paper";
import { 
  Contanier, 
  ImageDecoration, 
  TextDescrition, 
  TextPrice, 
  DivButton, 
  EditButton, 
  Informations } from "./styled"

export const ContentProduct = () => {
  return(
        <Contanier>
          <View>
            <ImageDecoration/>
          </View>
          <Informations>
            <TextDescrition >
              Informações sobre o produto
            </TextDescrition>
            <TextPrice >
              R$ 345,00
            </TextPrice>
            <DivButton>
              <EditButton>
                <Text>Editar</Text></EditButton>
              <EditButton>
                <Text>Excluir</Text></EditButton>
            </DivButton>
          </Informations>
        </Contanier>
      )
}

