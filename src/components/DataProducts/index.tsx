import {View} from "react-native"
import Header from "../Header"
import { InputData, ContentInput } from "./styled"


export const DataProducts = () => {
  return(
    <View>
      <Header/>
        <ContentInput>
          <InputData 
            placeholder="Nome do Produto"
          />
          <InputData 
            placeholder="Marca do Produto"
          />
          <InputData 
            placeholder="Valor do Produto"
          />
          <InputData 
            placeholder="Peso do Produto"
          />
          <InputData
            placeholder="Nome do Mercado"
          />
        </ContentInput>
    </View>
  )
}