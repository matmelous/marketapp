import { Entypo } from "@expo/vector-icons"
import { useState } from "react"
import { Text } from "react-native"
import { ComponentError } from "../../ComponentError"
import { SearchBar, SearchTextInput, Container  } from "./styled"

const list = [
  {
    label: '',
  },

]

export const SearchBarProduct = () => {

  const [ busca, setBusca ] = useState('') 
  const resultado = busca === "" ? list: list.filter((val) => {
     if (val.label.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
          return true 
        } 
          return false
    })

  return(
    <Container>
      <SearchBar>
        <Entypo 
          name="magnifying-glass" 
          size={18}
          color="black"
        />
        <SearchTextInput 
          placeholder="Buscar produtos"
          value={busca}
          onChangeText={setBusca}
        />
      </SearchBar>
        {resultado.length === 0 ? <ComponentError/> : resultado.map(list => {
        return(
          <Text key={list.label}>
            {list.label}
          </Text>
        )
      })}
    </Container>
  )
}