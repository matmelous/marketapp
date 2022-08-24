import React from "react"
import { View, Text } from "react-native"
import { 
  Container, 
  ProductInformation, 
  Information,
} from "./styled"

export const ContanierMyList = ({ data }) => {

  return(
    <Container>
      <View 
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
      >
        <ProductInformation>
          {data.label}
            {' '}
        </ProductInformation>
        <Information>
          {data.value} 
        </Information>
      </View>

    </Container>
  )
}

