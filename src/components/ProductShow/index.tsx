import { 
  View, 
  Image 
} from "react-native";
import { 
  ProductView, 
  ProductName, 
  NameProduct, 
  ProductPrice, 
  PriceText,
  EditButtom, 
  AddButtom, 
  ButtonsText
} from "./styled"

export const ProductShow =()=>{
  return(
    <ProductView>
      <Image source={0}/>
      <ProductName>
        <NameProduct>
          Macarrão Casaredo Caracolino
        </NameProduct>
      </ProductName>
      <ProductPrice>
        <PriceText>
          R$ 3,98
        </PriceText>
      </ProductPrice>
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
    </ProductView>
  )
}