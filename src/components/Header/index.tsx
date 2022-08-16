import * as React from "react"
import { View, Image } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { Wrapper, Texto, IconDiv } from "./styles";
import logo from "../../assets/images/logo.png"
 
const Header = () => {
  return(
    <Wrapper>
      <View> 
        <Appbar.BackAction onPress={() => {}} />
      </View>

      <Image source={logo} height={35} width={215}></Image>
      <IconDiv/>
    </Wrapper>
  )
}

export default Header;





