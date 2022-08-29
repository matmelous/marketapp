import { Entypo } from "@expo/vector-icons"
import { SetStateAction, useState } from "react"
import { TextInput, Text } from "react-native"
import { SearchBar, SearchTextInput, Container  } from "./styled"

const list = [
  {
    label: 'uno:',
  },
  {
    label: 'gol:',
  }, {
    label: 'logan:',
  }, {
    label: 'duster:',
  }, {
    label: 'opala:',
  },
]
  type Props = {
    e:{
      target: {
        value: SetStateAction<string> 
      }
    }
  }



export const SearchBarProduct = ({e}: Props) => {

  const [ busca, setBusca ] = useState('')

  return(
    <Container>
      <SearchBar>
        <Entypo name="magnifying-glass" size={18} color="black" />
        {/* <SearchTextInput placeholder="Buscar produtos"/> */}
        <TextInput
          placeholder="Buscar produtos"
          value={busca}
          onChangeText={setBusca}
        />

      </SearchBar>
          {list.filter((val) => {
            if(busca === "") {
              return val
            } else if (val.label.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
              return val
            }
          }).map(list =>{
          return(
            <Text key={list.label}>
              {list.label}
            </Text>
          )
        })}
    </Container>
  )
}