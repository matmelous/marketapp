import { Container } from "./style"
import Header from "../../components/Header"
import { SearchBarProduct } from "../../components/SearchBar"
import { ContanierMyList } from "../../components/ContanierMyList"
import { View } from "react-native"

export const MyList = () => {
  return(
  <View>
    <Header/>
    <SearchBarProduct/>
    <ContanierMyList/>
  </View>
  )
}