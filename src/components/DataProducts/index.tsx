import { useState } from "react"
import {View} from "react-native"
import { useApi } from "../../hooks/useApi"
import { ButtonDecision } from "../Buttons/ButtonDecision"
import Header from "../Header"
import { InputData, ContentInput,TitleInput, InputImage } from "./styled"

export const DataProducts = () => {
  const api=useApi()
  const [name, setName ]=useState<string>("")
  const [brand]=useState<string>("")
  const [weight,seteWeight ]=useState<number>() 

  const addProduct= async(name: string, brand:string, weight:number)=>{
    const data = await api.addProducts(name, brand, weight )
    console.log(data)
  }

  const addValue = async(value:number,  id_product: number, id_marketplace: number) => {
    const data = await api.adValue(value, id_product, id_marketplace)
    console.log("data => " + data)
  }

  const handleSubmit = async()=>{
    const data= await api.verifyProduct(name, brand)
    if(!data.exists){
      const resp = await addProduct(name, brand, weight)
      console.log('produto cadastrado com sucesso')
    }else{
      return console.log('produto ja cadastrado')
    }
  }

  return(
    <View>
      <Header/>
      <ContentInput>
        <TitleInput>Nome do produto</TitleInput>
        <InputData  
          placeholder="Digite o nome do produto"
          onChangeText={(text)=>setName(text.toLowerCase())}
        />

        <TitleInput>Peso do produto</TitleInput>
        <InputData 
          placeholder="Digite o peso do produto"
          onChangeText={(text)=>seteWeight(text.toLowerCase())}
        />

        <TitleInput>Imagem do produto</TitleInput>
        <InputImage
          placeholder="Adicione a imagem do produto"
          onChangeText={()=>""}
        />
         
      </ContentInput>
      
        <ButtonDecision
        onPress={() => handleSubmit()}
        />
    </View>
  )
}