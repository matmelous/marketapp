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
import { EditButton } from "../Buttons/EditButton"
import { SearchBarProduct } from "../Searchs/SearchBar";
import React, { useEffect, useState } from "react";
import { ComponentError } from "../ComponentError";
import { useApi } from "../../hooks/useApi";
import { DataProductShow } from "./dataProductShow";
import { ImageProductShow } from "./ImageProductShow";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../navigation";
import PAGES from "../../constants/pages";
import { AddButton } from "../Buttons/ButtonAdd/styled";
import { ButtonAdd } from "../Buttons/ButtonAdd";


export const ProductShow =(props)=>{

  const [ list, setList ] = useState([])
  const [ busca, setBusca ] = useState('') 
  const [ loading, setLoading ] = useState(false)
  const api = useApi()
  const navigation = useNavigation<NavigationType>()


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
    <View
      style={{
        height: '90%',
        width: '100%'
      }}
    >
      <ButtonAdd onPress={() => navigation.navigate(PAGES.ADDPRODUCTS)}/>
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
          <ImageProductShow/>
          <View
            style={{flexDirection: 'column'}}
          >
          <DataProductShow
            labelName={obj.name}
            labelPrice={obj.weight}
          />
          <EditButton
          labelAdd="Adicionar"
          onPressAdd={() => {}}
          />
          </View>
        </ProductView>
        })}
      </Contaniner>
    </View>
  )
}