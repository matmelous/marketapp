import { Entypo } from "@expo/vector-icons"
import { SearchBar, SearchTextInput, Container  } from "./styled"

export const SearchBarProduct = ({value, onChangeText}) => {

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
          value={value}
          onChangeText={onChangeText}
        />
      </SearchBar>
    </Container>
  )
}