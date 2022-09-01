import { 
  View, 
  Image, 
  
} from "react-native";
import { 
  ProductView, 
  NameProduct, 
  PriceText,
  EditButtom, 
  AddButtom, 
  ButtonsText,
  Contaniner
} from "./styled"
import Products from "../../data/Products.json"
import { SearchBarProduct } from "../Searchs/SearchBar";
import React, { useState } from "react";
import list from "../../data/Products.json"
import { ComponentError } from "../ComponentError";


export const ProductShow =()=>{

  const [ busca, setBusca ] = useState('') 
  const resultado = busca === "" ? list : list.filter((data) => {
    if (data.produtos.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
         return true 
       } 
         return false
   })
   
  return(
    <>
      <SearchBarProduct 
        value={busca} 
        onChangeText={setBusca}
      />
      <Contaniner>
      {resultado.length === 0 ? <ComponentError/> : resultado.map((dsd) => {
          return <ProductView
          key={dsd.produtos}
        >
          <Image source={require('../../assets/images/vitor.png')} height={35} width={35}/>
          <View
            style={{
              flexDirection: 'column'
            }}
            >
              <NameProduct
                key={dsd.produtos}
              >
                {dsd.produtos}
              </NameProduct>
              <PriceText
                key={dsd.Valor}
              >
                {dsd.Valor}
              </PriceText>
            <View style={{
                alignItems:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                width: 225,
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
        
        })}
      </Contaniner>
    </>
  )
}