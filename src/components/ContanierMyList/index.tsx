import React from "react"
import { FlatList, Text } from "react-native"
import { Container, BoxMyList, ProductInformation, Information } from "./styled"



const list = [
  {
    id: 1,
    label: 'Produto',
    value: 'Macarrao Casaredo Com Ovos',
  },
  {
    id: 2,
    label: 'Marca',
    value: 'Cracolino',
  },
  {
    id: 3,
    label: 'Valor',
    value: '3,85',
  },
  {
    id: 4,
    label: 'Mercado',
    value: 'Condor',
  }
]

export const ContanierMyList = () => {

  return(
    <Container>
      <BoxMyList>
        <ProductInformation>
            <Information>
            </Information>
        </ProductInformation>
      </BoxMyList>
    </Container>
  )
}

