import { View } from "react-native"
import Header from "../../components/Header"
import { MarketShow } from "../../components/MarketShow"
import { SearchBarMarket } from "../../components/SearchBarMarket"
import { SelectedMarket } from "../../components/SelectedMarket"
import { } from "./style"

export const MarketList = () => {
  return(
    <View>
      <Header/>
      <SearchBarMarket/>
      <SelectedMarket/>
      <MarketShow/>

    </View>
  )
}