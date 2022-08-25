import { View } from "react-native"
import {
  SelectContainerum,
  SelectContainerdois,
  Conatiner,
  Title
} from "./styled"

export const SelectedMarket = () => {
  return(
    <View style={{alignItems: 'center'}}>
      <Conatiner>
        <SelectContainerum>
          <Title style={{color: '#ffff'}}>
            Você está no:
          </Title>
        </SelectContainerum>
        <SelectContainerdois>
          <Title style={{color: '#000'}}>
            Vitor supermercado
          </Title>
        </SelectContainerdois>
      </Conatiner>
    </View>
  )
}