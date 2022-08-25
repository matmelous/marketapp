import { 
  View, 
  Image, 
  
} from "react-native";
import { 
  ProductView, 
  ProductName, 
  NameProduct, 
  ProductPrice, 
  PriceText,
  EditButtom, 
  AddButtom, 
  ButtonsText,
  Contaniner
} from "./styled"

export const ProductShow =()=>{
  return(
    <Contaniner>
      <ProductView>
        <Image source={require('../../assets/images/vitor.png')} height={35} width={35}/>
        <View
          style={{
            flexDirection: 'column'
          }}
        >
            <NameProduct>
              Macarrão Casaredo Caracolino
            </NameProduct>
            <PriceText>
              R$ 3,98
            </PriceText>

          <View style={{
              alignItems:'center',
              justifyContent:'space-between',
              flexDirection:'row'
            }}
          >
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
          
        </View>
      </ProductView>
    </Contaniner>
  )
}