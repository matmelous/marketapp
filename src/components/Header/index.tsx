import * as React from "react"
import { View, Image } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { Wrapper, Texto, IconDiv } from "./styles";
 
const Header = () => {
  return(
    <Wrapper>
      <View> 
        <Appbar.BackAction onPress={() => {}} />
      </View>
      <Texto>MELHOR MERCADO</Texto>
      <IconDiv/>
    </Wrapper>
  )
}

export default Header;





