import { Text, View } from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision"
import { ImageLogo } from "../../components/ImageLogo"
import { InputLogin } from "../../components/Inputs/InputLogin"
import { TitleDecision } from "../../components/Titles/TitleDecisions"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { NavigationType } from "../../navigation"
import  PAGES  from "../../constants/pages"

const testes = [
  {
    email: "1",
    senha: "2"
  }
]

export const LoginPages = () => {

  const navigator = useNavigation<NavigationType>()
 
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
      <InputLogin/>
      
    </View>
  )
}