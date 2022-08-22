import reactDom from "react-dom"
import {View, Image} from "react-native"
import { 
  HomeButton, 
  ConfigButton, 
  TextButton, 
  Title 
} from "./styled"
import PAGES from "../../../constants/pages"
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from "../../../navigation";

export const ButtonsHome = ({navigation}) => {
  // const navigation = useNavigation<NavigationType>();

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
        onPress={() => navigation.navigate(PAGES.PRODUCTLIST)}
      >
        <TextButton>
          Login
        </TextButton>
      </HomeButton>
      <HomeButton>
        <TextButton>
          Lista de Mercados
        </TextButton>
      </HomeButton>
      <HomeButton>
      <TextButton>
        Lista de Compras
      </TextButton>
      </HomeButton>
    </ConfigButton>
  </View>
 )
}