import { 
  View, 
  Image,
  RefreshControl, 
  
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
import React, { useEffect, useState } from "react";
import { ComponentError } from "../ComponentError";
import { useApi } from "../../hooks/useApi";


export const ProductShow =()=>{

  const [ list, setList ] = useState([])
  const [ busca, setBusca ] = useState('') 
  const [ loading, setLoading ] = useState(false)
  const api = useApi()

  const renderProducts = async () => {
    setLoading(true)
    const response = await api.RenderProducts()
    const resultados = response.data
    setList(resultados)
    setLoading(false)
    return console.log(resultados)
  }
  useEffect(() => {
    renderProducts()
  }, [])

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
      <Contaniner
        contentContainerStyle={{
          alignItems: 'center',
        }}
        refreshControl={<RefreshControl
          refreshing={loading}
          onRefresh={()=>{renderProducts()}}
        />}
      >
      {resultado.length === 0 ? <ComponentError/> : resultado.map((obj) => {
          return <ProductView
          key={obj.id}
        >
          <Image source={require('../../assets/images/vitor.png')} height={35} width={35}/>
          <View
            style={{
              flexDirection: 'column'
            }}
            >
              <NameProduct
              >
                {obj.name}
              </NameProduct>
              <PriceText
              >
                {obj.weight}
              </PriceText>
            <View style={{
                alignItems:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                width: 225,
              }}
            >
              <EditButtom
                onPress={() => ''}
              >
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