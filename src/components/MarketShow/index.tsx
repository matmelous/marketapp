import { useNavigation } from "@react-navigation/native";
import { 
  View,
  Image, 
  TouchableOpacity
} from "react-native";
import PAGES from "../../constants/pages";
import { NavigationType } from "../../navigation";

import { 
  MarketView, 
  MarketName, 
  NameMarket, 
  Button, 
  ButtonText,
  ButtonBox,
  Imagem,
} from "./styles"

export const MarketShow = () => {

  const navigation = useNavigation<NavigationType>()

  return(
    <MarketView>
      <MarketName>
        <NameMarket>
          Vitor supermercado
        </NameMarket>
        <Imagem source={require('../../assets/images/vitor.png')}/>
        <ButtonBox
          onPress={() => navigation.navigate(PAGES.PRODUCTMARKET)}
        >
          <Button>
            <ButtonText>
              Entrar no mercado
            </ButtonText>
          </Button>
        </ButtonBox>
      </MarketName>
    </MarketView>
  )
}