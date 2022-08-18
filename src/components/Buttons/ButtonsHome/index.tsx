import react from "react"
import {View, Image} from "react-native"
import { 
  HomeButton, 
  ConfigButton, 
  TextButton, 
  Title 
} from "./styled"
import PAGES from "../../../constants/pages";
import { useNavigation } from "@react-navigation/native";

export const ButtonsHome = ({ navigation }) => {
  const handleRedirectToPage = async(page: string, options?: any) => {
    navigation.navigate(page, options);
    
  }

 return(
  <View style={{display:'flex', alignItems:'center', justifyContent: 'center', height: '100%'}}>
    
    <Title>
    Quer economizar no supermercado? O aplicativo
    {'\n'}
    <Image source={require('../../../assets/images/logo.png')}/>
    {'\n'}
    mostra estabelecimentos mais baratos para você!
    </Title>

    <ConfigButton >
        <HomeButton
          onPress={() => handleRedirectToPage(PAGES.PRODUCTLIST)}
        >
          <TextButton>Login</TextButton>
        </HomeButton>
        <HomeButton>
          <TextButton>Lista de Mercados</TextButton>
        </HomeButton>
        <HomeButton>
          <TextButton>Lista de Compras</TextButton>
        </HomeButton>
    </ConfigButton>
  </View>
 )
}