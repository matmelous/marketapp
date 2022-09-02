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
  const [ email, setEmail ] = useState('') 
  const [ senha, setSenha ] = useState('') 
  const resultadoEmail = email === "" ? false : testes.filter((data) => {
    if (data.email.includes(email)) {
         return true
       }
         return false
    })
  const resultadoSenha = senha === "" ? false : testes.filter((data) => {
    if (data.senha.includes(senha)) {
        return true
      }
        return false
    }) 

   const resultadoFinal = resultadoEmail === resultadoSenha ? true : false;
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
        valueEmail={email} 
        onChangeTextEmail={setEmail} 
        valueSenha={senha} 
        onChangeTextSenha={setSenha}/>
       
        {resultadoFinal === false ? 
          <ButtonDecision 
            onPress={() => navigator.navigate(PAGES.MAIN)}
          />
        : 
          <ButtonDecision 
            onPress={() => ''}
          />
        }
    </View>
  )
}