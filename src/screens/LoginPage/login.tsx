import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import {  View } from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision"
import { ImageLogo } from "../../components/ImageLogo"
import { InputLogin } from "../../components/Inputs/InputLogin"
import { TitleDecision } from "../../components/Titles/TitleDecisions"
import PAGES from "../../constants/pages"
import { useApi } from "../../hooks/useApi"
import { NavigationType } from "../../navigation"

export const LoginPages = () => {

  const api = useApi();
  const navigation = useNavigation<NavigationType>()
  const [emailUser, setEmail ] = useState<string>("")
  const [passwordUser, setPassword ] = useState<string>("")

  const verifyUser = async()=>{
    const data = await api.VerifyLogin(emailUser, passwordUser)
    if(data.exists){
      console.log('conta verificada com sucesso')
      navigation.navigate(PAGES.MAIN)
    }else{
      console.log('Conta não encontrada')
    }
  }

  return(
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ImageLogo/>
      <TitleDecision>
        Login
      </TitleDecision>
      <InputLogin 
        onChangeTextEmail={(text) =>
          setEmail(text.toLowerCase())
        }
        onChangeTextPassword={(text) =>
          setPassword(text)
        }      
      />
      <ButtonDecision 
        onPress={()=>verifyUser()}
      />
    </View>
  )
}