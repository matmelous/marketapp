import React, { useState } from "react"
import { View, Text } from "react-native"
import { FAB } from "react-native-paper"
import { ModalFilterMarket } from "../../Modals/ModalFilterMarket"
import { 
  Container,
  BoxContent,
} from "./styled"



export const FilterButton = () => {

  const [isModalInstrumentVisible, setIsModalInstrumentVisible] = useState(false);
  
  return(
    <Container>
      <ModalFilterMarket
         isVisible={isModalInstrumentVisible} 
         hideModal={() => setIsModalInstrumentVisible(false)}
      />
      <FAB
        style={{
          width: 350,
          backgroundColor: '#6691FF'
        }}
        color="#fff"
        icon=""
        label="Buscar Mercado"
        onPress={() => setIsModalInstrumentVisible(true)}
      />
    </Container>

  )
}