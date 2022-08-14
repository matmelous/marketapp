import React from "react";
import { View,  } from "react-native";
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
              Informaçons sobre o produto
            </TextDescrition>
            <TextPrice >
              R$ 345,00
            </TextPrice>
            <DivButton>
              <EditButton>Editar</EditButton>
              <EditButton>Excluir</EditButton>
            </DivButton>
          </Informations>
        </Contanier>
      )
}

