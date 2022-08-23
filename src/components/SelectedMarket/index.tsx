import { View, Text } from "react-native"
import {
  SelectContainerum,
  SelectContainerdois,
  Conatiner
} from "./styled"

export const SelectedMarket = () => {
  return(
    <View style={{alignItems: 'center'}}>
      <Conatiner>
        <SelectContainerum>
          <Text style={{color: '#ffff'}}>
            Voce esta visitando :
          </Text>
        </SelectContainerum>
        <SelectContainerdois>
        <Text style={{color: '#000'}}>
            Vitor supermercado
          </Text>
        </SelectContainerdois>
      </Conatiner>
    </View>
  )
}