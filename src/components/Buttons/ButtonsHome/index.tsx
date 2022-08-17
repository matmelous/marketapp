import react from "react"
import {View, Image} from "react-native"
import { 
  HomeButton, 
  ConfigButton, 
  TextButton, 
  Title 
} from "./styled"

import PAGES from "../../../constants/pages";

const ROUTES = [
  'Library',
  'Projects',
  'Explore',
  'Profile',
]


export const ButtonsHome = ({ state, navigation }) => {


    const routeName = ROUTES[state.index];
  
    const userState = useSelector((state) => state.user);
  
    const handleRedirectToPage = (page: string, options?: any) => {
      if (userState.id) {
        return navigation.navigate(page, options);
      }
  
      return navigation.navigate(PAGES.LOGIN_REQUIRED_NOTICE);
    }

 return(
  <View>
    <Title>
    Quer economizar no supermercado? O aplicativo
    <Image source={require('../../../assets/images/logo.png')}/>
      {'\n'}
    mostra estabelecimentos mais baratos para você!
    </Title>

    <ConfigButton >
        <HomeButton>
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