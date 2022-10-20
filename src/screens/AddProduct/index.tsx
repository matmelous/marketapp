import {View} from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision"
import { DataProducts } from "../../components/DataProducts/index"

export const AddProducts = () => {
  return(
    <View>
      <DataProducts/>
      <ButtonDecision 
        onPress={() => ''} 
      />
    </View>
  )
}