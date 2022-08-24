import React from "react"
import { ErrorBox,BoxContent, InfoText,} from "./styled"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import { View } from "react-native"

export const ComponentError = () => {
  return(
      <BoxContent>
        <ErrorBox>
          <MaterialIcons name="error-outline" size={70} color="black" style={{marginBottom: 45}} />
          <InfoText>
            Busque seu produto
          </InfoText>
        </ErrorBox>
      </BoxContent>
  )
}