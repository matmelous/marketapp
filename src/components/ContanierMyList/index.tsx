import React from "react"
import { View, Text } from "react-native"
import { 
  Container, 
  ProductInformation, 
  Information,
} from "./styled"

export const ContanierMyList = ({ Produto, Marca,valor, mercado }) => {

  return(
    <Container>
      <View 
        style={{
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <ProductInformation>
          Produto:
          {' '}
          {Produto}
        </ProductInformation>
        <ProductInformation>
          Marca:
          {' '}
          {Marca}
        </ProductInformation>
        <ProductInformation>
          Valor:
          {' '}
          {valor}
        </ProductInformation>
        <ProductInformation>
          Mercado:
          {' '}
          {mercado}
        </ProductInformation>
      </View>

    </Container>
  )
}
