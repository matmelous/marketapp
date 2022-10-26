import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {  View, Text } from "react-native";
import PAGES from "../../constants/pages";
import { useApi } from "../../hooks/useApi";
import { NavigationType } from "../../navigation";
import {
  Imagem,
  Viewlogo,
  Registration,
  Title,
  InputConteiner,
  EmailInput,
  PasswordInput,
  ConfirmPassword,
  ButtonsContainer,
  CancelButton,
  ContinueButton,
  CancelText,
  ContinueText,
} from "./style"

export const CadastroPages = () => {

  const navigation = useNavigation<NavigationType>()
  const [passwords, setPasswords]=useState<string>("");
  const [email, setEmail]=useState<string>("");
  const [user, setUser]=useState<string>("");
  const api = useApi();

  const addAcout = async (name: string, email: string, password:string) => {
    const data = await api.createAcout(name, email, password);
    console.log(data)
  }

  const handleSubmit = async () =>{
    const data = await api.userRender(email)
    if(!data.exists){
      addAcout(user, email, passwords)
    }
  }

  return (
    <View>
      <Viewlogo>
        <Imagem 
          source={require('../../assets/images/login.png')} 
          height={200} 
          width={242}
        />
      </Viewlogo>
      <Registration>
        <Title>
          Cadastro
        </Title>
      </Registration>
      <InputConteiner>
        <ConfirmPassword
          placeholder="NOME"
          onChangeText={(text)=>setUser(text)}
        />
        <EmailInput
          placeholder="EMAIL"
          onChangeText={(text)=>setEmail(text.toLowerCase())}
        />
        <PasswordInput
          placeholder="SENHA"
          onChangeText={(text)=>setPasswords(text)}
        />
        <ConfirmPassword
          placeholder="CONFIRME SUA SENHA"
        />
      </InputConteiner>
      <ButtonsContainer>
        <CancelButton>
          <CancelText 
            onPress={() => navigation.navigate(PAGES.PRIMEPAGES)}
          >
            CANCELAR
          </CancelText>
        </CancelButton>
        <ContinueButton
          onPress={() => handleSubmit()}
        >
          <ContinueText>
            CONTINUAR
          </ContinueText>
        </ContinueButton>
      </ButtonsContainer>
    </View>
  )
}