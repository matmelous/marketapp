import { 
  View,
  Image 
} from "react-native";

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
  return(
    <MarketView>
      <MarketName>
        <NameMarket>
          Vitor supermercado
        </NameMarket>
        <Imagem source={require('../../assets/images/vitor.png')}/>
        <ButtonBox>
          <Button>
            <ButtonText>
              Entar no mercado
            </ButtonText>
          </Button>
        </ButtonBox>
      </MarketName>
    </MarketView>
  )
}