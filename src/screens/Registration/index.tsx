import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { View } from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision"
import { CadastroPages } from "../../components/CadastroPages"
import { ImageLogo } from "../../components/ImageLogo"
import PAGES from "../../constants/pages"
import { useApi } from "../../hooks/useApi"
import { NavigationType } from "../../navigation"

export const Registratio = () => {

  const navigation = useNavigation<NavigationType>()
  const [passwords, setPasswords]=useState<string>("");
  const [email, setEmail]=useState<string>("");
  const [user, setUser]=useState<string>("");
  const [confirmPassoword, setconfirmPassoword] = useState<string>("")
  const api = useApi();

  const addAcout = async (name: string, email: string, password:string) => {
    const data = await api.createAcout(name, email, password);
    console.log(data)
  }

  function confirmPassword() {
    if(confirmPassoword === passwords){
      return true
    }else{
      return false
    }
  }
 
  const handleSubmit = async () =>{
    const data = await api.userRender(email)
    if(!data.exists){
      console.log('Usuario cadastrado com sucesso')
      addAcout(user, email, passwords)
      true
    }else{
      return console.log('Usuario ja cadastrado')
    }
  }

  const handleRegister = () => {
    if(confirmPassword()){
      return handleSubmit()
    }else{
      return console.log('senhas diferentes')
    }
  } 


  return (
    <View>
      <ImageLogo/>
      <CadastroPages
        onChangeTextEmail={(text) =>
          setEmail(text.toLowerCase())
        }
        onChangeTextPassowords={(text) => 
          setPasswords(text.toLowerCase())
        }
        onChangeTextUser={(text) => 
          setUser(text.toLowerCase())
        }
        onChangeTextConfirm={
          (text) => setconfirmPassoword(text)
        }
      />
      <ButtonDecision
        onPress={() => {
          handleRegister()
        }}
        onPressCancel={() => {
          navigation.navigate(PAGES.PRIMEPAGES)
        }}
      />
    </View>
  )
}