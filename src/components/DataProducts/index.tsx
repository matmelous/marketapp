import { useState } from "react"
import {View} from "react-native"
import { useApi } from "../../hooks/useApi"
import Header from "../Header"
import { InputData, ContentInput } from "./styled"

export const DataProducts = () => {
  const api=useApi()
  const [name, setName ]=useState<string>()
  const [brand,setBrand]=useState<string>() 
  const [value,setValue]=useState<string>() 
  const [weight,seteWeight ]=useState<number>() 
  const imagens= null
  const addProduct= async(name: string, brand:string, weight:number, imagens:null)=>{
  const data= await api.addProducts(name, brand, weight, imagens )
  console.log(data)
  }
  const handleSubmit=async()=>{
    const data= await api.addProducts(name, brand, weight, imagens )
  console.log(data)
  }
  return(
    <View>
      <Header/>
      <ContentInput>
        <InputData  
          placeholder="Nome do Produto"
          onChangeText={(text)=>setName(text)}
        />
          <InputData 
          placeholder="Marca do Produto"
          onChangeText={(text)=>setBrand(text)}
        />
          <InputData 
          placeholder="Valor do Produto"
          onChangeText={(text)=>setValue(text)}
        />
          <InputData 
          placeholder="Peso do Produto"
          onChangeText={(text)=>seteWeight(text)}
        />
          <InputData 
          placeholder="Nome do Mercado"
        />
      </ContentInput>
    </View>
  )
}