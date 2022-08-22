import { Entypo } from "@expo/vector-icons"
import { TextInput, Searchbar } from "react-native-paper"
import { SearchBar, SearchText } from "./styled"

export const SearchBarProduct = ()=>{
   
  return(
    <SearchBar>
          <Entypo name="magnifying-glass" size={18} color="black" />
            <SearchText placeholder="Buscar produtos"/>
    </SearchBar>
  )
}