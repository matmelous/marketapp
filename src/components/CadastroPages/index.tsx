import { useNavigation } from "@react-navigation/native";
import { UserInterfaceIdiom } from "expo-constants";
import { useState } from "react";
import {  View, Text } from "react-native";
import { addMethod } from "yup";
import PAGES from "../../constants/pages";
import { NavigationType } from "../../navigation";
import api from "../../services/api";
import { ButtonDecision } from "../Buttons/ButtonDecision";
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

  const [user, setUser]=useState(null);
  const [password, setPassword]=useState(null);
  const [email, setEmail]=useState(null);

  const navigation = useNavigation<NavigationType>()

  api.post('/user/add').then((Response) => {
    const teste = JSON.stringify({
      email: 'Brayanteste2GMAIL.COM',
      name: 'BRAYAN',
      password: '123456789',
    })
    teste
    console.log(teste)
  })
  

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
        <Text>
          {user} -- {password} -- {email}
        </Text>
      </Registration>
      <InputConteiner>
        <EmailInput
          placeholder="EMAIL"
          onChangeText={(text)=>setEmail(text)}
        />
        <PasswordInput
          placeholder="SENHA"
          onChangeText={(text)=>setPassword(text)}
        />
        <ConfirmPassword
          placeholder="USER"
          onChangeText={(text)=>setUser(text)}
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
           onPress={'() => register()'}
        >
          <ContinueText>
            CONTINUAR
          </ContinueText>
        </ContinueButton>
      </ButtonsContainer>
     
    </View>
  )
}