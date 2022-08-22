import { View, Text, Image } from "react-native";

import { MarketView, 
         MarketName, 
         NameMarket, 
         EditButtom, 
         AddButtom, 
         ButtonsText} from "./styled"

export const MarketShow =()=>{


  return(

    <MarketView>
      <Image source={0}/>
      <MarketName>
        <NameMarket>
          Super Mercado Vitor
        </NameMarket>
      </MarketName>
      <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
      <EditButtom>
        <ButtonsText>
          Editar
        </ButtonsText>
      </EditButtom>

      <AddButtom>
        <ButtonsText>
          Adicionar
        </ButtonsText>
      </AddButtom>
      </View>
    </MarketView>
   
  )
}