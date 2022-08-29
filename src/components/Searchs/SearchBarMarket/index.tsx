import { Entypo } from "@expo/vector-icons"
import { SearchBar, SearchText } from "./styled"

export const SearchBarMarket = ()=>{
  return(
    <SearchBar>
      <Entypo name="magnifying-glass" size={18} color="black" />
      <SearchText placeholder="Buscar mercado" />
    </SearchBar>
  )
}