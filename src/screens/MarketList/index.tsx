import { View } from "react-native"
import Header from "../../components/Header"
import { MarketShow } from "../../components/MarketShow"
import { SearchBarMarket } from "../../components/SearchBarMarket"

export const MarketList = () => {
  return(
    <View>
      <Header/>
      <SearchBarMarket/>
      <MarketShow/>
    </View>
  )
}