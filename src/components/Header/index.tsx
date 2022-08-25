import * as React from "react"
import { View, Image, StatusBar } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { Wrapper, Texto } from "./styles";
import logo from "../../assets/images/logo.png"
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../navigation";
import PAGES from "../../constants/pages";
 
const Header = () => {

  const navigation = useNavigation<NavigationType>()

  return(
    <Wrapper>
      <View> 
        <Appbar.BackAction  
          onPress={() => navigation.navigate(PAGES.MAIN)} 
        />
      </View>
      <Image source={logo} height={35} width={215}/>
      <Image source={require('../../assets/images/list.png')} height={25} width={23}/>
      <StatusBar/>
    </Wrapper>
  )
}

export default Header;





