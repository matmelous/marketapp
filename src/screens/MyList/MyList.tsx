import Header from "../../components/Header"
import { SearchBarProduct } from "../../components/SearchBar"
import { View } from "react-native"
import { RenderContanierMyList } from "../../components/ContanierMyList/RenderContanierMyList"

export const MyList = () => {
  return(
    <View>
      <Header/>
      <SearchBarProduct/>
      <RenderContanierMyList/>
    </View>
  )
}